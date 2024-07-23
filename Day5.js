// Day 5: Function 
// Task/Activities:
// Activity 1:  Function Declaration 
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number) {
    if (number %2 === 0){
        console.log(`${number} is even`);
    }
    else {
        console.log(`${number} is odd`);
    }
}
console.log(checkEvenOdd(8));
console.log(checkEvenOdd(15));


// Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number){
    return number * number;
}
const num = 5;
const sqaure = calculateSquare(num);
console.log(`The sqaure of ${num} is: ${sqaure}`);

// Acrivity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(a, b){
    let max = a > b ? a :b;
    console.log(`The maximum of ${a} and ${b} is: ${max}`);
}
findMax(7, 3);

// Task 4: Write a function expression to concatenate two string return the result.
function concatenate(num1, num2) {
    return num1.concat(" ", num2)
}
console.log(concatenate("Hello", "World!"));

// Activity 3: Arrow Function
// Task 5: Write an arrow function to calculate the sum of two number and return the result.
const calculateSum = (a, b) => {
    return a +  b;
};
const calSum = 20;
const calSum1 = 13;
const sum12 = calculateSum(calSum, calSum1);
console.log(`The sum of ${calSum} and ${calSum1} is: ${sum12}`);

// Task 6: Write an arrow function to check if a string contains a specific chsrscter and return the  boolean value.
const containsCharacter = (str, char) => {
    return str.includes(char);
}
const myString = "Hello World!";
const characterToCheck = "o";
const result = containsCharacter(myString, characterToCheck);
console.log(`Does ${myString} contain the character ${characterToCheck} ? ${result}`);

// Activity 4: Function Parameters and Defalut Values
// Task 7: Write a function takes two parameters and return their product. Provide a default value for the second parameter.
function calculateProduct (a, b = 1){
    return a * b;

}
const num1 = 5;
const num2 = 3;
const product1 = calculateProduct(num1, num2);
console.log(`Product of ${num1} and ${num2} is: ${product1}`);
const product2 = calculateProduct(num1);
console.log(`Product of ${num1} and default value is: ${product2}`);

// Task 8: Write a function that takes a person,s name and age and return a greeting message provide a default value for the age.
function greetPerson(name, age = 30){
    return `Hello, ${name} ! You are ${age} year old.`
}
const person1 = greetPerson("Umair", 24)
console.log(person1);
const person2 = greetPerson("Bob");
console.log(person2);


// Activity 5: Higher-Order Function
// Task 9: Write a higher-order function takes a function and number, and calls the function that may times.

function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Create a new function that calls `greet` 3 times
const greetThreeTimes = callMultipleTimes(greet, 3);

// Call the new function
greetThreeTimes("Alice"); // Outputs: Hello, Alice! (3 times)

// Another example with an anonymous function
const printNumber = callMultipleTimes(num => console.log(num), 5);

printNumber(10); // Outputs: 10 (5 times)


// Task 10: Write a higher-order function that take two functions and a value, applies the first function to the value, and the applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

// Example functions
function addOne(x) {
    return x + 1;
}

function double(x) {
    return x * 2;
}

// Example usage:
const result1 = applyFunctions(addOne, double, 3);
console.log(result1); // Outputs: 8 (double(addOne(3)) = double(4) = 8)

const result2 = applyFunctions(double, addOne, 5);
console.log(result2); // Outputs: 12 (addOne(double(5)) = addOne(10) = 11)

