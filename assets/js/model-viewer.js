/**
 * model-viewer.js — the 3D MacBook/iPhone device mockups in the homepage
 * project sections. 
 */
import {
  W as WebGLRenderer,
  e as PerspectiveCamera,
  S as Scene,
  G as Group,
  A as AmbientLight,
  D as DirectionalLight,
  P as PlaneGeometry,
  j as MeshBasicMaterial,
  M as Mesh,
  C as Color,
  t as textureLoader,
  m as gltfLoader
} from "./three.js";
import { createSpring } from "./spring.js";

var PROJECTS = [
  {
    sectionId: "project-1",
    device: "laptop",
    cameraZ: 8,
    showDelay: 700,
    models: [
      {
        url: "/assets/models/macbook-pro.glb",
        position: { x: 0, y: 0, z: 0 },
        texture: "/assets/images/meteo-portal-dashboard.jpg",
        placeholder: "/assets/images/meteo-portal-dashboard-placeholder.jpg"
      }
    ]
  },
  {
    sectionId: "project-2",
    device: "phone",
    cameraZ: 11.5,
    showDelay: 300,
    models: [
      {
        url: "/assets/models/iphone-11.glb",
        position: { x: -0.6, y: 1.1, z: 0 },
        texture: "/assets/images/uqu-map-campus.jpg",
        placeholder: "/assets/images/uqu-map-campus-placeholder.jpg"
      },
      {
        url: "/assets/models/iphone-11.glb",
        position: { x: 0.6, y: -0.5, z: 0.3 },
        texture: "/assets/images/uqu-map-halls.jpg",
        placeholder: "/assets/images/uqu-map-halls-placeholder.jpg"
      }
    ]
  },
  {
    sectionId: "project-3",
    device: "laptop",
    cameraZ: 8,
    showDelay: 700,
    models: [
      {
        url: "/assets/models/macbook-pro.glb",
        position: { x: 0, y: 0, z: 0 },
        texture: "/assets/images/bug-tracker-board.jpg",
        placeholder: "/assets/images/bug-tracker-board-placeholder.jpg"
      }
    ]
  }
];

var DARK_TINT = 0x1f2025;

function makeShadowTexture() {
  var size = 256;
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  var ctx = canvas.getContext("2d");
  var gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  gradient.addColorStop(0, "rgba(0,0,0,0.3)");
  gradient.addColorStop(0.7, "rgba(0,0,0,0.12)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}
var shadowCanvas = null;

function fadeOpacity(material, from, to, duration, onDone) {
  var start = null;
  function step(ts) {
    if (start === null) start = ts;
    var t = Math.min(1, (ts - start) / duration);
    material.opacity = from + (to - from) * t;
    if (t < 1) requestAnimationFrame(step);
    else if (onDone) onDone();
  }
  requestAnimationFrame(step);
}

function setupViewer(project) {
  var section = document.getElementById(project.sectionId);
  if (!section) return;

  var wrapper = section.querySelector(".project-summary__model");
  if (!wrapper) return;

  var svgPlaceholder = section.querySelector(".project-summary__placeholder-svg");
  var loader = wrapper.querySelector(".loader");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var started = false;
  var mouseInViewport = false;

  var renderer, camera, scene, modelGroup;

  function ensureRenderer() {
    if (renderer) return;
    var canvas = document.createElement("canvas");
    canvas.className = "model-viewer__canvas";
    wrapper.classList.add("model-viewer");
    wrapper.appendChild(canvas);

    renderer = new WebGLRenderer({ canvas: canvas, alpha: true, antialias: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    camera = new PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, project.cameraZ);

    scene = new Scene();
    scene.add(new AmbientLight(0xffffff, 1.2));
    var dir1 = new DirectionalLight(0xffffff, 1.1);
    dir1.position.set(0.5, 0, 0.866);
    var dir2 = new DirectionalLight(0xffffff, 0.8);
    dir2.position.set(-6, 2, 2);
    scene.add(dir1, dir2);

    modelGroup = new Group();
    scene.add(modelGroup);

    if (!shadowCanvas) shadowCanvas = makeShadowTexture();
    var shadowTex = textureLoader.load(shadowCanvas.toDataURL());
    var shadowMat = new MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.5, depthWrite: false });
    var shadowMesh = new Mesh(new PlaneGeometry(3.4, 1), shadowMat);
    shadowMesh.position.set(0, -1.85, -0.5);
    scene.add(shadowMesh);

    resize();
    window.addEventListener("resize", resize);
  }

  function resize() {
    if (!renderer) return;
    var w = wrapper.clientWidth || 1;
    var h = wrapper.clientHeight || 1;
    renderer.setSize(w, h, true);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderFrame();
  }

  function renderFrame() {
    if (renderer) renderer.render(scene, camera);
  }

  var yawSpring = createSpring(0, { stiffness: 40, damping: 20, mass: 1.4, onUpdate: renderFrame });
  var pitchSpring = createSpring(0, { stiffness: 40, damping: 20, mass: 1.4, onUpdate: renderFrame });
  var mouseThrottle = null;

  function onMouseMove(e) {
    if (mouseThrottle) return;
    mouseThrottle = setTimeout(function () { mouseThrottle = null; }, 100);
    var nx = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    var ny = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    yawSpring.set(nx / 2);
    pitchSpring.set(ny / 2);
    if (modelGroup) {
      modelGroup.rotation.y = yawSpring.get();
      modelGroup.rotation.x = pitchSpring.get();
    }
  }

  function updateMouseListener() {
    window.removeEventListener("mousemove", onMouseMove);
    if (!prefersReducedMotion && mouseInViewport) {
      window.addEventListener("mousemove", onMouseMove);
    }
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        mouseInViewport = entry.isIntersecting;
        updateMouseListener();
      });
    }, { threshold: 0.2 }).observe(wrapper);
  }

  function applyScreenTexture(mesh, index, model) {
    var placeholderUrl = model.placeholder;
    var fullUrl = model.texture;

    function apply(tex, targetMesh) {
      tex.colorSpace = "srgb";
      tex.flipY = false;
      tex.generateMipmaps = false;
      targetMesh.material.color = new Color(0xffffff);
      targetMesh.material.transparent = true;
      targetMesh.material.map = tex;
      targetMesh.material.needsUpdate = true;
    }

    var clone = mesh.clone();
    clone.material = mesh.material.clone();
    clone.material.opacity = 1;
    clone.position.z += 0.001;
    mesh.parent.add(clone);

    textureLoader.load(placeholderUrl || fullUrl, function (tex) {
      apply(tex, clone);
      renderFrame();
    });

    textureLoader.load(fullUrl, function (tex) {
      apply(tex, mesh);
      fadeOpacity(clone.material, 1, 0, 500, function () {
        clone.parent.remove(clone);
      });
      (function tick() {
        renderFrame();
        if (clone.material.opacity > 0) requestAnimationFrame(tick);
      })();
    });
  }

  function reveal(modelRoot, model, index) {
    var isPhone = project.device === "phone";
    var delay = 300 * index + project.showDelay;

    if (isPhone) {
      var targetY = modelRoot.position.y;
      modelRoot.position.y = targetY - 1;
      setTimeout(function () {
        var spring = createSpring(modelRoot.position.y, {
          stiffness: 60, damping: 20, mass: 1,
          onUpdate: function (v) { modelRoot.position.y = v; renderFrame(); }
        });
        spring.set(targetY);
      }, delay);
    } else {
      var frame = null;
      modelRoot.traverse(function (n) { if (n.name === "Frame") frame = n; });
      if (frame) {
        frame.rotation.x = Math.PI / 2;
        setTimeout(function () {
          var spring = createSpring(frame.rotation.x, {
            stiffness: 80, damping: 20,
            onUpdate: function (v) { frame.rotation.x = v; renderFrame(); }
          });
          spring.set(0);
        }, delay + 300);
      }
    }
  }

  function onAllLoaded() {
    if (loader) loader.setAttribute("data-visible", "false");
    if (svgPlaceholder) svgPlaceholder.setAttribute("data-visible", "false");
    wrapper.setAttribute("data-loaded", "true");
    resize();
  }

  function start() {
    if (started) return;
    started = true;
    ensureRenderer();

    var loadPromises = project.models.map(function (model, index) {
      return gltfLoader.loadAsync(model.url).then(function (gltf) {
        var root = gltf.scene;
        root.position.set(model.position.x, model.position.y, model.position.z);

        root.traverse(function (node) {
          if (node.isMesh && node.name !== "Screen") {
            node.material = node.material.clone();
            node.material.color = new Color(DARK_TINT);
            // GLTF materials are PBR (MeshStandardMaterial) and render
            // near-black under plain directional/ambient lights with no
            // environment map when metalness is high — force a diffuse
            // response so the tinted body is actually visible.
            if ("metalness" in node.material) node.material.metalness = 0;
            if ("roughness" in node.material) node.material.roughness = 1;
          }
        });

        var screen = null;
        root.traverse(function (node) {
          if (node.name === "Screen") screen = node;
        });
        if (screen) applyScreenTexture(screen, index, model);

        modelGroup.add(root);
        reveal(root, model, index);
      });
    });

    Promise.all(loadPromises).then(onAllLoaded).catch(function (err) {
      console.error("model-viewer: failed to load", project.sectionId, err);
      if (loader) loader.setAttribute("data-visible", "false");
    });
  }

  if ("IntersectionObserver" in window) {
    var startObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            start();
            startObserver.unobserve(section);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    startObserver.observe(section);
  } else {
    start();
  }
}

function init() {
  PROJECTS.forEach(setupViewer);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
