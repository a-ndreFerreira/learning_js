
//form
const form = document.querySelector('form');

//output
const output = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = Number(form.in15min.value.trim());
    const clientTime = Number(form.inClientTime.value.trim());

    const total = Math.ceil(clientTime / 15) * value;
    //pega o valor e divide em blocos de 15, multiplica pelo valor da hora, Math.ceil faz arredondar para cima, para pagar os 15 minutos inteiros

    output.textContent = `O valor a ser pago é: R$ ${total}`;
})