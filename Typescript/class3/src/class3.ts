//Qtr-1 , 4rd_week assignment

//assignment operators
// =
console.log(`Assignment Operators`)
var _name :string = "Muhammad Bilal Siddique";
var num1 = 5
var num2 = 12

// +=
num1 += num2
//num1 = num1 + num2
console.log(`num1 += num2 = ${num1}`)
// -=
//num1 = num1 - num2
num1 -= num2
console.log(`num1 -= num2 = ${num1}`)
// *=
//num1 = num1 * num2
num1 *= num2
console.log(`num1 *= num2 = ${num1}`)
// /=
//num1 = num1 / num2
num1 /= num2
console.log(`num1 /= num2 = ${num1}`)


//comparison operators (is boolean & results in true or false)
console.log(`comparison operators (is boolean & results in true or false)`)
// == equal to in value
let num3 = 5
let num4 = 8
let res1 = num3 == num4
console.log(`num3 == num4 ${res1}`)
// === equal value and type
console.log (`num3 === num4 ${num3 === num4}`)
// != not equal
console.log (`num3 != num4 ${num3 != num4}`)
// !== not equal value or not equal type
console.log (`num3 !== num4 ${num3 !== num4}`)
// > greater than
console.log (`num3 > num4 ${num3 > num4}`)
// < less than
console.log (`num3 < num4 ${num3 < num4}`)
// >= greater than or equal to
console.log (`num3 >= num4 ${num3 >= num4}`)
// <= less than or equal to
console.log (`num3 <= num4 ${num3 <= num4}`)
// !<  not less than
console.log (`num3 !< num4 ${num3 !< num4}`)
// !>  not greater than
console.log (`num3 !> num4 ${num3 !> num4}`)

//logical operators
console.log(`logical operators`)
// && and 
let nationality = `Pakistani`
let age = 14
let education = `Graduate`
let vote = nationality == `Pakistani` && age >= 18
console.log (`Eligible for vote : ${vote}`)
// || or
let learning = nationality == `Pakistani` && age >= 18 || education  == `Graduate`
console.log (`Eligible for learning license : ${learning}`)

//string operators 
console.log(`string operators`)
// + concatenation
console.log (_name + " is a good boy")
// .length
console.log (_name.length)
// .toUpperCase
console.log (_name.toUpperCase())
// .toLowerCase
console.log (_name.toLowerCase())
// .slice
console.log (_name.slice(5, 9))
// .replace
console.log (_name.replace("Bilal", "Siddique"))
// .concat
console.log (_name.concat(" is a good boy"))




//Qtr-1 , 5th_week assignment
/*
Assignment for this week is:
 - Write a program that calculates the percentage. 
 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
 - Write a program that checks if the given year is leap year or not.
 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.
 - Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.
 - Write a ts program that evaluates the grades of the students:
  * 80% or greater, grade A
  * 70% or greater, grade B
  * 60% or greater, grade C
  * 50% or greater, grade D
  * Less than 50% , grade F.
*/

//Write a program that calculates the percentage.
let marksObt: number = 756
let totalMarks : number = 850
let percentage : number = Math.floor (marksObt / totalMarks * 100)
console.log(`Percentage Marks : ${percentage} %`)


//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let price = 900
let discount10 = price * 10 / 100
let discount5 = price * 5 / 100

if (price > 100) {

    console.log(`Price $${price} after 10% discount is : $${(price - discount10)} & Total Discount is $${discount10}`)

}
else {
    console.log(`Price $${price} after 5% discount is : $${(price - discount5)} & Total Discount is $${discount5}`)
}


//Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
let _age = 10

if (_age > 0 && _age <= 12) {
    console.log(`Category : Child due to age is ${_age} Years`)
}
else if(_age > 12 && _age <=19) {
    console.log(`Category : Teenager due to age is ${_age} Years`)
}
else {
    console.log(`Category : Adult due to age is ${_age} Years`)
}


//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

let temperature = 15
if (temperature < 10) {
    console.log(`Its Cold! outside, so wear Warm Cloths like Huddy or Warm Jacket & Gloves`)
} else if (temperature >=10 && temperature <20) {
    console.log(`Its Cool outside, so wear light Jacket & Sweater`)
} else if (temperature >=20 && temperature <30) {
    console.log(`Its Warm outside, so wear light & breathable cloths`)
} else {
    console.log(`Its Hot! outside, so wear cool & comfortable cloths`)
}

//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
let digit = 8
if (digit % 3 == 0 && digit % 5 == 0) {
    console.log(`Digit ${digit} is divisible by both 3 & 5`)
} else if (digit % 3 == 0) {
    console.log(`Digit ${digit} is divisible by 3`)
} else if (digit % 5 == 0) {
    console.log(`Digit ${digit} is divisible by 5`)
} else {
    console.log(`Digit ${digit} is not divisible by 3 nor 5`)
}

//Write a program that checks if the given year is leap year or not.
let year = 2024
if (year % 4 == 0 && year % 100 != 0 || year %400 == 0){
    console.log(`${year} is a Leap Year`)
} else {
    console.log(`${year} is not a Leap Year`)
}

//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
let day = 12
if (day >=1 || day <=7)
{
    if (day === 1){
    console.log(`The 1st Day of the Week is Sunday`)
    } else if (day === 2){
    console.log(`The 2nd Day of the Week is Monday`)
    } else if (day === 3){
    console.log(`The 3rd Day of the Week is Tuesday`)
    } else if (day === 4){
    console.log(`The 4th Day of the Week is Wednesday`)
    } else if (day === 5){
    console.log(`The 5th Day of the Week is Thursday`)
    } else if (day === 6){
    console.log(`The 6th Day of the Week is Friday`)
    } else if (day ===7){
    console.log(`The Last Day of the Week is Saturday`)
    } 
else {console.log(`"Invalid Numder is selected" Please select number between 1 to 7`)}
}

//Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.

let units = 501
let unitPrice = 50
let bill = units * unitPrice
if (units < 100){
    console.log(`No Tax is applicable as units ${units} are less than 100 & Bill amount is = ${bill}` )
}
else if (units >= 100 && units < 200){
    console.log(`10% Tax is applicable on units ${units} & Bill amount is ${(bill + (bill * 10 / 100))}`);
}
else if (units >= 200 && units <= 500){
    console.log(`15% Tax is applicable on units ${units} & Bill amount is ${(bill + (bill * 15 / 100))}`);
}
else {
    console.log(`25% Tax is applicable on units ${units} & Bill amount is ${(bill + (bill * 25 / 100))}`);
}


//Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.
let attendance = 75
let practical = 51
let theory = 46

if (attendance > 75 && practical > 50 && theory > 45) {
    console.log(`Student is Pass as Attendance : ${attendance}, Practical Marks : ${practical} & Theory Marks : ${theory}`)
} else {
    console.log(`Student is fail as Attendance : ${attendance}, Practical Marks : ${practical} & Theory Marks : ${theory}`)
}

/*Write a ts program that evaluates the grades of the students:
* 80% or greater, grade A
* 70% or greater, grade B
* 60% or greater, grade C
* 50% or greater, grade D
* Less than 50% , grade F.
*/
let results = 80
if (results >= 80) {
    console.log(`Student Granted Grade "A", as he secured ${results}% Marks`)
} else if (results >= 70 && results < 80) {
    console.log(`Student Granted Grade "B", as he secured ${results}% Marks`)
} else if (results >= 60 && results < 70) {
    console.log(`Student Granted Grade "C", as he secured ${results}% Marks`)
} else if (results >= 50 && results < 60) {
    console.log(`Student Granted Grade "D", as he secured ${results}% Marks`)
} else {
    console.log(`Student Granted Grade "F", as he secured ${results}% Marks`)
}