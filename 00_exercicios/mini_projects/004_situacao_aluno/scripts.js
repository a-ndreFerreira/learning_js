
//inputs
const grade1 = document.querySelector('#grade1');

//formSubmit
const formControl = document.querySelector('#formControl');

//spanValue
const spanValue = document.querySelector('.spanValue');

//messages
const approvedStudentMessage = 'Aluno aprovado';
const studentInRecoveryMessage = 'Aluno em recuperação';
const failedStudentMessage = 'Aluno reprovado';
const invalidDataMessage = 'Dados Inválidos';

const handleGrade = (grade) => {
    if (isNaN(grade) || grade < 0 || grade > 10) return null;
    if (grade >= 7) return approvedStudentMessage;
    if (grade >= 5) return studentInRecoveryMessage;
    return failedStudentMessage;
}

formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getGrade = grade1.value.trim();
    const grade = getGrade ? parseFloat(getGrade) : null;
    const verifyGrade = handleGrade(grade);

    spanValue.textContent = verifyGrade !== null
        ? `${verifyGrade} com média: ${grade}`
        : invalidDataMessage;


    grade1.value = '';
})