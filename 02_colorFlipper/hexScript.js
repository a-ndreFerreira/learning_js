const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const value = document.querySelector('.value');
const btnChange = document.querySelector('.btnChange');

const getRandomNumber = () => {
    return Math.floor(Math.random() * hexColors.length);
}

btnChange.addEventListener('click', () => {
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexColors[getRandomNumber()]; // gera um numero aleatoria a cada posicao
    };
    // console.log(color);

    value.textContent = color;
    document.body.style.backgroundColor = color;
})