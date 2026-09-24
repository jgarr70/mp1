/* Your JS here. */
console.log('Hello World!')

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const sections = document.querySelectorAll("#intro, #blog, #photos, #surprise, #video");
const links = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        if (window.scrollY >= section.offsetTop - 100) {

            links.forEach(function(link) {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                '#navbar a[href="#' + section.id + '"]'
            );

            activeLink.classList.add("active");
        }

    });

});
    
let slideindex = 0;
let slides = document.getElementsByClassName("carousel");
slides[slideindex].style.display = "block";

document.getElementById("previous").addEventListener("click", function() {
    plusSlides(-1);
});

document.getElementById("next").addEventListener("click", function() {
    plusSlides(1);
});


function plusSlides(n) {
    slideindex += n;

    if (slideindex >= slides.length) {
        slideindex = 0; 
    }

    if (slideindex < 0) {
        slideindex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideindex].style.display = "block";
}

let modal = document.getElementById("modal");
let openButton = document.getElementById("openModal");
let closeButton = document.getElementById("closeModal");

openButton.addEventListener("click", function(){
    // modal.style.display = "block";
    modal.style.display = "flex";
});
closeButton.addEventListener("click", function(){
    modal.style.display = "none";
});