
let zeroNumber = 'O número é zero.';
let positiveNumber = 'O número é positivo.';
let negativeNumber = 'O número é negativo.';
let invalidNumber = 'Digite um número!';

const number = document.querySelector('#number'); //input
const btn = document.querySelector('.submit'); //botao
const formSubmit = document.querySelector('#positiveNegativeForm'); //submitForm
const value = document.querySelector('.span');

//toggle btn
const btnBars = document.querySelector('.btnBars');
const instructions = document.querySelector('.instructions');

btnBars.addEventListener('click', () => {
    instructions.classList.toggle('showInstructions');
});

//pega o form e addEvent, faz submit, o prevent, ai pega o value.trim()/trim elimina espacos no comeco e fim de string/ do input
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    const numberStr = number.value.trim();
    if (!numberStr) return value.textContent = invalidNumber;

    if (numberStr < 0) {
        value.textContent = negativeNumber;
    } else if (numberStr > 0) {
        value.textContent = positiveNumber;
    } else {
        value.textContent = zeroNumber;
    };

    number.value = '';

});