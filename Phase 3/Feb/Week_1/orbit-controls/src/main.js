import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "white", wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

// Zooming is disabled, so the camera will only rotate around the target point
// controls.enableZoom = false;

// controls.zoomSpeed = 0.8; // Adjust the zoom speed to make it faster or slower when zooming in and out. A higher value will make the zooming faster, while a lower value will make it slower.
controls.zoomSpeed = 5;

// controls.enablePan = true; // Enable panning to allow the camera to move left, right, up, and down
// controls.enablePan = false; // Disable panning to prevent the camera from moving left, right, up, or down


// autoRotate is enabled, so the camera will automatically rotate around the target point without user interaction. This can create a dynamic and engaging visual effect, especially when showcasing 3D models or scenes.
controls.autoRotate = true;
// controls.autoRotateSpeed = 8; // Adjust the speed of auto-rotation

// Set limits for zooming and rotation to prevent the camera from getting too close or too far from the target, and to restrict vertical rotation to a certain range.
controls.enableDamping = true; // Enable damping (inertia) for smoother camera movement

// Damping factor determines how quickly the camera slows down after the user stops interacting. A higher value will make the camera come to a stop more quickly, while a lower value will allow it to continue moving for a longer period of time. Adjust this value to achieve the desired level of smoothness in the camera movement.

controls.dampingFactor =0.5; // Adjust the damping factor for smoother movement

// Allow to Angle Controls
// controls.minPolarAngle = 0;

// controls.maxPolarAngle = Math.PI / 2; // Set the maximum vertical rotation angle (in radians) to prevent the camera from flipping upside down

controls.minDistance = 2; // controls.maxDistance = 10; // Set the maximum distance the camera can be from the target point

controls.maxDistance = 20; // Set the maximum distance the camera can be from the target point

// Controls the camera of angle x axis , y axis and z axis

// controls.minAzimuthAngle = -Math.PI / 4; // Set the minimum horizontal rotation angle (in radians)

// controls.maxAzimuthAngle = Math.PI / 4; // Set the maximum horizontal rotation angle (in radians)

// By default, the OrbitControls use the arrow keys for navigation. However, you can customize the key bindings to use different keys for controlling the camera's movement. This can be useful if you want to use a different set of keys for navigation or if you want to disable certain keys to prevent unintended camera movements.

// controls.enableKeys = true;

// controls.keys = {
// 	LEFT: 'ArrowLeft', //left arrow
// 	UP: 'ArrowUp', // up arrow
// 	RIGHT: 'ArrowRight', // right arrow
// 	BOTTOM: 'ArrowDown' // down arrow
// }


// By default, the OrbitControls use the left mouse button for rotating the camera, the middle mouse button for zooming, and the right mouse button for panning. However, you can customize these mouse button bindings to suit your preferences or to accommodate different input devices. This allows you to create a more intuitive and user-friendly control scheme for navigating your 3D scene.
// controls.mouseButtons = {
//   LEFT: THREE.MOUSE.PAN,
//   MIDDLE: THREE.MOUSE.DOLLY,
//   RIGHT: THREE.MOUSE.ROTATE
// }


// When zooming in or out, the camera will zoom towards the position of the mouse cursor, rather than the center of the screen. This can provide a more intuitive and precise zooming experience, especially when working with complex 3D scenes or models. With this feature enabled, users can easily zoom in on specific areas of interest by simply hovering the mouse cursor over them and using the scroll wheel to zoom in or out.
// controls.zoomToCursor = true;


//  Vertical and Horizontal Complete Limits
// controls.enableDamping = true;

// controls.minAzimuthAngle = -Math.PI / 4; // -45°
// controls.maxAzimuthAngle =  Math.PI / 4; // +45°

// controls.minPolarAngle = 0;              // upar
// controls.maxPolarAngle = Math.PI / 2;    // neeche

// controls.minDistance = 3;
// controls.maxDistance = 10;


function animate() {
window.requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

controls.update();
  renderer.render( scene, camera );
}
animate();