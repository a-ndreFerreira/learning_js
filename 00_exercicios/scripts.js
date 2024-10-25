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


//projetinhos simples 
//ex09
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

//ex10
const mediaDoAluno = (nota01, nota02) => {
    const mediaNota = (nota01 + nota02) / 2;

    if (mediaNota >= 7 && mediaNota <= 10) {
        console.log('Aluno Aprovado', mediaNota)
    } else {
        console.log('Aluno reprovado', mediaNota)
    };

};
mediaDoAluno(7, 8);

//ex11
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

//ex12
const situacaoAluno = (mediaAluno) => {
    if (mediaAluno >= 7) {
        console.log('Aluno aprovado com média: ' + mediaAluno);
    } else if (mediaAluno >= 5 && mediaAluno <= 6.9) {
        console.log('Aluno em recuperação com média: ' + mediaAluno);
    }
};
situacaoAluno(7);

//ex13
const imcCalc = (height, weight) => {
    const imc = (weight / (height * height)).toFixed(1);

    if (imc < 18.5) {
        console.log('imc: ' + imc + ' , abaixo do peso.');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('imc: ' + imc + ' , normal.');
    }

}
imcCalc(1.78, 82);