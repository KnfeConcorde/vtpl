function filterTestimonials() {
  // Get the search input value and split it into an array of keywords
  var searchInput = document.getElementById("search-input").value.toLowerCase().split(" ");
  console.log("Search input:", searchInput);

  // Get all the testimonial-filter elements
  var testimonialFilters = document.getElementsByClassName("testimonial-filter");
  console.log("Number of testimonial filters:", testimonialFilters.length);

  // Loop through the testimonial-filter elements and filter based on user input
  for (var i = 0; i < testimonialFilters.length; i++) {
    var testimonialFilter = testimonialFilters[i];

    // Get the text content of the testimonial-filter element and split it into words
    var words = (testimonialFilter.textContent || testimonialFilter.innerText).toLowerCase().split(" ");
    console.log("Number of words in testimonial filter:", words.length);

    // Check if any of the keywords in the search input match any of the words in the testimonial-filter element
    var matchFound = searchInput.some(function(keyword) {
      return words.some(function(word) {
        return word.includes(keyword);
      });
    });
    console.log("Match found in testimonial filter:", matchFound);

    // If a match was found, show the testimonial-filter element
    if (matchFound) {
      testimonialFilter.style.display = "flex";
    } else {
      // If no match was found, hide the testimonial-filter element
      testimonialFilter.style.display = "none";
    }
  }
}

// Add an event listener to the search input to call the filter function whenever the value changes
document.getElementById("search-input").addEventListener("input", filterTestimonials);