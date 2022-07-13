const prompts = require("prompt-sync")();
console.log("Enter \n1.Feet to Inch \n2.Feet to Meter \n3.Inch to Feet \n4.Meter to Feet \n");
let unit = prompts("Choose option : ")
let inch = 12;
let meter = 0.3048;
let length = prompts("Enter length : ")
let result = 0;
switch (parseInt(unit)) {
    case 1: {
        result = length * inch;
        console.log(length + " feet = " + result + " inches");
        break;
    }
    case 2: {
        result = length * meter;
        console.log(length + " feet = " + result + " meters");
        break;
    }
    case 3: {
        result = length / inch;
        console.log(length + " inches = " + result + " feet");
        break;
    }
    case 4: {
        result = length / meter;
        console.log(length + " meters = " + result + " feet");
        break;
    }
    default: console.log("Please select between 1-4");
}