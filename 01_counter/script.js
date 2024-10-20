let counter = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

const updateColor = () => {
    value.style.color = counter > 0 ? 'green' : counter < 0 ? 'red' : '#222';
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('increase')) {
            counter++;
        } else if (styles.contains('decrease')) {
            counter--;
        } else {
            counter = 0;
        };

        updateColor();
        value.textContent = counter;
    })
});