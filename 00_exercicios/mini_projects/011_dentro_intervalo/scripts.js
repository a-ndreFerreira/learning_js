
//inputs
const numberInput = document.querySelector('#numberInput');
const minNumber = document.querySelector('#minInput');
const maxNumber = document.querySelector('#maxInput');

//form Controls
const formControl = document.querySelector('#formControl');

//spanValue
const spanValue = document.querySelector('.spanValue');

//messages
const invalidMessage = 'Dados inválidos';
const isIntervalMessage = 'O número está no intervalo';
const hasIntervalMessage = 'O número não está no intervalo';

//validacao e check
const handleCheck = (n, nMin, nMax) => {
    if (isNaN(n) || isNaN(nMin) || isNaN(nMax)) return invalidMessage;
    if (nMin >= nMax) return invalidMessage;
    return n >= nMin && n <= nMax ? isIntervalMessage : hasIntervalMessage;
}

formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getNumber = Number.parseFloat(numberInput.value.trim());
    const getMinNumber = Number.parseFloat(minNumber.value.trim());
    const getMaxNumber = Number.parseFloat(maxNumber.value.trim());

    const checkNumber = handleCheck(getNumber, getMinNumber, getMaxNumber);

    spanValue.textContent = checkNumber;

    numberInput.value = '';
    minNumber.value = '';
    maxNumber.value = '';
})