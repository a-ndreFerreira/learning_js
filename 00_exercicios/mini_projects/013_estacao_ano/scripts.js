
//input
const monthInput = document.querySelector('#monthInput');

//form month
const formMonth = document.querySelector('#formMonth');

//span value
const spanValue = document.querySelector('.spanValue');

//messages
const messages = {
    invalid: 'Dados inválidos',
    summer: 'Verão',
    fall: 'Outono',
    winter: 'Inverno',
    spring: 'Primavera'
}

//station check
const stationCheck = (month) => {
    if (isNaN(month) || month <= 0 || month > 12) return messages.invalid;

    if (month < 3 || month === 12) return messages.summer;
    if (month < 6) return messages.fall;
    if (month < 9) return messages.winter;
    return messages.spring;
}

formMonth.addEventListener('submit', (e) => {
    e.preventDefault();

    const getNumber = Number.parseFloat(monthInput.value.trim());

    const stationCheckValue = stationCheck(getNumber);

    spanValue.textContent = stationCheckValue;

    monthInput.value = '';
})