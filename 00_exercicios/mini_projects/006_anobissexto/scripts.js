
//input
const yearInput = document.querySelector('#yearInput');

//spanValue
const spanValue = document.querySelector('.spanValue');

//form control
const formControl = document.querySelector('#formControl');

//message
const yesMessage = 'é um ano bissexto.';
const noMessage = 'não é ano bissexto.';
const invalidMessage = 'Dados Inválidos.';

const handleGetYear = (year) => {
    if (year < 0 || isNaN(year)) return null;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return yesMessage;

    return noMessage;
}

formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getYear = yearInput ? parseFloat(yearInput.value.trim()) : null;

    const year = handleGetYear(getYear);

    spanValue.textContent = year !== null
        ? `O ano de ${getYear} ${year}`
        : invalidMessage;

    yearInput.value = '';
})
