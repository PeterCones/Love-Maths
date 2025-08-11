
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            
            } else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType);
            }
        })
    }


})

function runGame(gameType) {
    let num1 = Math.floor(Math.random()* 25 )+1 
    let num2 = Math.floor(Math.random()* 25 )+1
    
    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    }
    else if (gameType === "minus"){
        displaySubtractQuestion(num1, num2);
    }
    else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    }
    else if (gameType === "divide"){
    displayDivideQuestion(num1, num2);
}
}


function checkAnswer() {

}

function calculateCorrectAnswer() {
    
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    calculateCorrectAnswer(operand1, operand2)

}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}