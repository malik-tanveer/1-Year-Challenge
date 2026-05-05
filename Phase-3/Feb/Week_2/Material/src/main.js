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
scene.add(camera);

const geometry = new THREE.BoxGeometry();

// Material's are used to define the appearance of the geometry.

// Default Material Properties

// {
//   wireframe: false,
//   transparent: false,
//   opacity: 1,
//   side: THREE.FrontSide,
//   visible: true,
// }


// new THREE.<MaterialName>({
// properties
// Properties of the material
// });

// const material = new THREE.MeshBasicMaterial({
//   color: "gray",
//   transparent: true,
//   opacity: 0.5,
// });

// const material = new THREE.MeshNormalMaterial({
//   flatShading: true
// });

const material = new THREE.MeshStandardMaterial({color: 'gray'});
const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);


const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

controls.update();
renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();