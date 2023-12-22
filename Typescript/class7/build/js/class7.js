"use strict";
//QTR1_week_7
//array -- With array we can write infinite names,numbers in one variable.
let name1 = [
    `hassan`,
    `baba`,
    `taha`,
    `hussain`
];
let rolNo = [1, 2, 589, 78];
console.log(name1, rolNo);
//length -- With length we can check the index of input.
console.log(name1.length);
console.log(rolNo.length);
//index 
console.log(name1[2], rolNo[2]);
//index Modification -- With it we can modify our input.
name1[2] = `hamza`;
rolNo[2] = 69;
console.log(name1, rolNo);
//push -- It can add input to the end. 
name1.push(`ali`, `ahmad`);
rolNo.push(16, 94);
console.log(name1, rolNo);
//pop -- It can remove input from the end. 
name1.pop();
rolNo.pop();
console.log(name1, rolNo);
//shift -- It can add input to the start. 
name1.shift();
rolNo.shift();
console.log(name1, rolNo);
//unshift -- It can remove input from start.
name1.unshift(`hassan`, `halit jaan`);
rolNo.unshift(64, 37);
console.log(name1, rolNo);
//splice / deletion
name1.splice(0, 1);
rolNo.splice(0, 1);
console.log(name1, rolNo);
//splice / addition
name1.splice(2, 0, `khadim hussain`, `ibraheem`);
rolNo.splice(2, 0, 45, 31);
console.log(name1, rolNo);
//slice
console.log(name1.slice(2, 4), rolNo.slice(2, 4));
/*
Assignment for the week is:
 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

 - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

 - Write a program that uses a for loop to print the first 25 integers.

 - Write a program that uses a for loop to print the first 10 even numbers.

 - Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.

 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

 - Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.

 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.
 */
//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array
/*
function insertInArray:any (arr, index, value){
    arr.splice()
}
let array = [
    `a`,
    `b`,
    `c`,
    `d`
]
console.log(`Original Array `, array)
console.log(`Array Length`, array.length)
array.splice(1,0,`f`)
console.log(`Modified Array `, array)
*/ 
