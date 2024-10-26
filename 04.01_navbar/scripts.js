
const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelector('.navLinks');

navToggle.addEventListener('click', () => {
    //     if (navLinks.classList.contains('show1links')) {
    //         navLinks.classList.remove('showLinks');
    //     } else {
    //         navLinks.classList.add('showLinks');
    //     }

    navLinks.classList.toggle('showLinks')
})