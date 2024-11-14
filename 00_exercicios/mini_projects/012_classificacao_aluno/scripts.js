
//input
const inputValue = document.querySelector('#gradeInput');

//formControls
const formControl = document.querySelector('#formControl');

//spanValue
const spanValue = document.querySelector('.spanValue');

//messages
const invalidMessage = 'Dados inválidos';
const aMessage = 'A';
const bMessage = 'B';
const cMessage = 'C';
const dMessage = 'D';
const fMessage = 'F';

const handleCheckGrade = (grade) => {
    if (isNaN(grade) || grade < 0 || grade > 100) return invalidMessage;
    if (grade >= 90) return aMessage;
    if (grade >= 80) return bMessage;
    if (grade >= 70) return cMessage;
    if (grade >= 60) return dMessage;
    return fMessage;
}

formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getGrade = Number.parseFloat(inputValue.value.trim());

    const gradeStud = handleCheckGrade(getGrade);

    spanValue.textContent = gradeStud;

    inputValue.value = '';
})