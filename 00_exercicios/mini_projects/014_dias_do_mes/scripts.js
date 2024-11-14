
//input
const monthInput = document.querySelector('#monthInput');

// month form
const formMonth = document.querySelector('#formMonth');

//span value
const spanValue = document.querySelector('.spanValue');

//messages
const messages = {
    invalid: 'Dados inválidos',
    feb: 'FEV, 28 ou 29 dias',
    thirtyDays: 'Meses com 30 dias',
    thirtyOneDays: 'Meses com 31 dias'
}

const getDaysInMonth = (month) => {
    if (isNaN(month) || month < 1 || month > 12) return messages.invalid;

    switch (month) {
        case 2:
            return messages.feb;
        case 4:
        case 6:
        case 9:
        case 11:
            return messages.thirtyDays;
        default:
            return messages.thirtyOneDays;
    }
}

formMonth.addEventListener('submit', (e) => {
    e.preventDefault();

    const getMonth = Number.parseFloat(monthInput.value.trim());

    const daysMessage = getDaysInMonth(getMonth);

    spanValue.textContent = daysMessage;

    monthInput.value = '';
})