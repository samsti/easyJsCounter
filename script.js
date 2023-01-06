
let decreaseButton = document.querySelector('.decrease');
let resetButton = document.querySelector('.reset');
let increaseButton = document.querySelector('.increase');
let countNumber = document.querySelector('.count');

let countJs = 0;

let updateScreen = () =>{
    countNumber.innerHTML = countJs;
}

decreaseButton.addEventListener('click', () =>{
    countJs--;
    updateScreen();
})

resetButton.addEventListener('click', () =>{
    countJs = 0;
    updateScreen();
})

increaseButton.addEventListener('click', () =>{
    countJs++;
    updateScreen();
})

