const css = document.querySelector('#css');
const toggleButton = document.querySelector('#toggle');
const switchMode = () => {
    if (toggleButton.innerHTML === 'Switch to DARK mode!'){
        css.href = 'darkmode.css';
        toggleButton.innerHTML = 'Switch to LIGHT mode!';
    } else {
        css.href = 'stylesheet.css';
        toggleButton.innerHTML = 'Switch to DARK mode!';
    }
}

toggleButton.addEventListener('click', switchMode)