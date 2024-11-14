
const zeroNumber = 'O número é zero.';
const positiveNumber = 'O número é positivo.';
const negativeNumber = 'O número é negativo.';
const invalidMessage = 'Dados Inválidos.'

const numberVal = document.querySelector('#number'); //input
// const btn = document.querySelector('.submit'); //botao
const formSubmit = document.querySelector('#positiveNegativeForm'); //submitForm
const value = document.querySelector('.span');

//toggle btn
const btnBars = document.querySelector('.btnBars');
const instructions = document.querySelector('.instructions');

btnBars.addEventListener('click', () => {
    instructions.classList.toggle('showInstructions');
});

const checkNumber = (numberStr) => {
    if (!numberStr) return invalidMessage;

    if (numberStr < 0) return negativeNumber;
    if (numberStr > 0) return positiveNumber;

    return zeroNumber;
}

//pega o form e addEvent, faz submit, o prevent, ai pega o value.trim()/trim elimina espacos no comeco e fim de string/ do input
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    const numberStr = numberVal.value.trim();

    const verificacao = checkNumber(numberStr);

    value.textContent = verificacao;

    numberVal.value = '';

});