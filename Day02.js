// Day 2: Operators
// Task/Activities:
// Activity 1: Arithmetic Operators
// 1. Task 1: Write a program to add two numbers and log the result to the console.
let a = 10;
let b = 21;

console.log(a + b);

// let c = a + b;
// console.log(c);

// 1. Task 2: Write a program to Sub two numbers and log the result to the console.
let sub = 10;
let sub1 = 21;

console.log(sub + sub1);

// let sub3 = sub + sub1;
// console.log(sub3);

// 1. Task 3: Write a program to multiply two numbers and log the result to the console.
let mul = 10;
let mul2 = 21;

console.log(mul + mul2);

// let mul3 = mul + mul2;
// console.log(mul3);


// 1. Task 4: Write a program to divide two numbers and log the result to the console.
let div = 10;
let div1 = 21;

console.log(div + div1);

// let div3 = div + div1;
// console.log(div3);


// 1. Task 5: Write a program to find a reminder when one numbe is divided by another and log the result to the console.

let mod = 10;
let mod1 = 21;

console.log(mod % mod1);

// let mod3 = mod + mod1;
// console.log(mod3);






// Activity 2: Assignnment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let add1 = 5;
    
    console.log(add1 += 10);


// Task 7 Use the += operator to sub a number to a variable and log the result to the console.
let subo = 5;
    
    console.log(subo -= 10);


    // Activity 3 Comparison Operator
    // Task 8: Write a program to compare twp number using > and < and log the result to the console.
    let less = 8 < 10;
    console.log(less);

    let greater = 10 < 5;
    console.log(greater);
    // Task 9: Write a program to compared teo number using >= and <= and log the result to the consoele.
    let eq = 20;
    let eq1 = "20";
    console.log(eq == eq1);
     // Task 10: Write a program to compare two numbers using == and === and the result to the console.
    console.log(eq  === eq1);

   



    // Activity 4: Logical Operator
    // Task 11: Write a program that uses the && operators to combine two conditions and log the result to the conosle.
    let condition1 = false;
    let condition2 = true;
    // let log3 = ;
    console.log("The result of && operatoe is: "+ (condition1 && condition2));

    
    // Task 11: Write a program that uses the || operators to combine two conditions and log the result to the conosle.
    let condition3 = false;
    let condition4 = true;
    // let log3 = ;
    console.log("The result of && operatoe is: "+ (condition3 || condition4));



    // Task 11: Write a program that uses the ! operators to combine two conditions and log the result to the conosle.

    let condition5 = !false;
    let condition6 = !true;
    // let log3 = ;
    console.log("The result of ! operatoe is: "+ (condition5));
    console.log("The result of ! operatoe is: "+ (condition6));



    // Activity 5: Ternary Operator
    // Task 14: Write a program that uses the ternary operator to check if a  number is positive or negative and log the result to the console.
    let numbe = -5;
    let result = (numbe >= 0) ? "Positive" : "negative";
    console.log("The numbe is  " + result);