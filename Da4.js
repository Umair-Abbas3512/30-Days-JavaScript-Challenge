// Day 4: Loops
// Task/Activities:
// Activity 1: For Loop
// Task 1: Write a program to print number from 1 to 10 using for loop.

for (let i = 0; i <=10; i++){
    console.log(i);
}
// Task 2: Write a program to print the multiplication table of 5 using for loop.
 
// let num = prompt("Enter the number");
let num = 5;
for (let i = 1; i <= 10; i++){
    let result = num * i;
    console.log(`${num} * ${i} = ${result}`);
}

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10  using a while loop.
let sum= 0;
let sumNum = 1;
while (sumNum <= 10) {
    sum +=sumNum
    sumNum += 1
console.log("The sum of 1 to 10 is: " + sum);

}
// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let revNum = 10;
while (revNum > 0){
    console.log(revNum);
revNum--
    
}

// Activity 3: Do....While Loop
// Task 5: Writa a program to print numbers from 1 to 5 using do while loop.
let numsDo = 1;
 do {
    console.log(numsDo);
        numsDo++;
 }
 while (numsDo <= 5)

// Task 6: Write a program to calculate the factorial of a number using a do ..... while loops:
let factorial = 5;
let factorial1 = 1;
let i = 1;
do {
    factorial1 *= i;
    i++;
}
while (i <= num);
console.log(`The number of ${factorial} is: ${factorial1}`);

// Activity 4: Nested Loops
// Task 7:  Write a program to print a pattern using nested for loops:

const rows = 10; 
for (let i = 1; i <= rows; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
        row += "* "
        console.log(row);

    }
    console.log("\n");
}
//  Activity 5: Loop control statements
// Task 8: write a program to print numbers from 1 - 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++){
    if (i == 5){
        continue;
    }
    console.log(i);
}

// Activity 9: Write a program to print numbers from 1 to 10, but stop the loops when the numbers is 7 using break statement.
for (let i = 1; i <= 10; i++){
    if (i == 7){
        break;
    }
    console.log(i);
}