// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xff8c00);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / 500,
    0.1,
    1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 500);
document.getElementById("viewer").appendChild(renderer.domElement);

// Geometry (Gear Housing / Bearing Block)
const geometry = new THREE.CylinderGeometry(1, 1, 1.5, 32);
const material = new THREE.MeshStandardMaterial({
    color: 0xaaaaaa,   // Alloy Steel look
    metalness: 0.7,
    roughness: 0.4
});
const component = new THREE.Mesh(geometry, material);
scene.add(component);

// Inner Bore
const boreGeometry = new THREE.CylinderGeometry(0.4, 0.4, 1.6, 32);
const boreMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const bore = new THREE.Mesh(boreGeometry, boreMaterial);
scene.add(bore);

// Light
const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(5, 5, 5);
scene.add(light1);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Animation
function animate() {
    requestAnimationFrame(animate);
    component.rotation.y += 0.01;
    bore.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Resize Handling
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 500);
});
