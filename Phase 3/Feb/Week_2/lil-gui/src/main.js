import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#app'),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();

const colorMap = loader.load('../images/fabrics_0087_color_1k.jpg');
const aoMap = loader.load('../images/fabrics_0087_ao_1k.jpg');
const roughnessMap = loader.load('../images/fabrics_0087_roughness_1k.jpg');
const normalMap = loader.load('../images/fabrics_0087_normal_opengl_1k.png');
const heightMap = loader.load('../images/fabrics_0087_height_1k.png');


const geometry = new THREE.BoxGeometry(2, 2, 2, 100, 100, 100);

// AO map ke liye required
geometry.setAttribute(
  'uv2',
  new THREE.BufferAttribute(geometry.attributes.uv.array, 2)
);


const material = new THREE.MeshStandardMaterial({
  map: colorMap,
  aoMap: aoMap,
  roughnessMap: roughnessMap,
  normalMap: normalMap,
  displacementMap: heightMap,
  displacementScale: 0.05,
  metalness: 0.2,
  roughness: 1
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const gui = new GUI();

const meshFolder = gui.addFolder('Mesh');

// Scale
const scaleFolder = meshFolder.addFolder('Scale');
scaleFolder.add(cube.scale, 'x', 0.5, 3, 0.1);
scaleFolder.add(cube.scale, 'y', 0.5, 3, 0.1);
scaleFolder.add(cube.scale, 'z', 0.5, 3, 0.1);

// Position
const positionFolder = meshFolder.addFolder('Position');
positionFolder.add(cube.position, 'x', -5, 5, 0.1);
positionFolder.add(cube.position, 'y', -5, 5, 0.1);
positionFolder.add(cube.position, 'z', -5, 5, 0.1);

// Rotation
const rotationFolder = meshFolder.addFolder('Rotation');
rotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01);
rotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01);
rotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01);

meshFolder.open();


const materialFolder = gui.addFolder('Material');

materialFolder.addColor(material, 'color').name('Color');
materialFolder.add(material, 'metalness', 0, 1, 0.01);
materialFolder.add(material, 'roughness', 0, 1, 0.01);
materialFolder.add(material, 'displacementScale', 0, 0.2, 0.01);
materialFolder.add(material, 'wireframe');

materialFolder.open();


const lightFolder = gui.addFolder('Lights');

// Directional Light
const dirLightFolder = lightFolder.addFolder('Directional Light');
dirLightFolder.add(directionalLight, 'intensity', 0, 5, 0.1);
dirLightFolder.add(directionalLight.position, 'x', -10, 10, 0.1);
dirLightFolder.add(directionalLight.position, 'y', -10, 10, 0.1);
dirLightFolder.add(directionalLight.position, 'z', -10, 10, 0.1);

// Ambient Light
const ambientFolder = lightFolder.addFolder('Ambient Light');
ambientFolder.add(ambientLight, 'intensity', 0, 3, 0.1);

lightFolder.open();


const params = {
  rotationSpeedX: 0.01,
  rotationSpeedY: 0.01
};

const animationFolder = gui.addFolder('Animation');
animationFolder.add(params, 'rotationSpeedX', 0, 0.1, 0.001);
animationFolder.add(params, 'rotationSpeedY', 0, 0.1, 0.001);
animationFolder.open();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += params.rotationSpeedX;
  cube.rotation.y += params.rotationSpeedY;

  controls.update();
  renderer.render(scene, camera);
}

animate();