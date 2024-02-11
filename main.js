function filterTestimonials() {
  // Get the search input value
  var searchInput = document.getElementById("search-input").value.toLowerCase();
  
  // Get all the testimonial-filter elements
  var testimonialFilters = document.getElementsByClassName("testimonial-filter");
  
  // Loop through the testimonial-filter elements and filter based on user input
  for (var i = 0; i < testimonialFilters.length; i++) {
    var testimonialFilter = testimonialFilters[i];
    
    // Get the text content of the testimonial-filter element and split it into words
    var words = (testimonialFilter.textContent || testimonialFilter.innerText).split(" ");
    
    // Check if any of the words in the testimonial-filter element match the search input
    var matchFound = words.some(function(word) {
      return word.toLowerCase().includes(searchInput);
    });
    
    // If a match was found, show the testimonial-filter element
    if (matchFound) {
      testimonialFilter.style.display = "flex";
    } else {
      // If no match was found, hide the testimonial-filter element
      testimonialFilter.style.display = "none";
    }
  }
}
