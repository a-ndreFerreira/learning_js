
//input
const numberInput = document.querySelector('#numberInput');

//form controls
const formControl = document.querySelector('#formControl');

//spanValue
const spanValue = document.querySelector('.spanValue');

//messages
const invalidMessage = 'Dados inválidos';
const canDriveMessage = 'Maioridade, pode dirigir';
const cantDriveMessage = 'Não maioridade, não pode dirigir';


const handleCheckAge = (age) => {
    if (isNaN(age) || age < 0 || age > 120) return invalidMessage;

    return age >= 0 && age < 18 ? cantDriveMessage : canDriveMessage;

}

formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getNumber = Number.parseFloat(numberInput.value.trim());

    const checkAge = handleCheckAge(getNumber);

    spanValue.textContent = checkAge;

    numberInput.value = '';

})