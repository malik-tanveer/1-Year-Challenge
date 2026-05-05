import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const canvas = document.getElementById('canvas');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x222222);
camera.position.z = 5;

let selectedObject = null;

window.addEventListener('click', (event) => {

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(meshes);

  if (intersects.length > 0) {

    const clicked = intersects[0].object;

    // Reset previous selection
    if (selectedObject && selectedObject !== clicked) {
      selectedObject.material.emissive.set(0x000000);
    }

    selectedObject = clicked;
    selectedObject.material.emissive.set(0x333333);

  } else {

    // 🔥 Clicked outside
    if (selectedObject) {
      selectedObject.material.emissive.set(0x000000);
      selectedObject = null;
    }

  }

});
// Create multiple objects
const meshes = [];

// Circle
const CircleGeometry = new THREE.CircleGeometry();
const circleMaterial = new THREE.MeshStandardMaterial({ color: "pink",side: THREE.DoubleSide });
const sphere = new THREE.Mesh(CircleGeometry, circleMaterial);
sphere.position.x = -3;
scene.add(sphere);
meshes.push(sphere);

// cylinder
const CylinderGeometry = new THREE.CylinderGeometry();
const CylinderMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const cylinder = new THREE.Mesh(CylinderGeometry, CylinderMaterial);
scene.add(cylinder);
meshes.push(cylinder);

// cube
const CubeGeometry = new THREE.BoxGeometry();
const CubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const cube = new THREE.Mesh(CubeGeometry, CubeMaterial);
cube.position.x = 3;
scene.add(cube);
meshes.push(cube);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);


// Handle resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0;

function animate() {
    requestAnimationFrame(animate);
    
    controls.update();
            
    renderer.render(scene, camera);
}

animate();