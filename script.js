function add(a, b) { 
    return a + b; 
}; 

function subtract(a, b) { 
    return a - b; 
}; 

function multiply(a, b) { 
    return a * b; 
}; 

function divide(a, b) { 
    if (b === 0) { 
        return "whoopsies" }
        else { 
            return a / b; 
        }; 
    }; 

function operate() {
    let results = 0;  
    if (operator === "+") {
        results += +num1 + +num2
    } else if (operator === "-") { 
        results += num1 - num2
    } else if (operator === "*") { 
        results += num1 * num2
    } else if (operator === "/") { 
        results += num1 / num2
    }
    return display.textContent = results;   
     
}; 

let num1;  

let num2; 

let operator;  

const display = document.querySelector(".display")

const btns = document.querySelectorAll("button"); 
btns.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent = button.value; 
    }); 
}); 
