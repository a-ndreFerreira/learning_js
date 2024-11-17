
//form
const form = document.querySelector('form');

//output
const outH3 = document.querySelector('h3');
const outH2 = document.querySelector('h2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameMovie = form.isNameMovie.value.trim();
    const durationMovie = Number(form.isDurationMovie.value.trim());

    const hours = Math.floor(durationMovie / 60);
    const minutes = durationMovie % 60; //resto da divisao por 60seg

    outH3.textContent = nameMovie.toUpperCase();
    outH2.textContent = `Duração de: ${hours} h ${minutes} mins`;
})