
//inputs
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const spanValue = document.querySelector('.spanValue');

//formControl
const formControl = document.querySelector('#formControl');

//message
const invalidMessage = 'Dados Inválidos.';
const underWeightMessage = 'Abaixo do peso.';
const normalWeightMessage = 'Peso normal.';
const overWeightMessage = 'Sobre peso.';
const obesityMessage = 'Obesidade.';


const imcCalc = (height, weight) => {
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) return null;

    const roundedImc = (weight / (height * height)).toFixed(1); // arredodno o numero para uma casa decimal
    return roundedImc;
};

const verifyImc = (imc) => {

    if (imc < 18.5) return underWeightMessage;
    if (imc >= 18.5 && imc < 25) return normalWeightMessage;
    if (imc >= 25 && imc < 30) return overWeightMessage;

    return obesityMessage;
}


formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getHeight = height.value.trim();
    const getWeight = weight.value.trim();

    const heightValue = getHeight ? parseFloat(getHeight.replace(',', '.')) : null; //filtra e troca virgulas por pontos, importante para a matematica.
    const weightValue = getWeight ? parseFloat(getWeight.replace(',', '.')) : null;

    const imcValue = imcCalc(heightValue, weightValue);
    const verifyImcValue = verifyImc(imcValue);

    spanValue.textContent = imcValue !== null
        ? `${verifyImcValue} com o IMC: ${imcValue}`
        : invalidMessage;

    height.value = '';
    weight.value = '';

});