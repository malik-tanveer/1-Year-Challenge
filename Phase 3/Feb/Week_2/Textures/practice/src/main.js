import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 1000);

camera.position.z = 5;


scene.add(camera);

const ambientLight = new THREE.AmbientLight( 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

let loader = new THREE.TextureLoader();

let color = loader.load("../images/color.jpg");
let height = loader.load("../images/height.jpg");
let normal = loader.load("../images/normal.jpg");
let opengl = loader.load("../images/opengl.jpg");
let preview = loader.load("../images/preview.jpg");
let roughnees = loader.load("../images/roughness.jpg");

const material = new THREE.MeshStandardMaterial({
  map: color,
  normalMap: normal,
  roughnessMap: roughnees,
  displacementMap: height,
  displacementScale: .01,

});

const geometry = new THREE.BoxGeometry(3, 1.8, 2, 100, 100);
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
    window.requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
animate();