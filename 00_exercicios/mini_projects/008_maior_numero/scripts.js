
//inputs
const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');
const thirdNum = document.querySelector('#thirdNum');

//formControl
const formControl = document.querySelector('#formControl');

//spanValue
const spanValue = document.querySelector('.spanValue');

//message
const firstNumMessage = 'primeiro número é o maior';
const secondNumMessage = 'segundo número é o maior';
const thirdNumMessage = 'terceiro número é o maior';
const invalidMessage = 'Dados Inválidos';

const handleCheckNumber = (numero1, numero2, numero3) => {
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) return null;

    if (numero1 > numero2 && numero1 > numero3) return firstNumMessage;
    if (numero2 > numero1 && numero2 > numero3) return secondNumMessage;
    if (numero3 > numero1 && numero3 > numero2) return thirdNumMessage;
    return invalidMessage;
}

formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getFirstNum = firstNum.value.trim();
    const getSecondNum = secondNum.value.trim();
    const getThirdNum = thirdNum.value.trim();

    const numero1 = parseFloat(getFirstNum)
    const numero2 = parseFloat(getSecondNum)
    const numero3 = parseFloat(getThirdNum)

    const CheckNumber = handleCheckNumber(numero1, numero2, numero3);

    spanValue.textContent = CheckNumber !== null
        ? `Entre ${numero1}, ${numero2}, ${numero3}, ... ${CheckNumber}`
        : invalidMessage;

    firstNum.value = '';
    secondNum.value = '';
    thirdNum.value = '';

})