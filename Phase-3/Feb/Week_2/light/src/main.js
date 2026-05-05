import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';
import GUI from 'lil-gui';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 1000);
camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshStandardMaterial({ color: "gray" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// AmbientLight is a equally light is a all direction and first is define a color and second is opacity

let AmbientLight = new THREE.AmbientLight(0xffff, 0.5);
scene.add(AmbientLight);

// DirectionalLight is a light is a parallel rays and first is define a color and second is opacity
let Directional = new THREE.DirectionalLight(0xffff, 1);
// Position light set
//  x axis , y axis , z axis
Directional.position.set(3, 1, 1);
scene.add(Directional);

// PointLight is a light is a point light and first is define a color and second is opacity and third is distance and fourth is decay
let point = new THREE.PointLight(0xffff,0.5,10,2);
point.position.set(1,1,1);
scene.add(point);

// Spotlight is a light is a cone shape light and first is define a color and second is opacity and third is distance and fourth is angle
let spotLight = new THREE.SpotLight(0xffffff, 2);
spotLight.position.set(5, 10, 5);
scene.add(spotLight);

// HemisphereLight is a light is a sky color and ground color and first is sky color and second is ground color and third is opacity
let hemiLight = new THREE.HemisphereLight(0x00aaff, 0xffaa00, 1);
scene.add(hemiLight);

// RectAreaLight is a light is a rectangular area light and first is define a color and second is opacity and third is width and fourth is height
const rectLight = new THREE.RectAreaLight(0xffffff, 5, 4, 2);
rectLight.position.set(0, 5, 0);
scene.add(rectLight);

// Light Helpers

let direct_helper = new THREE.DirectionalLightHelper(Directional, 2);
scene.add(direct_helper);

let spot_helper = new THREE.SpotLightHelper(spotLight);
scene.add(spot_helper);

let point_helper = new THREE.PointLightHelper(point, 1);
scene.add(point_helper);

let hemi_helper = new THREE.HemisphereLightHelper(hemiLight, 1);
scene.add(hemi_helper);

let rect_helper = new RectAreaLightHelper(rectLight);
rectLight.add(rect_helper);

const controls = new OrbitControls(camera, renderer.domElement);

const gui = new GUI();


// Ambient Light controls
const ambientFolder = gui.addFolder('Ambient Light');
ambientFolder.add(AmbientLight, 'intensity', 0, 2);
ambientFolder.addColor({ color: AmbientLight.color.getHexString() }, 'color').onChange(value => AmbientLight.color.setHex(value));

// Directional Light controls
const directionalFolder = gui.addFolder('Directional Light');
directionalFolder.add(Directional, 'intensity', 0, 2);
directionalFolder.add(Directional.position, 'x', -10, 10);
directionalFolder.add(Directional.position, 'y', -10, 10);
directionalFolder.add(Directional.position, 'z', -10, 10);
directionalFolder.addColor({ color: Directional.color.getHexString() }, 'color').onChange(value => Directional.color.setHex(value));

// Point Light controls
const pointFolder = gui.addFolder('Point Light');
pointFolder.add(point, 'intensity', 0, 2);
pointFolder.add(point, 'distance', 0, 50);
pointFolder.add(point, 'decay', 0, 5);
pointFolder.add(point.position, 'x', -10, 10);
pointFolder.add(point.position, 'y', -10, 10);
pointFolder.add(point.position, 'z', -10, 10);

// Spot Light controls
const spotFolder = gui.addFolder('Spot Light');
spotFolder.add(spotLight, 'intensity', 0, 5);
spotFolder.add(spotLight, 'angle', 0, Math.PI / 2);
spotFolder.add(spotLight.position, 'x', -10, 10);
spotFolder.add(spotLight.position, 'y', -10, 10);
spotFolder.add(spotLight.position, 'z', -10, 10);

// Rectangle Light controls
const rectFolder = gui.addFolder('Rect Light');
rectFolder.add(rectLight, 'intensity', 0, 10);
rectFolder.add(rectLight.position, 'x', -10, 10);
rectFolder.add(rectLight.position, 'y', -10, 10);
rectFolder.add(rectLight.position, 'z', -10, 10);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  window.requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();