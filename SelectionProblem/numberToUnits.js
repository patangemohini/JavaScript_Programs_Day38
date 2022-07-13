const prompts = require("prompt-sync")();
let num = prompts("Enter a number : ")
switch (parseInt(num)) {
    case 1: console.log("Unit");
        break;
    case 10: console.log("Ten");
        break;
    case 100: console.log("Hundred");
        break;
    case 1000: console.log("Thousand");
        break;
    default: console.log("Enter a valid number");
}