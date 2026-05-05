// Create a Scene
const scene = new THREE.Scene();

// Make a Camera and set the position of the camera
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 1000);

// Set the position of the camera
camera.position.z = 5;

// Add the camera to the scene
scene.add(camera);

// Create a Cube and add it to the scene
const geometry = new THREE.BoxGeometry();
// Create a material and set the color of the material
const material = new THREE.MeshBasicMaterial({ color: "gray", });
// Create a mesh and add the geometry and material to the mesh
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Select Canvas from index.html to canva tag
const canvas = document.querySelector("canvas");

// Create a renderer and set the size of the renderer and render the scene and camera
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

// Set the size of the renderer to the size of the window
renderer.setSize(window.innerWidth, window.innerHeight);

// Render the scene and camera
renderer.render(scene, camera);

// When the window is resized, this event listener will be triggered and the renderer will be resized to fit the new window size. The camera's aspect ratio will also be updated to match the new window size, and the projection matrix will be updated to reflect the changes.

window.addEventListener("resize", () => {

  renderer.setSize(window.innerWidth, window.innerHeight);

  // Set the pixel ratio to the device's pixel ratio to ensure that the renderer looks sharp on high-DPI displays.
  camera.aspect = window.innerWidth / window.innerHeight;

  // Update the camera's projection matrix to reflect the changes in the aspect ratio. 
  camera.updateProjectionMatrix();
});

  // Animate the cube by rotating it on the x and y axes and rendering the scene and camera on each frame. The requestAnimationFrame function is used to create a loop that will call the animate function on each frame, allowing for smooth animation of the cube.
function animate() {
  // requestAnimationFrame is a method that tells the browser to call a specified function to update an animation before the next repaint. It is used to create smooth animations by synchronizing the animation with the browser's refresh rate.
  window.requestAnimationFrame(animate);

  // Rotate the cube on the x and y axes by a small amount on each frame to create the animation effect.
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // Render the scene and camera on each frame to update the display with the new position of the cube.
  renderer.render(scene, camera);
}
// Call the animate function to start the animation loop.
animate();