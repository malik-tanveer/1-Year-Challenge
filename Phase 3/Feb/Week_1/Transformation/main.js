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
const material = new THREE.MeshBasicMaterial({ color: "blue", });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Tranformation has 3 main and comon parts
//   1. Position / Translation
//   2. Rotation
//   3. Scale


// Position / Translation 

// Examples: 
// Socho tum table par phone rakh rahe ho:
// right le jao → x
// upar uthao → y
// apni taraf lao → z

// Default position of cube is (0, 0, 0) which is the center of the scene.


// Wokrked
// cube.position.x = Math.PI / 2;   // right
// cube.position.y = 1;   // upar
// cube.position.z = -3; // 

// Rotation

// Exmaples : 
// Rotation ka matlab:
// 👉 object ghoomta kis axis ke around
// | Axis         | Kis direction me ghoomta |
// | ------------ | ------------------------ |
// | `rotation.x` | aage–peeche jhukna       |
// | `rotation.y` | left–right ghoomna       |
// | `rotation.z` | clock jaisa ghoomna      |


// Worked

// cube.rotation.x = Math.PI / 4 ; // 45 degree
// cube.rotation.y = Math.PI / 5; // 36 degree
// cube.rotation.z = Math.PI / 6; // 30 degree

// Scale 

// Examples : 

// Scale ka matlab:
// 👉 object kitna bara ya chhota

// Worked

// One way to scale the cube is to set the same value for all axes, for example:
// 4 = x Axis
// 3 = y Axis
// 1 = z Axis

// cube.scale.set(4, 3, 1); // Scale the cube in x direction by 2x

// cube.scale.x = 2; // width double
// cube.scale.y = 5; // height half
// cube.scale.z = 5; // depth same


// Scale Z axis Example is depth

// cube.rotation.y = Math.PI / 5; // 36 degree rotate 
// cube.scale.z = 5; // scale size increase

// Note:
// 1. Position, rotation, and scale are properties of the mesh (cube in this case) that determine how it is transformed in the scene.
// 2. You can combine these transformations to achieve the desired effect on the object in the 3D space.
// 3. Remember that transformations are applied in the order of scale, then rotation, and finally position when rendering the scene.
// 4. You can also use the `cube.matrix` property to apply transformations using a transformation matrix, but using position, rotation, and scale is more intuitive for most cases.
// 5. Always remember to call `renderer.render(scene, camera)` after making any transformations to see the changes in the rendered output.

const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);