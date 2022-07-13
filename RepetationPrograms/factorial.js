const prompt = require("prompt-sync")();
let factorial = prompt ("Enter a number to find factorial : ");
let result = 1;
for (i = 1; i <= factorial; i++) {
    result *= i;
}
console.log(factorial + "! = " + result);