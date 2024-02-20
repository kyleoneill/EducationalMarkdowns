const prompt = require('prompt-sync')()

// This program is a simple calculator.

// Typically the function that is called to begin a program is called "main".
// In some languages, like C#, the entry point function is required to be called "main" and will error
// if a main function is not present. This is not the case in JavaScript, but it is still standard to
// use this name.
function main() {
    while (true) {
        const userInput = prompt("Enter 'add', 'subtract', 'multiply', 'divide', or 'exit': ")
        const userInputLowerCase = userInput.toLowerCase();
        if (userInputLowerCase == "exit") {
            break
        }
        else {
            const numbers = prompt("Enter two numbers separated by a space: ")
            const split = numbers.split(" ")
            if(split.length < 2) {
                console.log("There must be two numbers separated by a space.")
                continue
            }
            const firstNumber = parseInt(split[0])
            const secondNumber = parseInt(split[1])
            if(isNaN(firstNumber) || isNaN(secondNumber)) {
                console.log("The inputs provided are not both numbers.")
                continue
            }
            switch(userInputLowerCase) {
                case "add":
                    console.log(`Result: ${firstNumber + secondNumber}`)
                    break
                case "subtract":
                    console.log(`Result: ${firstNumber - secondNumber}`)
                    break
                case "multiply":
                    console.log(`Result: ${firstNumber * secondNumber}`)
                    break
                case "divide":
                    console.log(`Result: ${firstNumber / secondNumber}`)
                    break
                default:
                    console.log("Unsupported input, try again.")
            }
        }
    }
}

main() // Call the main function to begin the program.