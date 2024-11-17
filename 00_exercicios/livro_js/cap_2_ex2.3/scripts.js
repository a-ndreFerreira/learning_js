
//form
const form = document.querySelector('form');

//outputs
const out2 = document.querySelector('h2');
const out3 = document.querySelector('h3');
const out4 = document.querySelector('h4');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const car = form.isCar.value.trim();
    const price = Number(form.isPrice.value.trim());

    const entrada = price / 2;
    const parcelamento = entrada / 12;

    out2.textContent = `Promoção: ${car}`;
    out3.textContent = `Entrada de R$${entrada}`;
    out4.textContent = `mais 12x de: R$${parcelamento}`;
});