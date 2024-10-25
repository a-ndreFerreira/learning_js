
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelector('.navLinks');

navToggle.addEventListener('click', () => {
    // if (navLinks.classList.contains('showLinks')) {
    //     navLinks.classList.remove('showLinks')
    // } else {
    //     navLinks.classList.add('showLinks')
    // }

    navLinks.classList.toggle('showLinks');
})