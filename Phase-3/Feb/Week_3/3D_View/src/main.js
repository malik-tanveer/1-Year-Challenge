// src/main.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1a);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 30);

// Renderer
const canvas = document.getElementById("app");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.bias = -0.001;
scene.add(directionalLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
fillLight.position.set(-5, 5, -5);
scene.add(fillLight);

// Floor (shadow catcher)
// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(20, 20),
//   new THREE.MeshStandardMaterial({ color: 0x111111 })
// );
// floor.rotation.x = -Math.PI / 2;
// floor.position.y = -1;
// floor.receiveShadow = true;
// scene.add(floor);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;

// GLTF Loader
const loader = new GLTFLoader();

loader.load(
  './jewelry_box.glb',


  (gltf) => {
    const model = gltf.scene;

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    scene.add(model);

    console.log("Model Loaded ✅", gltf);
  },

  // ✅ 2. onProgress
  (xhr) => {
    const percent = (xhr.loaded / xhr.total) * 100;
    console.log("Loading: " + percent.toFixed(2) + "%");
  },

  // ✅ 3. onError
  (error) => {
    console.error("Error loading model ❌", error);
  }
);

// Animate loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});