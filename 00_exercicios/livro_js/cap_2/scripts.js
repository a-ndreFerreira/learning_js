
// Minha resolução

// //input
// const isName = document.querySelector('#isName');

// //output
// const output = document.querySelector('h3');

// //form
// const form = document.querySelector('#formName');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const getName = isName.value.trim();

//     output.textContent = `Olá ${getName}`;

// })

// Resolução do livro js

const form = document.querySelector('form');
const output = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.isName.value;
    output.textContent = `Olá ${name}`;
})