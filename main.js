
  document.getElementById("search-input").addEventListener("input", function() {
    filterTestimonials();
  });

  function filterTestimonials() {
    // Get the search input value
    var searchInput = document.getElementById("search-input").value.toLowerCase();
  
    // Get all the testimonial-filter elements
    var testimonialFilters = document.getElementsByClassName("testimonial-filter");
  
    // Loop through the testimonial-filter elements and filter based on user input
    for (var i = 0; i < testimonialFilters.length; i++) {
      var testimonialFilter = testimonialFilters[i];
  
      // Get the text content of the testimonial-filter element
      var textContent = testimonialFilter.textContent || testimonialFilter.innerText;
  
      // Check if the text content contains the search input value
      if (textContent.toLowerCase().includes(searchInput)) {
        // If it does, show the testimonial-filter element
        testimonialFilter.style.display = "flex";
      } else {
        // If it doesn't, hide the testimonial-filter element
        testimonialFilter.style.display = "none";
      }
    }
  }


  var navLinks = document.getElementById("nav-links");
        
  function showMenu(){
      navLinks.style.right = "0";
  }
  
  function hideMenu(){
      navLinks.style.right = "-200px";
  }