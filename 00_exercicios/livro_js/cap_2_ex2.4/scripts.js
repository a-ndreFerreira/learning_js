
//form
const form = document.querySelector('form');

//output
const output = document.querySelector('h2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const priceBuffet = Number(form.inPriceBuffet.value.trim());
    const priceGram = Number(form.inPriceGram.value.trim());

    const buffetPerGram = (priceBuffet / 1000) * priceGram;

    output.textContent = `O valor a ser pago: R$${buffetPerGram.toFixed(2)}`;
})