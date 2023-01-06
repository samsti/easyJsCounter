
let decreaseButton = document.querySelector('.decrease');
let resetButton = document.querySelector('.reset');
let increaseButton = document.querySelector('.increase');
let countNumber = document.querySelector('.count');

let countJs = 0;

let updateScreen = () =>{
    countNumber.innerHTML = countJs;

    if (countJs === 0){
        countNumber.style.color = "black"
    }

    if(countJs < 0){
        countNumber.style.color = "red";
    }
    else if (countJs > 0){
        countNumber.style.color = "green";
    }

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

window.addEventListener("load", updateScreen);

