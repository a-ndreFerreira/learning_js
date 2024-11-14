
//inputs
const inputTL = document.querySelector('#inputTrafficLight');

// form 
const formTL = document.querySelector('#formTrafficLight');

//span value
const spanValue = document.querySelector('.spanValue');

//messages
const messages = {
    invalid: 'Dados inválidos',
    greenLight: 'Sinal verde, SIGA.',
    yellowLight: 'Sinal amarelo, ATENÇÃO.',
    redLight: 'Sinal vermelho, PARE'
}

const getMessageLight = (color) => {

    switch (color) {
        case 'verde':
            return messages.greenLight;
        case 'amarelo':
            return messages.yellowLight;
        case 'vermelho':
            return messages.redLight;
        default:
            return messages.invalid;
    };
}

formTL.addEventListener('submit', (e) => {
    e.preventDefault();

    const colorInput = String(inputTL.value.trim()).toLowerCase();

    const lightMessage = getMessageLight(colorInput);

    spanValue.textContent = lightMessage;

    inputTL.value = '';
})