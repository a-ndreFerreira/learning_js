//declaracao de variaveis
//ex01
let idade = 31;
let peso = 82;

console.log('Tenho ' + idade + ' anos e peso ' + peso + ' quilos.');

//ex02
const PI = 3.14159;
console.log('PI:', PI);

//ex03
let numeroMaximo = Number.MAX_VALUE;
console.log(numeroMaximo);

//ex04
let firstName = 'André';
let surName = 'Ferreira';
let fullName = firstName + ' ' + surName;
console.log(fullName);

//ex05
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log('A soma entre ' + num1 + ' e ' + num2 + ' é: ' + sum);

//ex06
let bool1 = true;
let bool2 = false;
console.log('AND', bool1 && bool2);
console.log('OR', bool1 || bool2);
console.log('NOT', !bool2, !bool1);

//ex07
let number1 = 10;
let number2 = 20;
let number3 = 30;
console.log('num1 < num2', number1 < number2);
console.log('num1 > num2', number1 > number2);
console.log('num1 == num3', number1 == number3);

//ex08
let number08 = 10;
number08++;
console.log('O número com incremento!', number08);

// intruções if else, switch
//projetinhos simples 
//ex09 feito
const number = (value) => {
    if (value > 0) {
        console.log('Número positivo')
    } else if (value < 0) {
        console.log('Numero Negativo')
    } else {
        console.log('Zero')
    }
};
number(10);
number(-5);
number(0);

//ex10 feito
const mediaDoAluno = (nota01, nota02) => {
    const mediaNota = (nota01 + nota02) / 2;

    if (mediaNota >= 7 && mediaNota <= 10) {
        console.log('Aluno Aprovado com média, ', mediaNota)
    } else {
        console.log('Aluno reprovado com média, ', mediaNota)
    };

};
mediaDoAluno(7, 8);

//ex11 feito
const voto = (idadeVotar) => {
    if (idadeVotar >= 18 && idadeVotar < 70) {
        console.log('Tenho ' + idadeVotar + ' anos, e tenho que votar.');
    } else if ((idadeVotar >= 16 && idadeVotar < 18) || idadeVotar >= 70) {
        console.log('Tenho ' + idadeVotar + ' anos, meu voto é facultativo.');
    } else {
        console.log('Tenho ' + idadeVotar + ' anos, e não preciso votar');
    }
};
voto(70);

//ex12 feito
const situacaoAluno = (mediaAluno) => {
    if (mediaAluno >= 7) {
        console.log('Aluno aprovado com média: ' + mediaAluno);
    } else if (mediaAluno >= 5 && mediaAluno <= 6.9) {
        console.log('Aluno em recuperação com média: ' + mediaAluno);
    }
};
situacaoAluno(7);

//ex13 feito
const imcCalc = (height, weight) => {
    const imc = (weight / (height * height)).toFixed(1);

    if (imc < 18.5) {
        console.log('imc: ' + imc + ' , abaixo do peso.');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('imc: ' + imc + ' , normal.');
    }

}
imcCalc(1.78, 82);

//ex 14 feito
//divisivel por 4
//exceto divisiveis 100, mas nao os por 400
const anoBisexto = (ano) => {
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) return console.log('Ano Bissexto');

    return console.log('Não é um ano bissexto')
}
anoBisexto(2023);

//ex15 feito
const palindrome = (palavra) => {
    const palavraInvertida = palavra.split('').reverse().join(''); //split transforma string em array, reverse, inverte, join tranforma array em atring
    if (palavra === palavraInvertida) return console.log('A palavra é um palindrome.');

    return console.log('Não é um palindrome.');

}
palindrome('gato');
palindrome('arara');

//ex16 feito
const maxValue = (numValue1, numValue2, numValue3) => {
    if (numValue1 > numValue2 && numValue1 > numValue3) return console.log('Número 1 é o maior');
    if (numValue2 > numValue1 && numValue2 > numValue3) return console.log('Número 2 é o maior');
    return console.log('Número 3 é o maior');
}
maxValue(1, 2, 3);
maxValue(2, 3, 1);
maxValue(3, 2, 1);

//ex17 feito
const parImpar = (parImp) => {
    if (parImp % 2 === 0) return console.log('Número par');
    return console.log('Número impar');
};
parImpar(5);
parImpar(8);

//ex18 feito
const podeDirigir = (idadeDirigir) => {
    if (idadeDirigir >= 18) return console.log('Pode dirigir.');
    return console.log('Nao pode dirigir.');
};
podeDirigir(15);
podeDirigir(18);
podeDirigir(45);

//ex19 feito
const dentroDoIntervalo = (n, limiteMin, limiteMax) => {
    if (n <= limiteMax && n >= limiteMin) return console.log('Número esta dentro do intervalo.');
    return console.log('Número não esta no intervalo.');
}
dentroDoIntervalo(3, 1, 37);
dentroDoIntervalo(56, 12, 500);
dentroDoIntervalo(34, 45, 78);

//ex20 feito
const classifAluno = (notaClass) => {
    if (notaClass > 100 || notaClass < 0) return console.log('Dados Invalidos');

    if (notaClass >= 90) return console.log('A');
    if (notaClass >= 80) return console.log('B');
    if (notaClass >= 70) return console.log('C');
    if (notaClass >= 60) return console.log('D');

    return console.log('F');
}
classifAluno(95);
classifAluno(34);
classifAluno(82);
classifAluno(74);
classifAluno(62);

//ex21 feito
const estacao = (mes) => {
    if (mes < 3 || mes === 12) {
        console.log('Verão');
    } else if (mes < 6) {
        console.log('Outono');
    } else if (mes < 9) {
        console.log('Inverno');
    } else {
        console.log('Primavera');
    }
};
estacao(5);
estacao(12);
estacao(9);
estacao(10);
estacao(1);
estacao(2);
estacao(3);
estacao(4);
estacao(6);
estacao(7);
estacao(8);
estacao(11);

//ex22 feito
const diasMes = (diasmes) => {
    switch (diasmes) {
        case 2:
            console.log('28 ou 29 dias');
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('30 dias');
            break;
        default:
            console.log('31 dias');
    }
}
diasMes(2);
diasMes(4);
diasMes(1);

//ex23 feito
const semaforo = (cor) => {
    if (cor === 'verde') {
        console.log('Siga em frente.');
    } else if (cor === 'amarelo') {
        console.log('Atenção');
    } else if (cor === 'vermelho') {
        console.log('Pare');
    } else {
        console.log('Essa cor não pertence ao semaforo');
    }
};
semaforo('verde');
semaforo('amarelo');
semaforo('vermelho');
semaforo('marrom');
semaforo('cinza');

//loops for, while, do-while
//ex24 feito
for (let i = 0; i <= 10; i++) { //for é util quando se sabe quantas vezes queremos o loop
    console.log(i);
};

//ex25 feito
let j = 10;
while (j >= 1) { //while é util quando nao se sabe quantas vezes queremos o loop
    console.log(j);
    j--;
}

//ex26 feito
let k = 1;
do {
    if (k % 2 === 1) {
        console.log(k);
    }
    k++;
} while (k <= 20);

//ex27 feito
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//ex28 feito
let l = 1;
let som = 0;
while (l <= 100) {
    som += l;
    l++;
}
console.log(som);

//ex29 feito

// let a = 1;
// do {
//     console.log(a++);
// } while (a <= 100) //imprime todos os mumeros do intervalo

let a = 1;
do {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
} while (a <= 100);

//ex30 feito
for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let div = 2; div < num; div++) {
        if (num % div === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('Número primo', num);
    }
};

//ex31 feito
// adivinhando o numero pelo metodo de pesquisa binaria
let min = 1;
let max = 100;
let chute = Math.floor((max + min) / 2);
let numPens = 50;
while (chute !== numPens) {
    if (chute > numPens) {
        max = chute;
    } else {
        min = chute;
    }
    chute = Math.floor((max + min) / 2);
}
console.log('Numero pensado foi', chute);

//ex32 feito
let userChoice = 'pedra';
let computerChoice;
let result;
do {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            computerChoice = 'pedra';
            break;
        case 1:
            computerChoice = 'papel';
            break;
        default:
            computerChoice = 'tesoura';
    };

    if ((userChoice === 'pedra' && computerChoice === 'tesoura') || (userChoice === 'papel' && computerChoice === 'pedra') || (userChoice === 'tesoura' && computerChoice === 'papel')) {
        result = 'Usuário ganhou!';
    } else if (userChoice === computerChoice) {
        result = 'Empate';
    } else {
        result = 'Computador ganhou!';
    }

    console.log(`Usuário: ${userChoice} , Computador: ${computerChoice}, Resultado: ${result}`)

} while (result === 'Empate')

//ex33 feito
let n1 = 0;
let n2 = 1;

console.log(n1);
console.log(n2);

for (let n = 2; n < 10; n++) {
    let nextNum = n1 + n2;
    console.log(nextNum);
    n1 = n2;
    n2 = nextNum;
}

//ex34
let numero34 = 1;
while (numero34 <= 100) {
    if (numero34 % 3 === 0 && numero34 % 5 === 0) {
        console.log('FizzBuzz');
    } else if (numero34 % 3 === 0) {
        console.log('Fizz');
    } else if (numero34 % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(numero34);
    };
    numero34++;
}

//ex35
for (let n35 = 1; n35 < 10; n35++) {
    const triangular = n35 * (n35 + 1) / 2;
    console.log(triangular);
}

//ex36
for (let n36 = 1; n36 <= 100; n36++) {
    let soma = 0;

    for (let j36 = 1; j36 < n36; j36++) {
        if (n36 % j36 === 0) {
            soma += j36;
        }
    }
    if (soma === n36) {
        console.log(n36)
    }
}

//ex37
let somaQuadrados = 0;
let i37 = 1;
while (i37 <= 10) {
    somaQuadrados += i37 * i37;
    i37++;
}
console.log(somaQuadrados);

//ex38
let somaCubo = 0;
let i38 = 1;
do {
    somaCubo += i38 * i38 * i38;
    i38++;

} while (i38 <= 10);
console.log(somaCubo);

//ex39
let num39 = 5;
let fatorial = 1;
for (let i = 1; i <= num39; i++) {
    fatorial *= i;
}
console.log(`O fatorial do ${num39} é ${fatorial}`);

//ex40 virou loop infinito, nao soube usar o while,corrigido!
let str40 = 'HelloWorld';
let invertStr = ''; //string vazia para receber o valor invertido
let i40 = str40.length - 1; //voce precisa verificar o tamanho da string
while (i40 >= 0) {
    invertStr += str40[i40]; //invert string recebe uma letra por vez do loop
    i40--; //diminui a string, a cada loop, a ultima letra vai para invertStr
}
console.log(`A palavra ${str40}, invertida fica... ${invertStr}`);

//ex40 //inverti a string assim! =/
let textStr = 'JavaScript';
let invertStr2 = textStr.split('').reverse().join('');
console.log(invertStr2);

//ex41
let numDec = 10;
let binario = '';

do {
    binario = (numDec % 2) + binario;
    numDec = Math.floor(numDec / 2);

} while (numDec > 0);
console.log(`O número em binario é: ${binario}`);

//ex42
let binaNum = '1010';
let decimalNum = 0;

for (let i = binaNum.length - 1, j = 0; i >= 0; i--, j++) {
    decimalNum += parseInt(binaNum[i]) * Math.pow(2, j);
};
console.log(`O número em decimal é: ${decimalNum}`);

//ex43
let nInicial = '101';
let nFinal = '';
let nIndex = nInicial.length - 1;

while (nIndex >= 0) {
    nFinal += nInicial[nIndex];
    nIndex--;
}
console.log(nFinal === nInicial ? 'Número é palíndrome' : 'Número não é palíndrome');

//ex43 //resolucao do professor, revisando
let nu = 1212;
let inv = 0;
let temp = nu;
while (temp > 0) {
    let digito = temp % 10;
    inv = (inv * 10) + digito;
    temp = Math.floor(temp / 10);
};
console.log(nu === inv ? 'Palíndrome' : 'Não é palíndrome');

//ex44
let matriz1 = [[1, 2], [1, 2]];
let matriz2 = [[2, 3], [2, 3]];

let soma44 = [];
let index = 0;

do {
    let j = 0;
    soma44[index] = [];

    do {
        soma44[index][j] = matriz1[index][j] + matriz2[index][j];
        j++;
    } while (j < matriz1[index].length);

    index++;

} while (index < matriz1.length);
console.log(JSON.stringify(soma44));