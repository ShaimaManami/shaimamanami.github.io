/**
 * hero-sphere.js — the WebGL background behind the hero heading on the
 * homepage. A fullscreen fragment shader of glowing flowing lines, drifting
 * noise, a twinkling starfield, and a soft mouse-follow glow — ported from
 * https://codepen.io/VoXelo/full/raxRoxg (own adaptation: recolored from
 * warm/rainbow tones into the site's cyan/violet accent palette, and
 * mounted through the same MeshBasicMaterial.onBeforeCompile shader-
 * override trick the earlier hero effects used, since this project's
 * trimmed three.js bundle doesn't export ShaderMaterial or
 * OrthographicCamera — the shader itself only needs `vUv` and a resolution
 * uniform, so a plain PerspectiveCamera + large plane works identically).
 *
 * Earlier versions (Perlin displacement sphere, then raymarched metaball
 * droplets) are kept, unused, at hero-sphere-original.js and
 * hero-sphere-metaballs.js.
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

function currentTheme() {
  return document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
}

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
uniform vec2 uMouse;
uniform vec3 uBgColor;
uniform float uThemeMix;
varying vec2 vUv;

#define PI 3.14159265359

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

float wave(vec2 p, float phase, float freq) {
  return sin(p.x * freq + phase) * 0.3 * sin(p.y * freq * 0.5 + phase * 0.7);
}

float glowLine(float dist, float thickness, float intensity) {
  return intensity * thickness / (abs(dist) + thickness * 0.5);
}

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
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

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float starfield(vec2 uv, float time) {
  vec2 grid = floor(uv * 150.0);
  vec2 frac = fract(uv * 150.0) - 0.5;
  float star = hash(grid);
  if (star < 0.985) return 0.0;
  float twinkle = sin(time * 2.0 + grid.x + grid.y) * 0.5 + 0.5;
  float dist = length(frac);
  float sparkle = smoothstep(0.08, 0.0, dist) * twinkle;
  return sparkle * (star - 0.985) * 100.0;
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  uv.x *= uResolution.x / uResolution.y;
  vec2 uv0 = uv;
  vec3 col = vec3(0.0);
  float time = uTime * 0.4;

  // These ambient terms (noise/circle/centerGlow) look fine glowing softly
  // against a black canvas, but the same faint wash reads as a dirty gray
  // haze on a light background — damp them down sharply in light theme.
  float ambient = mix(1.0, 0.12, uThemeMix);

  float noise = (snoise(uv * 0.5 + time * 0.02) + 1.0) * 0.5;
  col += noise * vec3(0.05, 0.03, 0.1) * 0.3 * ambient;

  vec2 mouse_uv = (uMouse - 0.5) * 2.0;
  mouse_uv.x *= uResolution.x / uResolution.y;
  float mouseDist = length(uv - mouse_uv);
  // This warp pulls the flowing lines' sampling coordinates toward the
  // cursor, which — on a light background where there's no ambient glow
  // left to mask it (see the ambient var above) — shows up as a dark
  // smudge where the lines get dragged away from their natural path.
  // Damp it way down in light theme; dark theme keeps the original pull.
  uv += (mouse_uv - uv) * (0.3 / (mouseDist + 0.5)) * mix(1.0, 0.05, uThemeMix);
  float mouseGlow = 0.1 / (mouseDist + 0.1);
  mouseGlow *= (sin(uTime * 1.5) * 0.5 + 0.5) * 0.7 + 0.3;
  col += mouseGlow * vec3(0.55, 0.9, 1.0) * 0.15 * ambient;

  uv *= rot(time * 0.05);
  float waveNoise = snoise(uv * 2.0 + time * 0.2) * 0.1;

  float c1 = sin(time * 0.3 + 0.0) * 0.5 + 0.5;
  float c2 = sin(time * 0.3 + 2.0) * 0.5 + 0.5;
  float c3 = sin(time * 0.3 + 4.0) * 0.5 + 0.5;

  float y1 = uv.y - wave(uv, time * 1.5, 2.0) + waveNoise;
  float line1 = glowLine(y1, 0.03, 0.8);
  vec3 color1 = vec3(0.25 + c1 * 0.25, 0.75 + c2 * 0.2, 0.95);
  col += color1 * line1;

  float y2 = uv.y + 0.4 - wave(uv + vec2(1.0, 0.5), time * 1.2, 2.5) + waveNoise * 0.8;
  float line2 = glowLine(y2, 0.03, 0.8);
  vec3 color2 = vec3(0.4 + c2 * 0.25, 0.35 + c3 * 0.2, 1.0);
  col += color2 * line2;

  float y3 = uv.y - 0.4 - wave(uv + vec2(-0.5, 1.0), time * 1.8, 1.8) + waveNoise * 1.2;
  float line3 = glowLine(y3, 0.03, 0.8);
  vec3 color3 = vec3(0.35 + c1 * 0.25, 0.65 + c3 * 0.2, 0.98);
  col += color3 * line3;

  float dist = length(uv0);
  float circle = abs(sin(dist * 4.0 - time * 2.0)) * exp(-dist * 0.5);
  col += vec3(0.35, 0.65, 1.0) * circle * 0.3 * ambient;

  col += starfield(uv0 * 2.0 + time * 0.01, uTime) * vec3(0.8, 0.95, 1.0) * 0.7 * mix(1.0, 0.4, uThemeMix);

  float centerGlow = exp(-dist * 1.0) * 0.3;
  col += centerGlow * vec3(0.35, 0.45, 0.85) * ambient;

  float vignette = 1.0 - dist * 0.5;
  vignette = smoothstep(0.0, 1.0, vignette);
  col *= vignette;

  col = pow(col, vec3(0.95));

  // Dark theme: additive glow on near-black, exactly as before — col is
  // naturally low almost everywhere, so adding it never washes anything
  // out and there's effectively unlimited headroom before clipping.
  vec3 additiveResult = uBgColor + col;

  // Light theme needs a different operator entirely. Additive clips to
  // white almost immediately (uBgColor is already ~0.95, so there's
  // barely any headroom left before a channel hits 1.0 and the line's
  // hue is destroyed). Mixing straight toward col has the opposite
  // problem — between lines col trends toward near-black, so partial
  // mixing darkens the background into a dirty gray halo. Splitting
  // color from coverage avoids both: normalize col to its own peak
  // brightness (always a fully saturated hue, never dark), then use the
  // *un-normalized* brightness only to decide how much of that hue to
  // blend in over the background.
  float colBrightness = max(max(col.r, col.g), col.b);
  vec3 normalizedCol = colBrightness > 0.001 ? col / colBrightness : uBgColor;
  float coverage = clamp(colBrightness * 3.0, 0.0, 1.0);
  vec3 solidResult = mix(uBgColor, normalizedCol, coverage);

  vec3 finalColor = mix(additiveResult, solidResult, uThemeMix);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

function init() {
  var section = document.getElementById("intro");
  if (!section) return; // this module only runs on the homepage

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var canvas = document.createElement("canvas");
  canvas.className = "hero-sphere__canvas";
  canvas.setAttribute("aria-hidden", "true");
  section.insertBefore(canvas, section.firstChild);

  var renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
    failIfMajorPerformanceCaveat: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  var CAMERA_Z = 52;
  var CAMERA_FOV = 54;
  var camera = new PerspectiveCamera(CAMERA_FOV, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, CAMERA_Z);
  var halfHeightAtZ0 = CAMERA_Z * Math.tan((CAMERA_FOV * Math.PI) / 360);

  var scene = new Scene();

  var uniforms = {
    uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
    uTime: { value: 0 },
    uMouse: { value: new Vector2(0.5, 0.5) },
    uBgColor: { value: new Color(currentTheme() === "light" ? 0xf2f2f2 : 0x111111) },
    uThemeMix: { value: currentTheme() === "light" ? 1 : 0 }
  };

  document.addEventListener("themechange", function () {
    uniforms.uBgColor.value.set(currentTheme() === "light" ? 0xf2f2f2 : 0x111111);
    uniforms.uThemeMix.value = currentTheme() === "light" ? 1 : 0;
  });

  var material = new MeshBasicMaterial();
  material.onBeforeCompile = function (shader) {
    shader.uniforms.uResolution = uniforms.uResolution;
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uMouse = uniforms.uMouse;
    shader.uniforms.uBgColor = uniforms.uBgColor;
    shader.uniforms.uThemeMix = uniforms.uThemeMix;
    shader.vertexShader = VERTEX_SHADER;
    shader.fragmentShader = FRAGMENT_SHADER;
  };

  var geometry = new PlaneGeometry(1, 1);
  var mesh = new Mesh(geometry, material);
  scene.add(mesh);

  var mouse = { x: 0.5, y: 0.5 };
  var targetMouse = { x: 0.5, y: 0.5 };

  function onMouseMove(e) {
    var rect = canvas.getBoundingClientRect();
    targetMouse.x = (e.clientX - rect.left) / rect.width;
    targetMouse.y = 1 - (e.clientY - rect.top) / rect.height;
  }

  function updateMouseListener() {
    window.removeEventListener("mousemove", onMouseMove);
    if (!prefersReducedMotion && inViewport) {
      window.addEventListener("mousemove", onMouseMove);
    }
  }

  function handleResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var renderHeight = height + height * 0.3;

    renderer.setSize(width, renderHeight);
    camera.aspect = width / renderHeight;
    camera.updateProjectionMatrix();
    uniforms.uResolution.value.set(width, renderHeight);

    // Scale the 1x1 plane to exactly fill the camera frustum at z=0, so
    // vUv spans a true 0..1 range across the visible screen (this shader
    // reads vUv directly, unlike the metaball version's world-position
    // ray math, so an oversized plane would compress vUv into a sliver).
    var frustumHeight = 2 * halfHeightAtZ0;
    var frustumWidth = frustumHeight * camera.aspect;
    mesh.scale.set(frustumWidth, frustumHeight, 1);

    if (prefersReducedMotion || !inViewport) renderer.render(scene, camera);
  }

  var mountTime = Date.now();
  var inViewport = false;
  var rafId = null;

  function renderFrame() {
    uniforms.uTime.value = 0.001 * (Date.now() - mountTime);
    mouse.x += (targetMouse.x - mouse.x) * 0.05;
    mouse.y += (targetMouse.y - mouse.y) * 0.05;
    uniforms.uMouse.value.set(mouse.x, mouse.y);
    renderer.render(scene, camera);
  }

  function loop() {
    rafId = requestAnimationFrame(loop);
    renderFrame();
  }

  function startLoop() {
    if (rafId === null && !prefersReducedMotion && inViewport) {
      loop();
    }
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
        updateMouseListener();
        if (inViewport) startLoop();
        else {
          stopLoop();
          renderer.render(scene, camera);
        }
      });
    });
    observer.observe(canvas);
  } else {
    inViewport = true;
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  if (prefersReducedMotion) {
    renderer.render(scene, camera);
  } else if (inViewport) {
    updateMouseListener();
    startLoop();
  }

  // Fade the canvas in, matching the original's 3s cubic-bezier transition.
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      canvas.setAttribute("data-visible", "true");
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
