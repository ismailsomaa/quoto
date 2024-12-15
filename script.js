const text = document.querySelector('.text');
const body = document.body;

const changeBodyBackgroundButton = document.querySelector('.change-body-background');
const changeTextBackgroundButton = document.querySelector('.change-text-background');
const changeFontSizeButton = document.querySelector('.change-font-size');

const colors = ['lightblue', '#f7f7f7', 'yellow', 'green'];
let currentColorIndex = 0;

changeBodyBackgroundButton.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length; 
    body.style.backgroundColor = colors[currentColorIndex];
});

const textColors = ['yellow', 'red', 'blue', 'transparent']; 
let currentTextColorIndex = 0; 

changeTextBackgroundButton.addEventListener('click', () => {
    currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length; 
    text.style.backgroundColor = textColors[currentTextColorIndex];
});


changeFontSizeButton.addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(text).fontSize);
    text.style.fontSize = `${currentSize + 2}px`;
});

