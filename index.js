#! usr/bin/env node
import inquirer from "inquirer";
const answar = await inquirer.prompt([
    { message: "Enter your first number: ", type: "number", name: "firstNumber" },
    {
        message: "Enter your second number: ",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Please select one of the operator to perform the action",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "operator",
    },
]);
// Conditional Statements
if (answar.operator === "Addition") {
    console.log(answar.firstNumber + answar.secondNumber);
}
else if (answar.operator === "Subtraction") {
    console.log(answar.firstNumber - answar.secondNumber);
}
else if (answar.operator === "Multiplication") {
    console.log(answar.firstNumber * answar.secondNumber);
}
else if (answar.operator === "Division") {
    console.log(answar.firstNumber / answar.secondNumber);
}
