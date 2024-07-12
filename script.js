window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            el.classList.add('animate');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('section');
    elements.forEach((el) => {
        el.classList.add('animate-on-scroll');
    });
});

document.querySelectorAll('button.nav-button').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        if (slides[i]) {  // Check if the slide exists before accessing its properties
            slides[i].style.display = "none";
        }
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slides[slideIndex - 1]) {  // Check if the slide exists before accessing its properties
        slides[slideIndex - 1].style.display = "block";
    }
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
