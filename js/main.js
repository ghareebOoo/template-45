let nav = document.querySelector(" .navbar[data-bs-theme=dark]");
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "black"; 
    } else {
        nav.style.backgroundColor = "unset"; 
    }
});

var options = {
    strings: ["Developer", "Designer", "Freelancer", "Photographer"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true
  };
  
var typed = new Typed("#typed-output", options);

let button = document.querySelector(".btn-arrow");
window.addEventListener("scroll", function() {
    if (window.scrollY > 520) {
    button.style.display = "flex"; 
}else{
    button.style.display = "none";
}
});
button.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



