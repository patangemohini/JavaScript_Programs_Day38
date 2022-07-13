const prompt = require("prompt-sync")();
let num = prompt("Enter the value of num : ");
for (i = 0; i <= num; i++) {
    console.log("2 ^ " + i + " = " + Math.pow(2, i));
}