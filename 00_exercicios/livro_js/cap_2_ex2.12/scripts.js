
//form
const form = document.querySelector('form');

//output
const output = document.querySelector('h3');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = form.inProduct.value.trim();
    const price = Number(form.inPrice.value.trim());

    const desconto = price * 0.50; //ou dividir por 2

    const priceDesconto = (price * 2) + desconto;

    output.textContent = `Promoção ${product} >>> Levando 3 por ${priceDesconto.toFixed(2)} <<< O terceiro sai por R$${desconto.toFixed(2)}`;
})