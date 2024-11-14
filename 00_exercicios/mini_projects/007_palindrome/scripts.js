
//inputs
const palindromeInput = document.querySelector('#palindromeInput');

//spanValue
const spanValue = document.querySelector('.spanValue');

//form control
const formControl = document.querySelector('#formControl');

//message
const yesMessage = ', é um palindrome.';
const noMessage = ', não é um palindrome.';
const invalidMessage = 'Dados Inválidos.';


const handleGetWord = (word) => {
    const invertedWord = word.split('').reverse().join('');

    return word === invertedWord ? yesMessage : noMessage;
}

formControl.addEventListener('submit', (e) => {
    e.preventDefault();

    const getWord = palindromeInput.value.trim();

    if (!getWord) {
        spanValue.textContent = invalidMessage;
        return;
    };

    const word = handleGetWord(getWord);

    spanValue.textContent = `A palavra ${getWord} ${word}`;

    palindromeInput.value = '';
})