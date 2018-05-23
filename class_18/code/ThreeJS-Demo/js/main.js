function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#16161D"); //Background of 3d world
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  console.log(renderer);
  const outputDiv = document.querySelector("#output");
  outputDiv.appendChild(renderer.domElement);
  return renderer;
}

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera(scene) {
  const camera = new THREE.PerspectiveCamera(
    45, //Field of View
    window.innerWidth / window.innerHeight, //Ratio
    0.1, //Near (Macro)
    1000 //Far (Horizon)
  );
  camera.position.set(-30, 40, 30); //x,y,z
  camera.lookAt(scene.position); // Look at the center of the scene
  return camera;
}

function addAxesHelper() {
  const axesHelper = new THREE.AxesHelper(40);
  //Red === X axis, Green === Y axis, Blue === Zaxis
  return axesHelper;
}

function createCube(w, h, d) {
  //Creating a shape:
  // Create a geometry
  // Create a Material
  // Create a Mesh === Material + Geometry
  const cubeGeo = new THREE.BoxGeometry(w, h, d); // w,h,d
  const cubeMat = new THREE.MeshLambertMaterial({
    color: "#A31621"
  });
  const cube = new THREE.Mesh(cubeGeo, cubeMat);
  cube.position.x = -4;
  cube.position.y = 4;
  cube.position.z = 0;
  cube.castShadow = true;
  cube.receiveShadow = true;
  return cube;
}

function createFloor() {
  const boxGeo = new THREE.BoxGeometry(60, 0.1, 20);
  const boxMat = new THREE.MeshLambertMaterial({
    color: "#CED3DC"
  });
  const box = new THREE.Mesh(boxGeo, boxMat);
  box.position.x = 15;
  box.castShadow = true;
  box.receiveShadow = true;
  return box;
}

function createSphere() {
  //Geometry + Material === Mesh
  const sphereGeo = new THREE.SphereGeometry(4, 30, 30); //reduis,
  const sphereMat = new THREE.MeshLambertMaterial({
    color: "#016FB9"
    // wireframe: true
  });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.set(20, 4, 0);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  return sphere;
}

function createLight() {
  const pointLight = new THREE.PointLight("#F3F3F5", 2); //color, intensity
  pointLight.position.x = 7;
  pointLight.position.y = 15;
  pointLight.position.z = 0;
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048; //Should be a power of 2
  pointLight.shadow.mapSize.height = 2048;
  return pointLight;
}

function addLightHelper(light) {
  const pointLightHelper = new THREE.PointLightHelper(light);
  return pointLightHelper;
}

function createStats() {
  const stats = new Stats();
  const outputDiv = document.querySelector("#output");
  outputDiv.appendChild(stats.domElement);
  return stats;
}

function createController() {
  const details = {
    lightX: 15,
    lightY: 15,
    lightZ: 15
  };
  return details;
}

function addGUI(controller) {
  const gui = new dat.GUI();
  gui.add(controller, "lightX", -50, 50);
  gui.add(controller, "lightY", -50, 50);
  gui.add(controller, "lightZ", -50, 50);
  return gui;
}

const renderer = createRenderer();
const scene = createScene();
const camera = createCamera(scene);
const axes = addAxesHelper();
const cube = createCube(10, 4, 4);
const floor = createFloor();
const sphere = createSphere();
const light = createLight();
const lightHelper = addLightHelper(light);
const stats = createStats();
const controller = createController();
const gui = addGUI(controller);

scene.add(axes, cube, floor, sphere, light, lightHelper);

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

renderer.render(scene, camera);
window.addEventListener("resize", onResize);

function animate() {
  renderer.render(scene, camera);
  stats.update();
  light.position.x = controller.lightX;
  light.position.y = controller.lightY;
  light.position.z = controller.lightZ;
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  cube.rotation.z += 0.02;

  requestAnimationFrame(animate);
}

animate();
