// first exercice:

function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, aCallbackFunction) {
    return aCallbackFunction(num1, num2);
};

console.log(calc(2, 3, sum));

// second exercice:

setTimeout(function () {
    console.log("Hola JS");
}, 5000)

// thirth exercice:

function gretting(name) {
    console.log(`Hello ${name}`);
};

setTimeout(gretting, 10000, "Bernardo");

// fourth exercice (with arrow function):

const gretting = (name) => console.log(`Hola ${name}`);

setTimeout(gretting, 2000, "Patricia");