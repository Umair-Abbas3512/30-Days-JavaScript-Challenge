// Day 3: Control Structures
// Task/Activities
// Activity 1:If Else Statements
// // Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// // let checkNumber = prompt("Please Enter the Number");
let checkNumber =  -1;
if (checkNumber > 0){
    console.log("The number is poistive");
}
else if (checkNumber == 0){
    console.log("The number is equal to Zero");
}
else {
    console.log("The number is negative");
}



// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

const age = 11;
// const age = prompt("Please Enter you age:")
if (age >= 18){
    console.log("You are eligible ID card");
}
else {
    console.log("You are not eligible ID card");
}



// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using neested if-else statements.
const num1 = 33;
// const num1 = prompt("Enter num1 number");
const num2 = 4;
// const num2 = prompt("Enter num2 number")
const num3 = 55;
// const num3 = prompt("Enter num3 number");

let largest;
if (num1 >= num2 && num1 >= num3){
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3){
    largest = num2;
}
else{
    largest = num3;
}
console.log("The largest number is  : " + largest);



// Activity 3:  Switch Case
// Task 4: Write a program that users a switch case to determined the day of yhe week based on a number (1 - 7) and the log the day name to the console.
switch (5) {
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;

    default:
        console.log("Sorry i have no idea");
}



// Task 5: Write a program that uses a switch case to assign grade ('A',B'C,'D','F) based on score and log the grade to the console.
// let score = prompt("Enter a score")
let score = 10;
let grade;
switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A"
        break;
    case (score >= 80 && score <= 90):
        grade = "B"
        break;
    case (score >= 70 && score <= 80):
        grade = "C"
        break;
    case (score >= 60 && score <= 70):
        grade = "D"
        break;
    case (score >= 0 && score <= 60):
        grade = "ٖF"
        break;
    default:
        grade = "ٰInvalid"
        break;
}
console.log("The grade is: " + grade);



// Activity 4: Conditional (Ternary) operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and the log the result to the console.
let number = 40;
// let number = prompt("Enter the number");
let output = (number % 2 ===0)? 'The nmber is even': 'The number is odd'
console.log(output);

// Activity 5: Combing Condition
// Task 7: Write a program to check if a year is a leaf year using multiple condition (divisible by 4, but not 100 unless also dividisible by 400) and the log the result to the console.
let year = 2024;
let isLeafYear;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    isLeafYear = true;
}
else{
    isLeafYear = false;
}
console.log(isLeafYear);