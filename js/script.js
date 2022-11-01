const previuosOperationText = document.querySelector("#previuos-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previuosOperationText, currentOperationText){
        this.previuosOperationText = previuosOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // add digit to calculator screen
    addDigit(digit){
        // check if current operation alredy has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    // process all calculator operations
    processOperation(operation){
        

    // Get current and  previous value
    let operationValue;
    let previous = +this.previousOperationText.innerText;
    let current = +this.currentOperationText.innerText;


    switch(operation) {
        case "+":
            operationValue = previous + current
            this.updateScreen(operationValue, operation, current, previous);
            break;
        default:
            return;
    }
    }

    // Change values of the calculator screen

    updateScreen(operationValue =  null, operation = null, current = null, previous = null){

        
        if(operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // Check if value is zero, if it is just add current value
            if(previous === 0) {
                operationValue = current
            }

            // add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }
}

const calc = new Calculator(previuosOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
})