/**
 * Inspired by the mouse-trail → diffuse → reveal pipeline in
 * https://tympanus.net/codrops/2026/03/23/building-a-dual-scene-fluid-x-ray-reveal-effect-in-three-js/
 */
import {
  W as WebGLRenderer,
  e as PerspectiveCamera,
  S as Scene,
  P as PlaneGeometry,
  j as MeshBasicMaterial,
  M as Mesh,
  V as Vector2,
  C as Color
} from "./three.js";
import { monogramSVG } from "./monogram.js";

var VERTEX_SHADER = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

var FRAGMENT_SHADER = `
precision highp float;
uniform vec2 uResolution;
uniform float uTime;
varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= (1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h));
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float glowLine(float dist, float thickness, float intensity) {
  return intensity * thickness / (abs(dist) + thickness * 0.5);
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  uv.x *= uResolution.x / uResolution.y;
  float time = uTime * 0.35;

  vec3 col = vec3(0.0);
  float waveNoise = snoise(uv * 1.6 + time * 0.25) * 0.15;

  float y1 = uv.y - sin(uv.x * 2.2 + time * 1.4) * 0.25 + waveNoise;
  col += vec3(0.3, 0.8, 0.95) * glowLine(y1, 0.05, 0.55);

  float y2 = uv.y + 0.35 - sin(uv.x * 1.8 + time * 1.1 + 2.0) * 0.25 + waveNoise * 0.8;
  col += vec3(0.5, 0.4, 1.0) * glowLine(y2, 0.05, 0.55);

  float dist = length(uv);
  float centerGlow = exp(-dist * 1.4) * 0.35;
  col += centerGlow * vec3(0.35, 0.5, 0.9);

  gl_FragColor = vec4(col, 1.0);
}
`;

function init() {
  var container = document.querySelector(".profile__xray");
  if (!container) return; // this module only runs on the homepage

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var markWrap = document.createElement("div");
  markWrap.className = "profile__xray-mark";
  markWrap.setAttribute("aria-hidden", "true");
  markWrap.innerHTML = monogramSVG(150, "about-monogram-clip");
  container.appendChild(markWrap);

  var hint = document.createElement("span");
  hint.className = "profile__xray-hint";
  hint.textContent = "hover to reveal";
  hint.setAttribute("aria-hidden", "true");
  container.appendChild(hint);

  var sceneCanvas = document.createElement("canvas");
  sceneCanvas.className = "profile__xray-scene";
  sceneCanvas.setAttribute("aria-hidden", "true");
  container.insertBefore(sceneCanvas, container.firstChild);

  var maskCanvas = document.createElement("canvas");
  maskCanvas.className = "profile__xray-mask";
  maskCanvas.setAttribute("aria-hidden", "true");
  container.insertBefore(maskCanvas, markWrap);

  // --- WebGL scene (the "hidden" layer) ---
  var renderer = new WebGLRenderer({
    canvas: sceneCanvas,
    antialias: true,
    alpha: false,
    powerPreference: "low-power"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  var CAMERA_Z = 20;
  var CAMERA_FOV = 50;
  var camera = new PerspectiveCamera(CAMERA_FOV, 1, 0.1, 100);
  camera.position.set(0, 0, CAMERA_Z);
  var halfHeightAtZ0 = CAMERA_Z * Math.tan((CAMERA_FOV * Math.PI) / 360);

  var scene = new Scene();
  var uniforms = {
    uResolution: { value: new Vector2(1, 1) },
    uTime: { value: 0 }
  };

  var material = new MeshBasicMaterial();
  material.onBeforeCompile = function (shader) {
    shader.uniforms.uResolution = uniforms.uResolution;
    shader.uniforms.uTime = uniforms.uTime;
    shader.vertexShader = VERTEX_SHADER;
    shader.fragmentShader = FRAGMENT_SHADER;
  };

  var geometry = new PlaneGeometry(1, 1);
  var mesh = new Mesh(geometry, material);
  scene.add(mesh);

  // --- 2D mask (the "visible" card + reveal hole mechanics) ---
  var maskCtx = maskCanvas.getContext("2d");
  var cardColor = new Color(0x15161c);
  function updateCardColor() {
    var isLight = document.body.getAttribute("data-theme") === "light";
    cardColor.set(isLight ? 0xffffff : 0x15161c);
  }
  updateCardColor();
  document.addEventListener("themechange", updateCardColor);

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var boxWidth = 1, boxHeight = 1;

  function handleResize() {
    var rect = container.getBoundingClientRect();
    boxWidth = Math.max(1, rect.width);
    boxHeight = Math.max(1, rect.height);

    renderer.setSize(boxWidth, boxHeight);
    camera.aspect = boxWidth / boxHeight;
    camera.updateProjectionMatrix();
    uniforms.uResolution.value.set(boxWidth, boxHeight);

    var frustumHeight = 2 * halfHeightAtZ0;
    var frustumWidth = frustumHeight * camera.aspect;
    mesh.scale.set(frustumWidth, frustumHeight, 1);

    // Resizing a canvas clears it to fully transparent, which would leave
    // the gradual per-frame heal in drawMask() rebuilding from scratch
    // (visibly transparent) after every resize — paint it solid right
    // away so only actual pointer-erased holes ever need to heal back in.
    maskCanvas.width = boxWidth * dpr;
    maskCanvas.height = boxHeight * dpr;
    maskCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    maskCtx.globalCompositeOperation = "source-over";
    maskCtx.fillStyle = "#" + cardColor.getHexString();
    maskCtx.fillRect(0, 0, boxWidth, boxHeight);

    if (prefersReducedMotion || !inViewport) renderFrame();
  }

  var pointer = { x: -1, y: -1, active: false };
  function onPointerMove(e) {
    var rect = container.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.active = true;
  }
  function onPointerLeave() {
    pointer.active = false;
  }

  function updateListeners() {
    container.removeEventListener("pointermove", onPointerMove);
    container.removeEventListener("pointerleave", onPointerLeave);
    if (!prefersReducedMotion && inViewport) {
      container.addEventListener("pointermove", onPointerMove);
      container.addEventListener("pointerleave", onPointerLeave);
    }
  }

  function drawMask() {
    // Heal: nudge the whole canvas back toward fully opaque card color each
    // frame, instead of a hard redraw — this is what makes a punched hole
    // close gradually over time rather than snapping shut the instant the
    // pointer leaves.
    maskCtx.globalCompositeOperation = "source-over";
    maskCtx.globalAlpha = 0.05;
    maskCtx.fillStyle = "#" + cardColor.getHexString();
    maskCtx.fillRect(0, 0, boxWidth, boxHeight);
    maskCtx.globalAlpha = 1;

    if (pointer.active && pointer.x >= 0 && pointer.y >= 0) {
      var radius = Math.max(boxWidth, boxHeight) * 0.22;
      var gradient = maskCtx.createRadialGradient(
        pointer.x, pointer.y, 0,
        pointer.x, pointer.y, radius
      );
      gradient.addColorStop(0, "rgba(0,0,0,0.3)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      maskCtx.globalCompositeOperation = "destination-out";
      maskCtx.fillStyle = gradient;
      maskCtx.beginPath();
      maskCtx.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
      maskCtx.fill();
    }
  }

  var mountTime = Date.now();
  var inViewport = false;
  var rafId = null;

  function renderFrame() {
    uniforms.uTime.value = 0.001 * (Date.now() - mountTime);
    renderer.render(scene, camera);
    drawMask();
  }

  function loop() {
    rafId = requestAnimationFrame(loop);
    renderFrame();
  }

  function startLoop() {
    if (rafId === null && !prefersReducedMotion && inViewport) loop();
  }

  function stopLoop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        inViewport = entry.isIntersecting;
        updateListeners();
        if (inViewport) startLoop();
        else stopLoop();
      });
    });
    observer.observe(container);
  } else {
    inViewport = true;
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  if (prefersReducedMotion) {
    drawMask();
  } else if (inViewport) {
    updateListeners();
    startLoop();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
