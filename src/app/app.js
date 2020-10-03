// TOGGLE MENU
const navNemu = document.getElementById("nav__menu");

function intiToggleNavMenuEvent() {
    const navToggle = document.getElementById("nav__toggle");
    navToggle.addEventListener('click', function() {
        navNemu.classList.toggle('show');
    });
}

// HIDE MENU
const navLinks = document.querySelectorAll('.nav__link');
function hideMenu() {
    navNemu.classList.remove('show');
}

// SCROLL SECTIONS ACTIVE LINK
var sections = document.querySelectorAll('section[id]');

function scrollActive() {
    var scrollY = window.pageYOffset;
    sections.forEach(function(section) {
        var sectionHeight = section.offsetHeight;
        var sectionTop = section.offsetTop - 50;
        var sectionId = section.getAttribute('id');
        var navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

export const run = () => {
    intiToggleNavMenuEvent();
    window.addEventListener('scroll', scrollActive);

    navLinks.forEach(function(element) {
        element.addEventListener('click', hideMenu);
    });
};