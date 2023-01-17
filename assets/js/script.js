const currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (counter >= 10) {
        p$.innerHTML = ++counter; 
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < -10) {
        document.querySelector("decrementar").disabled = true;
    }else {
        document.querySelector("decrementar").disabled = false;
    }
}

