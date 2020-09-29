const navNemu = document.getElementById("nav__menu");

function intiToggleNavMenuEvent() {
    const navToggle = document.getElementById("nav__toggle");
    navToggle.addEventListener('click', function() {
        navNemu.classList.toggle('show');
    });
}

function initActiveLinkEvent() {
    const navLinks = document.querySelectorAll('.nav__link');
    let previousLink = document.querySelector('.active');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            previousLink.classList.remove('active');
            link.classList.add('active');
            previousLink = link;
            navNemu.classList.remove('show');
        });
    })
}

export const run = () => {
    intiToggleNavMenuEvent();
    initActiveLinkEvent();
};