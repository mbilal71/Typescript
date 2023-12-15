"use strict";
//Qrt 1, 2nd Week
//1- Declare variables for a person's name, age, and whether they are a student, Print these variables to the console.
var p1Name = "HASSAN";
var p2Name = "TAHA";
var p3Name = "HUSSAIN";
var p1Age = 14;
var p2Age = 20;
var p3Age = 7;
var p1IsStudent = p1Age > 10;
var p2IsStudent = p2Age > 10;
var p3IsStudent = p3Age > 10;
console.log("Ans 1- Declare variables for a person's name, age, and whether they are a student, Print these variables to the console.");
console.log("Person 1 - Name: ", p1Name, ", Age: ", p1Age, ", Student: ", p1IsStudent);
console.log("Person 2 - Name: ", p2Name, ", Age: ", p2Age, ", Student: ", p2IsStudent);
console.log("Person 3 - Name: ", p3Name, ", Age: ", p3Age, ", Student: ", p3IsStudent);
//2- Declare two variables with numeric values, Perform addition, subtraction, multiplication, and division on these variables, Print the results to the console.
var numb1 = 12;
var numb2 = 21;
var numb3 = 10;
console.log("Ans 2- Declare two variables with numeric values, Perform addition, subtraction, multiplication, and division on these variables, Print the results to the console.");
console.log("Addition Result: ", numb1 + numb2 + numb3);
console.log("Subtraction Result: ", numb1 - numb2 - numb3);
console.log("Multiplication Result: ", numb1 * numb2 * numb3);
console.log("Division Result: ", numb1 / numb2 / numb3);
//3-Declare a string variable with your favorite programming language, Print the final sentence to the console.
var favlang = "Python";
console.log(`Ans 3-Declare a string variable with your favorite programming language, Print the final sentence to the console.`);
console.log(`My favorite programming language is `, favlang);
//Arithmetic operators:
let n1 = 5;
let n2 = 2;
console.log("(n1 + n2) Addition of 5 + 2 = ", n1 + n2); // Addition 7
let str1 = "1";
let str2 = "2";
console.log("(str1 + str2) Combining of str1 + str2 = ", str1 + str2); // Addition 12
console.log("(n1 - n2) Subtraction of 5 - 2 = ", n1 - n2); // Subtraction 3
console.log("(n1 * n2) Multiplication of 5 * 2 = ", n1 * n2); // Multiplication 10
console.log("(n1 / n2) Division of 5 / 2 = ", n1 / n2); // Division 2.5
console.log("(n1 ** n2) Exponentiation 5 Power of 2 = ", n1 ** n2); // Exponentiation 25
console.log("(n1 % n2) Reminder of 5 by 2 = ", n1 % n2); // Reminder 1
//Assignment operators:
//Assignment operator are used to assigning values to variables.
let n = 5;
console.log("let n = ", n); // 5
n += 5;
console.log("n += 5 n has been incremented by 5 = ", n); //  n has been incremented by 5 = 10
n -= 5;
console.log("n -= 5 now n=10 decremented by 5 = ", n); // now n=10 decremented by 5 = 5
//Comparison operators:
//Comparison operator are used to compare values of variables.
console.log(`(n == 5) Checks if n is equal to 5. Since n is 5, it's `, n == 5); // Checks if n is equal to 5. Since n is 5, it's true.
console.log(`(n === 5) Checks if n is strictly equal to 5. It's `, n === 5); // Checks if n is strictly equal to 5. It's true.
console.log(`(n != 5) Checks if n is not equal to 5. It's `, n != 5); // Checks if n is not equal to 5. It's false.
console.log(`(n > 8) Checks if n is greater than 8. It's `, n > 8); // Checks if n is greater than 8. It's false.
console.log(`(n < 8) Checks if n is less than 8. It's `, n < 8); // Checks if n is less than 8. It's true.
console.log(`(n >= 8) Checks if n is greater than or equal to 8. It's `, n >= 8); // Checks if n is greater than or equal to 8. It's false.
console.log(`(n <= 8) Checks if n is less than or equal to 8. It's `, n <= 8); // Checks if n is less than or equal to 8. It's true.
//Logical operators:
//Logical operator are used to combine multiple conditions in one.
console.log(`n >= 5 && n < 10: Checks if n is greater than or equal to 5 AND less than 10. 
Both conditions are true, so the result is `, n >= 5 && n < 10); // n >= 5 && n < 10: Checks if n is greater than or equal to 5 AND less than 10. Both conditions are true, so the result is true.
console.log(`n > 5 && n < 10: Checks if n is greater than 5 AND less than 10. 
The first condition is false (since n is equal to 5), so the result is `, n > 5 && n < 10); // n > 5 && n < 10: Checks if n is greater than 5 AND less than 10. The first condition is false (since n is equal to 5), so the result is false.
console.log(`n >= 5 || n < 10: Checks if n is greater than or equal to 5 OR less than 10. 
Since n is equal to 5, the first condition is true, so the result is `, n >= 5 || n < 10); // n >= 5 || n < 10: Checks if n is greater than or equal to 5 OR less than 10. Since n is equal to 5, the first condition is true, so the result is true.
console.log(`n > 5 || n < 10: Checks if n is greater than 5 OR less than 10. 
Both conditions are true, so the result is `, n > 5 || n < 10); // n > 5 || n < 10: Checks if n is greater than 5 OR less than 10. Both conditions are true, so the result is true.
console.log(`!(n < 10): Checks if NOT (n is less than 10). 
Since n is equal to 5 (which is less than 10), the result is `, !(n < 10)); // !(n < 10): Checks if NOT (n is less than 10). Since n is equal to 5 (which is less than 10), the result is false.
console.log(`!(n > 10): Checks if NOT (n is greater than 10). 
Since n is not greater than 10, the result is `, !(n > 10)); //  !(n > 10): Checks if NOT (n is greater than 10). Since n is not greater than 10, the result is true.
//Functions are the primary means of passing data around in TypeScript. TypeScript allows you to specify the types of both the input and output values of functions.
//Arrow Functions
let sum1 = (x, y) => {
    return x ** y;
};
console.log(sum1(10, 20)); // Output: 30 "sum1 is a function explicitly declaring the return type"
let sum2 = (x, y) => y % x;
console.log(Math.floor(sum2(3, 4))); // Output: 7 "sum2 is a more concise form, where the return type is inferred";
