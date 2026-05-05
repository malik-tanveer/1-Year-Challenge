const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65,window.innerWidth / window.innerHeight,.1,1000);
camera.position.z = 5;
scene.add(camera);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "gray", });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas, antialias:true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


// This is not a good you can't write this in Everytime
// const clock =  new THREE.Clock();

// function animate(){
  // window.requestAnimationFrame(animate);
  // const speed = clock.getElapsedTime();
  // cube.rotation.y += speed;
  // renderer.render(scene, camera);
// }
// animate();

// This is a Best Practise Write to this 

const clock =  new THREE.Clock();
const speed = 2;

function animate(){
  window.requestAnimationFrame(animate);

  const delta = clock.getDelta();
  cube.rotation.y += speed * delta ;

  renderer.render(scene, camera);
}
animate();