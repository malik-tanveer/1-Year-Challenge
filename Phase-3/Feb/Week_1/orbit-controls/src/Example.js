import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x101010);

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(8, 6, 8);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#draw"),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xff0040, 1, 50);
pointLight.position.set(-5, 5, 5);
scene.add(pointLight);

const spotLight = new THREE.SpotLight(0x00ffff, 1);
spotLight.position.set(0, 10, 0);
spotLight.castShadow = true;
scene.add(spotLight);

// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: 0x222222 })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1.5;
floor.receiveShadow = true;
scene.add(floor);

// Geometries
const geometries = [];

// Box
const box = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshStandardMaterial({ color: 0xff5555, metalness: 0.5, roughness: 0.4 })
);
box.position.set(-4, 1, 0);
box.castShadow = true;
geometries.push(box);

// Sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1.2, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x55ff55, metalness: 0.2, roughness: 0.6 })
);
sphere.position.set(0, 1, 0);
sphere.castShadow = true;
geometries.push(sphere);

// Torus
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(1, 0.4, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0x5555ff, metalness: 0.8, roughness: 0.2 })
);
torus.position.set(4, 1, 0);
torus.castShadow = true;
geometries.push(torus);

// Cone
const cone = new THREE.Mesh(
  new THREE.ConeGeometry(1, 2, 32),
  new THREE.MeshStandardMaterial({ color: 0xffff55, metalness: 0.3, roughness: 0.7 })
);
cone.position.set(-2, 1, -4);
cone.castShadow = true;
geometries.push(cone);

// Wireframe example
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
  new THREE.MeshStandardMaterial({ color: 0xff00ff, wireframe: true })
);
torusKnot.position.set(2, 1, -4);
geometries.push(torusKnot);
scene.add(...geometries);

// Animate
function animate() {
  requestAnimationFrame(animate);

  // rotate each geometry differently
  box.rotation.x += 0.01; box.rotation.y += 0.01;
  sphere.rotation.y += 0.008;
  torus.rotation.x += 0.01; torus.rotation.z += 0.01;
  cone.rotation.y += 0.01;
  torusKnot.rotation.x += 0.02; torusKnot.rotation.y += 0.02;

  controls.update();
  renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
