
const colors = ['green', 'red', 'rgb(155,155,155)', '#222'];

const value = document.querySelector('.value');
const btnChange = document.querySelector('.btnChange');

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}

btnChange.addEventListener('click', () => {
    const randonNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randonNumber]
    value.textContent = colors[randonNumber]
})