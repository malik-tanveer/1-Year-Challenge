import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;
scene.add(camera);

// Geomtry is the shape of the object, material is how it looks like (color, texture etc)
// Examples of Geometries

// Idea of the SphereGeomaetry
const geometry = new THREE.SphereGeometry(1, 5, 5,2,1.2); // Radius, Width Segments, Height Segments

// const geometry = new THREE.TorusGeometry( 3, 1, 16, 100 ); // Radius, Tube, Radial Segments, Tubular Segments 
// const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8, 1); // Radius, Length, Cap Segments, Radial Segments
// const geometry = new THREE.BoxGeometry(2, 2, 2); // Width, Height, Depth
// const geometry = new THREE.CircleGeometry(1, 32); // Radius, Segments
// const geometry = new THREE.ConeGeometry(1, 2, 32); // Radius, Height, Radial Segments
// const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 ); // Radius Top, Radius Bottom, Height, Radial Segments
// const geometry = new THREE.DodecahedronGeometry(1, 0); // Radius, Detail

// ExtrudeGemotry
// const length = 12, width = 8;
// const shape = new THREE.Shape();
// shape.moveTo( 0,0 );
// shape.lineTo( 0, width );
// shape.lineTo( length, width );
// shape.lineTo( length, 0 );
// shape.lineTo( 0, 0 );
// const geometry = new THREE.ExtrudeGeometry(shape, { bevelEnabled: false }); // Shape, Options

// const geometry = new THREE.IcosahedronGeometry(1, 0); // Radius, Detail
// const geometry = new THREE.OctahedronGeometry(1, 0); // Radius, Detail
// const geometry = new THREE.PlaneGeometry(5, 5, 1, 1); // Width, Height, Width Segments, Height Segments
// const geometry = new THREE.RingGeometry(1, 5, 32); // Inner Radius, Outer Radius, Theta Segments
// const geometry = new THREE.SphereGeometry(3, 64, 64); // Radius, Width Segments, Height Segments
// const geometry = new THREE.TetrahedronGeometry(1, 1); // Radius, Detail
// const geometry = new THREE.TorusKnotGeometry(1, 0.4, 128, 32);

// wirefreame Geomtry
// const wire = new THREE.WireframeGeometry(geometry);
// const line = new THREE.LineSegments(
//   wire,
//   new THREE.LineBasicMaterial({ color: 0xffffff })
// );
// scene.add(line);

// Own Geometry on the basis of BufferGeometry
// const geometry = new THREE.BufferGeometry();

// const vertices = new Float32Array([
//   0, 0, 1,
//   1, 0, 1,
//   0, 1, 1
// ]);

// geometry.setAttribute(
//   'position',
//   new THREE.BufferAttribute(vertices, 3)
// );

// const mesh = new THREE.Mesh(
//   geometry,
//   new THREE.MeshBasicMaterial({ color: 0xff0000 })
// );

// scene.add(mesh);


const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 , wireframe: true});
const cube = new THREE.Mesh(geometry, material);

// Outline Lines Geometry Clean and Sharp 
// const edges = new THREE.EdgesGeometry(cube.geometry);
// const outline = new THREE.LineSegments(
//   edges,
//   new THREE.LineBasicMaterial({ color: 0x00ffcc })
// );
// scene.add(outline);

// Instanced Mesh for Multiple Objects with same Geometry and Material
// const count = 1000;
// const mesh = new THREE.InstancedMesh(
//   geometry,
//   material,
//   count
// );

// scene.add(mesh);

scene.add(cube);


const canvas = document.querySelector("#app");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// Add Some of basic Orbit controls

const controls = new OrbitControls(camera, renderer.domElement);

// For Responsive

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
})


function animate() {
requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
controls.update(); // For Damping
  renderer.render( scene, camera );

}
animate();