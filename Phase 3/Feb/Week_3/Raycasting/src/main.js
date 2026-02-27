import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const colors = ["Blue", "white", "black", "Yellow"];
let colorIndex = 0;

// Hover on the Box and chnage the color and scale it up
let hoveredObject = null;

// window.addEventListener('mousemove', (event) => {

//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//   raycaster.setFromCamera(mouse, camera);
//   const intersects = raycaster.intersectObjects(scene.children);

//   if (intersects.length > 0) {

//     const object = intersects[0].object;

//     if (hoveredObject !== object) {

//       // Reset previous
//       if (hoveredObject) {
//         hoveredObject.scale.set(1, 1, 1);
//       }

//       hoveredObject = object;

//       // Apply new hover effect
//       object.scale.set(1.2, 1.2, 1.2);
//       object.material.color.set(colors[colorIndex]);

//       colorIndex++;
//       if (colorIndex >= colors.length) {
//         colorIndex = 0;
//       }
//     }

//   } else {

//     // Agar kisi object par nahi hai mouse
//     if (hoveredObject) {
//       hoveredObject.scale.set(1, 1, 1);
//       hoveredObject = null;
//     }

//   }

// });

// Click on the Box and change the color 


const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x222222);

// Create a simple cube

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// scene.add(mesh);
const objects = []; // important

const mesh = new THREE.Mesh(geometry, material);
// Cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
cube.position.x = -2;
scene.add(cube);
objects.push(cube);

// Sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
scene.add(sphere);
objects.push(sphere);

// Cone
const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.7, 1.5, 32),
  new THREE.MeshStandardMaterial({ color: 0xffff00 })
);
cone.position.x = 2;
scene.add(cone);
objects.push(cone);

const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

window.addEventListener('click', (event) => {

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {

    const clickedObject = intersects[0].object;

    clickedObject.material.color.set(0xff0000);

  }

});

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();