
//formContainer
const formContainer = document.querySelector('.formContainer');

//span value
const spanValue = document.querySelector('.spanValue');

//span dinamico
const createAndAppendLoopDiv = (content) => {
    const div = document.createElement('div');
    div.classList.add('spanValue');
    div.textContent = content;
    formContainer.appendChild(div);
}

//imprime numeros pares
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        spanValue.textContent += i;
    }
};

//imprime os numeros ate de 'a' ate 1
let emptyA = '';
let a = 10;
while (a >= 1) {
    emptyA += a + ' ';
    a--;
};
createAndAppendLoopDiv(`Imprime de 10 ate 1: ${emptyA}`);

//imprime numeros impares de 'b' ate 20
let emptyB = '';
let b = 1;
do {
    if (b % 2 === 1) {
        emptyB += b + ' ';
    }
    b++;
} while (b <= 20);
createAndAppendLoopDiv(`Imprime impares de 1 ate 20: ${emptyB}`);

//tabuada do 5
let emptyC = '';
let c = 5;
for (let i = 0; i <= 10; i++) {
    emptyC += `${c} x ${i} = ${c * i}  `;
}
createAndAppendLoopDiv(emptyC);

//soma de todos os numeros de 1 a 100
let somaD = 0;
let d = 1;
while (d <= 100) {
    somaD += d;
    d++;
};
createAndAppendLoopDiv(`A soma de todos os números de 1 a 100 é: ${somaD}`);

//imprime os numeros pares de 1 a 100
let emptyE = '';
let e = 1;
do {
    if (e % 2 === 0) {
        emptyE += e + ' ';
    }
    e++;

} while (e <= 100);
createAndAppendLoopDiv(`Números pares de 1 a 100: ${emptyE}`);

//imprime numeros primos ate 100
let emptyF = '';
for (let num = 2; num <= 100; num++) {
    isPrime = true;

    for (let div = 2; div < num; div++) {
        if (num % div === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        emptyF += num + ' ';
    }
}
createAndAppendLoopDiv(`Os números primos de 1 ate 100: ${emptyF}`);

//adivinhar numero pela pesquisa binaria
let minG = 1;
let maxG = 100;
let chuteG = Math.floor((minG + maxG) / 2);
let numPens = 33;
while (chuteG !== numPens) {
    if (chuteG > numPens) {
        maxG = chuteG;
    } else {
        minG = chuteG;
    };
    chuteG = Math.floor((minG + maxG) / 2);
}
createAndAppendLoopDiv(`O número pensado foi: ${chuteG}`);

//pedra, papel, tesoura
let userChoice = 'pedra';
let computerChoice;
let result;
do {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            computerChoice = 'pedra';
            break;
        case 1:
            computerChoice = 'papel';
            break;
        default:
            computerChoice = 'tesoura';
    }

    if ((userChoice === 'pedra' && computerChoice === 'tesoura') || (userChoice === 'papel' && computerChoice === 'pedra') || (userChoice === 'tesoura' && computerChoice === 'papel')) {
        result = 'Usuário ganhou!'
    } else if (userChoice === computerChoice) {
        result = 'Empate';
    } else {
        result = 'Computador ganhou!';
    }

} while (result === 'Empate');

createAndAppendLoopDiv(`Jogador: ${userChoice}, Computador: ${computerChoice}, Resultado: ${result}`);

//fibonacci
let resultH = '';
let nh1 = 0;
let nh2 = 1;

resultH += nh1;
resultH += nh2;

for (let i = 2; i < 10; i++) {
    const next = nh1 + nh2;
    resultH += next;
    nh1 = nh2;
    nh2 = next;

}
createAndAppendLoopDiv(`Sequência de Fibonacci ${resultH}`);

//divisivel por 3 e por 5 FizzBuzz
//divisivel so por 3 Fizz
//divisivel so por 5 Buzz
let nI = 1;
let resultI;
while (nI <= 50) {
    if (nI % 3 === 0 && nI % 5 === 0) {
        resultI = 'FizzBuzz';
    } else if (nI % 3 === 0) {
        resultI = 'Fizz';
    } else if (nI % 5 === 0) {
        resultI = 'Buzz';
    } else {
        resultI = nI;
    }
    nI++;
};
createAndAppendLoopDiv(`FizzBuzz? ${resultI}`);