import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshStandardMaterial({
  color: 0xaaaaaa,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// 1️⃣ Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// 2️⃣ Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// 3️⃣ Point Light
const pointLight = new THREE.PointLight(0xffaa00, 5, 50);
pointLight.position.set(-5, 3, 0);
scene.add(pointLight);

// 4️⃣ Spot Light
const spotLight = new THREE.SpotLight(0x00aaff, 5, 100, Math.PI * 0.2);
spotLight.position.set(0, 8, 5);
scene.add(spotLight);
scene.add(spotLight.target);


// Directional light helper
const dirHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
scene.add(dirHelper);

// Point light helper
const pointHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointHelper);

// Spot light helper
const spotHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.01;

  controls.update();

  spotHelper.update();

  renderer.render(scene, camera);
}

animate();
