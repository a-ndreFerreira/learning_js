
//inputs
const nameStudent = document.querySelector('#name');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

//buttons
const btnSubmit = document.querySelector('.submit');

//spanValue
const spanValue = document.querySelector('.spanValue');

const mediaFunc = (num1, num2) => {
    const number01 = parseFloat(num1.value.trim());
    const number02 = parseFloat(num2.value.trim());

    if (isNaN(number01) || isNaN(number02)) {
        return null
    } else if (number01 >= 10 || number01 <= 0 || number02 >= 10 || number02 <= 0) {
        return null
    }

    return (number01 + number02) / 2;

};

const situacao = (num) => {
    if (num >= 7 && num <= 10) {
        return 'aprovado.'
    } else if (num < 6.9 && num >= 5) {
        return 'em recuperação.';
    } else {
        return 'reprovado';
    };
}


btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const nome = nameStudent.value.trim();

    const media = mediaFunc(number1, number2);

    if (media !== null) {
        const situacaoAluno = situacao(media);

        spanValue.textContent = 'Aluno ' + nome + ' com média ' + media + ' e sua situação é ' + situacaoAluno;
    } else {
        spanValue.textContent = 'Dados inválidos.'
    }

    number1.value = '';
    number2.value = '';
    nameStudent.value = '';
})