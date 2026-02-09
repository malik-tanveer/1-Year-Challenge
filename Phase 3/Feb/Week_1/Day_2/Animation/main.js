const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;
scene.add(camera);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "blue", }); //wireframe: true
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// cube.rotation.x = Math.PI / 5;
cube.scale.z = Math.PI / 5;
// cube.scale.y = Math.PI / 5;

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// function animate() {
    // cube.rotation.x += 0.01;
// cube.rotation.y += 0.01;
  // renderer.render( scene, camera );
// }
// renderer.setAnimationLoop( animate );