//Livro Logica de programação em JavaScript
//ex5
// const num = prompt('Numero:');
// const b = num * 2;
// alert(`O dobro é: ${b}`);

//ex6
// const num1 = Number(prompt('Numero 1:'));
// const num2 = Number(prompt('Numero 2:'));
// const soma6 = num1 + num2;
// alert(`A soma é: ${soma6}`);

// //ex06 node
// const prompt = require("prompt-sync")();

// const num1 = Number(prompt('Digite um número:'));
// const num2 = Number(prompt('Digite outro número:'));
// const soma = num1 + num2;
// console.log(`A soma dos números é: ${soma}`);

//ex7
// const jantar = Number(prompt('Valor do jantar:'));
// const garcon = jantar * 0.10;
// const total = jantar + garcon;
// alert(`Jantar: ${jantar}\nGarçon: ${garcon.toFixed(2)}\nTotal: ${total.toFixed(2)}`);

//ex8
// const num1 = Number(prompt('Dias:'));
// const num2 = Number(prompt('Horas:'));
// const div = (num1 * 24) + num2;
// alert(`Tempo de viagem\nDias: ${num1}\nHoras: ${num2}\nTotal de horas de viagem: ${div}`);

//ex1.11 sequencia
//a - Vizinhos
// const num = Number(prompt('Digite um número:'));
// const before = num - 1;
// const after = num + 1;
// alert(`Os vizinhos de ${num} é: ${before} e ${after}`);

//b - Caixa pizzaria
// const valorTotal = Number(prompt('Digite o total da conta:'));
// const quantPessoas = Number(prompt('Em quantas pessoas:'));
// const res = valorTotal / quantPessoas;
// alert(`Pizzaria Dev\nTotal da conta: $${valorTotal}\nNúmero de pessoas: ${quantPessoas}\nTotal para cada um fica: $${res.toFixed(2)}`);

//c - formas de pagamento numa loja
// const preco = Number(prompt('Digite o preço do produto:'));
// const precoVista = preco - (preco * 0.10);
// const parcela = preco / 3;
// alert(`Bugigangas DEV\nPreço: ${preco}\nValor a vista com 10%off: ${precoVista}\nValor parcelado em 3x: ${parcela.toFixed(2)}`);

//d - média dos alunos
// const grade1 = Number(prompt('Digite a primeira nota:'));
// const grade2 = Number(prompt('Digite a segunda nota:'));
// const media = (grade1 + grade2) / 2;
// alert(`Média dos alunos\nNota 1: ${grade1}\nNota 2: ${grade2}\nMédia do Aluno: ${media.toFixed(1)}`);