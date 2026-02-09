const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65,window.innerWidth / window.innerHeight,.1,1000);
camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "gray", });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);



function animate(){
  window.requestAnimationFrame(animate);

  cube.rotation.y +=  * delta ;

  renderer.render(scene, camera);
}
animate();