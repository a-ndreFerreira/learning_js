
//form
const form = document.querySelector('form');

//output
const out3 = document.querySelector('h3');
const out2 = document.querySelector('h2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = form.inProduct.value.trim();
    const price = Number(form.inPrice.value.trim());

    const newPrice = Math.floor(price * 2);

    out2.textContent = `Promoção de ${product}`;
    out3.textContent = `Levando 2 pague com desconto. R$ ${newPrice.toFixed(2)}`;
})