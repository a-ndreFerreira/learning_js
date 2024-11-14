
//input
const numberValue = document.querySelector('#numberInput');

//formSubmit
const formControl = document.querySelector('#formControl');

//spanvalue
const spanValue = document.querySelector('.spanValue');

//messages
const invalidMessage = 'Dados inválidos';
const zeroMessage = 'Número zero';
const pairMessage = 'Número par';
const oddMessage = 'Número ímpar';

const handleNumber = (number) => {
    if (isNaN(number)) return invalidMessage;

    return number === 0 ? zeroMessage : number % 2 === 0 ? pairMessage : oddMessage;

}

//event submit form
formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getNumber = Number.parseFloat(numberValue.value.trim());

    const negPos = handleNumber(getNumber);

    spanValue.textContent = negPos;

    numberValue.value = '';
})