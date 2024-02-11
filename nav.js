function showMenu() {
    document.getElementById("nav-links").style.right = "0";
    document.querySelector("nav .fa").style.display = "none";
    document.querySelector("nav .fa-times").style.display = "block";
    document.querySelector("nav .fa-times").style.animation = "rotate 0.5s linear";
  }
  
  function hideMenu() {
    document.getElementById("nav-links").style.right = "-200px";
    document.querySelector("nav .fa").style.display = "block";
    document.querySelector("nav .fa-times").style.display = "none";
  }
  
  function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("open");
    document.querySelector("nav .fa").style.display = "none";
    document.querySelector("nav .fa-times").style.display = "block";
    document.querySelector("nav .fa-times").style.animation = "rotate 0.5s linear";
  }