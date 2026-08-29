/**
 * hero-sphere-metaballs.js — BACKUP, not loaded by any page. Kept as a
 * rollback copy of the raymarched-metaball hero effect that hero-sphere.js
 * replaced with a flowing-glow-line shader. Restore by copying this back
 * over hero-sphere.js.
 *
 * hero-sphere.js — the WebGL background behind the hero heading on the
 * homepage. Raymarched metaball droplets (SDF spheres blended with a
 * smooth-min union, ray marched in a fragment shader) that stretch into
 * an elastic trail following the mouse, inspired by:
 * https://tympanus.net/codrops/2025/06/09/how-to-create-interactive-droplet-like-metaballs-with-three-js-and-glsl/
 * (own implementation, not a copy of that tutorial's code — adapted to
 * this project's trimmed three.js re-export bundle, which doesn't export
 * RawShaderMaterial/ShaderMaterial, so it uses the same
 * MeshBasicMaterial.onBeforeCompile full-shader-override trick already
 * used by hero-sphere-original.js instead of a dedicated shader material).
 *
 * Earlier attempts (Perlin displacement sphere, pixel-tile globe, 2D
 * flow-field) are not kept, except the very first one at
 * hero-sphere-original.js.
 */
import {
  W as WebGLRenderer,
  L as LinearSRGBColorSpace,
  e as PerspectiveCamera,
  S as Scene,
  P as PlaneGeometry,
  j as MeshBasicMaterial,
  M as Mesh,
  V as Vector2
} from "./three.js";

var TRAIL_LENGTH = 9;
var CAMERA_Z = 52;
var CAMERA_FOV = 54;

var VERTEX_SHADER = `
varying vec3 vWorldPos;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

var FRAGMENT_SHADER = `
precision highp float;

uniform vec2 uTrail[${TRAIL_LENGTH}];
uniform float uTime;
uniform float uThemeMix; // 0 = dark theme, 1 = light theme
varying vec3 vWorldPos;

float sdSphere(vec3 p, vec3 center, float r) {
  return length(p - center) - r;
}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float sceneSDF(vec3 p) {
  float d = 1e5;

  // Trail droplets: radius tapers along the trail for a stretchy look.
  for (int i = 0; i < ${TRAIL_LENGTH}; i++) {
    float t = float(i) / float(${TRAIL_LENGTH} - 1);
    float radius = mix(6.8, 2.8, t);
    vec3 center = vec3(uTrail[i], sin(uTime * 0.6 + t * 3.0) * 1.0);
    d = smin(d, sdSphere(p, center, radius), 2.8);
  }

  // Slow ambient orbiters so the cluster stays alive when idle.
  vec3 orbitA = vec3(cos(uTime * 0.35) * 12.0, sin(uTime * 0.45) * 7.0, sin(uTime * 0.3) * 5.0);
  vec3 orbitB = vec3(sin(uTime * 0.28 + 2.0) * 11.0, cos(uTime * 0.4 + 1.0) * 8.0, cos(uTime * 0.33) * 5.0);
  vec3 orbitC = vec3(cos(uTime * 0.22 + 4.0) * 13.0, sin(uTime * 0.32 + 3.0) * 6.0, sin(uTime * 0.26) * 6.0);
  vec3 orbitD = vec3(sin(uTime * 0.4 + 5.0) * 10.0, cos(uTime * 0.24 + 2.5) * 9.0, cos(uTime * 0.36) * 5.0);
  vec3 orbitE = vec3(cos(uTime * 0.3 + 1.5) * 14.0, sin(uTime * 0.38 + 4.5) * 8.0, sin(uTime * 0.29) * 6.0);
  vec3 orbitF = vec3(sin(uTime * 0.26 + 3.5) * 9.0, cos(uTime * 0.33 + 6.0) * 10.0, cos(uTime * 0.31) * 6.0);
  vec3 orbitG = vec3(cos(uTime * 0.4 + 6.5) * 12.0, sin(uTime * 0.27 + 1.0) * 9.0, sin(uTime * 0.35) * 5.0);
  d = smin(d, sdSphere(p, orbitA, 5.0), 2.8);
  d = smin(d, sdSphere(p, orbitB, 4.4), 2.8);
  d = smin(d, sdSphere(p, orbitC, 4.0), 2.8);
  d = smin(d, sdSphere(p, orbitD, 3.8), 2.8);
  d = smin(d, sdSphere(p, orbitE, 4.2), 2.8);
  d = smin(d, sdSphere(p, orbitF, 3.6), 2.8);
  d = smin(d, sdSphere(p, orbitG, 3.4), 2.8);

  return d;
}

vec3 estimateNormal(vec3 p) {
  float e = 0.02;
  return normalize(vec3(
    sceneSDF(p + vec3(e, 0.0, 0.0)) - sceneSDF(p - vec3(e, 0.0, 0.0)),
    sceneSDF(p + vec3(0.0, e, 0.0)) - sceneSDF(p - vec3(0.0, e, 0.0)),
    sceneSDF(p + vec3(0.0, 0.0, e)) - sceneSDF(p - vec3(0.0, 0.0, e))
  ));
}

void main() {
  vec3 rayOrigin = cameraPosition;
  vec3 rayDir = normalize(vWorldPos - cameraPosition);

  float distTraveled = 0.0;
  bool hit = false;
  vec3 p = rayOrigin;

  for (int i = 0; i < 80; i++) {
    p = rayOrigin + rayDir * distTraveled;
    float d = sceneSDF(p);
    if (d < 0.001) { hit = true; break; }
    distTraveled += d;
    if (distTraveled > 90.0) break;
  }

  if (!hit) {
    gl_FragColor = vec4(0.0);
    return;
  }

  vec3 normal = estimateNormal(p);
  vec3 lightDir = normalize(vec3(0.4, 0.6, 0.7));
  float diffuse = max(dot(normal, lightDir), 0.0);
  float fresnel = pow(1.0 - max(dot(normal, -rayDir), 0.0), 3.0);

  vec3 cyan = vec3(0.25, 0.85, 0.95);
  vec3 violet = vec3(0.55, 0.4, 0.98);
  vec3 base = mix(cyan, violet, normal.x * 0.5 + 0.5);
  vec3 color = base * (0.35 + diffuse * 0.65) + fresnel * vec3(1.0);

  // Light theme: deepen the color so it reads against a white background
  // instead of washing out.
  color = mix(color, color * 0.55, uThemeMix);

  gl_FragColor = vec4(color, 0.68);
}
`;

function currentTheme() {
  return document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
}

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
    antialias: false,
    alpha: true,
    powerPreference: "high-performance",
    failIfMajorPerformanceCaveat: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = LinearSRGBColorSpace;

  var camera = new PerspectiveCamera(CAMERA_FOV, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 0, CAMERA_Z);

  var scene = new Scene();

  var trailUniform = [];
  for (var i = 0; i < TRAIL_LENGTH; i++) trailUniform.push(new Vector2(0, 0));

  var uniforms = {
    uTrail: { value: trailUniform },
    uTime: { value: 0 },
    uThemeMix: { value: currentTheme() === "light" ? 1 : 0 }
  };

  var material = new MeshBasicMaterial();
  material.onBeforeCompile = function (shader) {
    shader.uniforms.uTrail = uniforms.uTrail;
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uThemeMix = uniforms.uThemeMix;
    shader.vertexShader = VERTEX_SHADER;
    shader.fragmentShader = FRAGMENT_SHADER;
  };
  material.transparent = true;
  material.depthWrite = false;

  // Large enough to always cover the visible frustum; ray direction is
  // computed from world position, so exact sizing doesn't matter as long
  // as it's bigger than the viewport at CAMERA_Z.
  var geometry = new PlaneGeometry(400, 400);
  var mesh = new Mesh(geometry, material);
  scene.add(mesh);

  document.addEventListener("themechange", function () {
    uniforms.uThemeMix.value = currentTheme() === "light" ? 1 : 0;
  });

  var halfHeightAtZ0 = CAMERA_Z * Math.tan((CAMERA_FOV * Math.PI) / 360);
  var aspect = window.innerWidth / window.innerHeight;

  var targetWorld = { x: 0, y: 0 };
  var trailPositions = [];
  for (var t = 0; t < TRAIL_LENGTH; t++) trailPositions.push({ x: 0, y: 0 });

  function setTargetFromClient(clientX, clientY) {
    var rect = canvas.getBoundingClientRect();
    var ndcX = ((clientX - rect.left) / rect.width) * 2 - 1;
    var ndcY = -(((clientY - rect.top) / rect.height) * 2 - 1);
    targetWorld.x = ndcX * halfHeightAtZ0 * aspect;
    targetWorld.y = ndcY * halfHeightAtZ0;
  }

  function onMouseMove(e) {
    setTargetFromClient(e.clientX, e.clientY);
  }

  function handleResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var renderHeight = height + height * 0.3;

    renderer.setSize(width, renderHeight);
    aspect = width / renderHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    if (prefersReducedMotion || !inViewport) renderFrame();
  }

  var mountTime = Date.now();
  var inViewport = false;
  var rafId = null;

  function renderFrame() {
    uniforms.uTime.value = 0.001 * (Date.now() - mountTime);

    trailPositions[0].x += (targetWorld.x - trailPositions[0].x) * 0.18;
    trailPositions[0].y += (targetWorld.y - trailPositions[0].y) * 0.18;
    for (var i = 1; i < TRAIL_LENGTH; i++) {
      trailPositions[i].x += (trailPositions[i - 1].x - trailPositions[i].x) * 0.22;
      trailPositions[i].y += (trailPositions[i - 1].y - trailPositions[i].y) * 0.22;
    }
    for (var j = 0; j < TRAIL_LENGTH; j++) {
      uniforms.uTrail.value[j].set(trailPositions[j].x, trailPositions[j].y);
    }

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

  function updateMouseListener() {
    window.removeEventListener("mousemove", onMouseMove);
    if (!prefersReducedMotion && inViewport) {
      window.addEventListener("mousemove", onMouseMove);
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
