//Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href"); // Get the target ID from the href
    const targetElement = document.querySelector(targetId); // Find the target element
    const main = document.querySelector("main"); // Get the main container element

    if (targetElement) {
      // Get the padding of the target element (top padding in this case)
      const targetPadding = parseInt(
        window.getComputedStyle(targetElement).paddingTop,
        10
      );

      // Calculate the scroll position, adjusted by the padding of the target element
      main.scrollTo({
        top: targetElement.offsetTop - main.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
//nav-bar active effect
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior (e.g., page jump)

    // Remove "active" class from any previously active <li>
    document.querySelectorAll("nav ul li").forEach((item) => {
      item.classList.remove("active");
    });

    // Add "active" class to the parent <li> of the clicked <a>
    this.parentElement.classList.add("active");
  });
});

//Animation - Sphere Spin
// Get the container element where you want the canvas to be rendered
var container = document.getElementById('canvas');

// Create the Three.js scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ alpha: true });

// Set the renderer size to match the container's dimensions
renderer.setSize(container.clientWidth, container.clientHeight);

// Append the renderer's DOM element to the container
container.appendChild(renderer.domElement);

// Create a sphere geometry and material (green color, wireframe)
var geometry = new THREE.SphereGeometry(2, 12, 12);
var material = new THREE.MeshBasicMaterial({
  color: 0x278d5a,
  wireframe: true,
  wireframeLinewidth: 2
});
var sphere = new THREE.Mesh(geometry, material);

// Add the sphere to the scene
scene.add(sphere);

// Set camera position
camera.position.z = 5;

// Animation loop to rotate the sphere
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.003; // Rotate around the Y axis
  renderer.render(scene, camera);
}

animate();

// Resize event listener to adjust the renderer size when the container is resized
window.addEventListener('resize', function() {
  // Update the renderer size based on the container size
  renderer.setSize(container.clientWidth, container.clientHeight);

  // Update the camera aspect ratio and projection matrix
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
});
