
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
        return "ERROR" }
        else { 
            return a / b; 
        }; 
    }; 

function operate() {
    let results = 0;  
    if (operator === "+") {
        results += num1 - num2
    } else { 
        results += +num1 + +num2
    }
    return display.textContent = results;   
     
}; 

let num1;  

let num2; 

let operator; 
  

function displayNumber() {   
}; 

const display = document.querySelector(".display"); 

const one = document.querySelector(".one"); 
one.addEventListener("click", () => {
    display.textContent = one.value; 
    num1 = one.value;   
}); 

const two = document.querySelector(".two"); 
two.addEventListener("click", () => {
    display.textContent = two.value; 
    num2 = two.value; 
}); 

const plus = document.querySelector(".plus"); 
plus.addEventListener("click", () => {
    operator = "+";  
}); 

const equals = document.querySelector(".equals"); 
equals.addEventListener("click", operate);  
