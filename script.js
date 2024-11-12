document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href"); // Get the target ID from the href
      const targetElement = document.querySelector(targetId); // Find the target element
      const main = document.querySelector("main"); // Get the main container element
  
      if (targetElement) {
        // Get the padding of the target element (top padding in this case)
        const targetPadding = parseInt(window.getComputedStyle(targetElement).paddingTop, 10);
  
        // Calculate the scroll position, adjusted by the padding of the target element
        main.scrollTo({
          top: targetElement.offsetTop - main.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
 

  document.querySelectorAll('nav ul li a').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor click behavior (e.g., page jump)
  
      // Remove "active" class from any previously active <li>
      document.querySelectorAll('nav ul li').forEach((item) => {
        item.classList.remove('active');
      });
  
      // Add "active" class to the parent <li> of the clicked <a>
      this.parentElement.classList.add('active');
    });
  });

  var slices = 12,
    angle = 360 / slices;

for (var i = 0; i < slices; i++) {
  var slice = $('<div></div>');  
  slice.css('transform', 'rotateY(' + angle * i + 'deg)'); // Rotate each slice around the Y-axis
  $('.sphere').append(slice); // Append the slice to the sphere
}


  
  