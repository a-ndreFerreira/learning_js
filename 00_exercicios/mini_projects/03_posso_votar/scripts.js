
//inputs
const nameValue = document.querySelector('#name');
const ageValue = document.querySelector('#age');

//spanValue
const spanValue = document.querySelector('.spanValue');

//messages
const voteMessage = 'obrigatório.';
const noVoteMessage = 'NÃO obrigatório.';
const opcionVoteMessage = 'facultativo.';
const invalidMessage = 'Dados Inválidos.';
const noLimitMessage = 'Idade acima do limite.';

//form submit, OBS: pode ser feito pelo evento submit do form, ou evento click do button, mas tem udtilidades diferentes;
const btnForm = document.querySelector('#formContainer');

const handleCheckAge = (age) => {
    if (isNaN(age) || age <= 0 || age > 120) return null;

    if (age >= 18 && age < 70) return voteMessage;
    if ((age >= 16 && age < 18) || age >= 70) return opcionVoteMessage;

    return noVoteMessage;
}

btnForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const getAge = ageValue.value.trim();
    const age = getAge ? parseFloat(getAge) : null;
    const name = nameValue.value.trim();

    const checkAge = handleCheckAge(age);

    spanValue.textContent = checkAge !== null
        ? `Você ${name}, tem ${age} anos, e seu voto é ${checkAge}`
        : invalidMessage;


    nameValue.value = '';
    ageValue.value = '';

});