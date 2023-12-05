"use strict";
//Qtr-1 , 5th_week class work
//UNIVERSITY EXAMS RESULT CREATRIA
let attdn = 75;
let thory = 70;
let prectl = 45;
if (attdn >= 75) {
    console.log('Allowed in Exams');
    if (thory >= 70) {
        console.log('Passed in Theory');
        if (prectl >= 45) {
            console.log('Passed in Practical');
            if (attdn >= 75 && thory >= 70 && prectl >= 45) {
                console.log('Congratulations! You have cleared your exams');
            }
        }
        else {
            console.log('Failed in Practical');
        }
    }
    else {
        console.log('Failed in Theory');
    }
}
else {
    console.log('Not Allowed in Exams');
}
//Create a program that simulates a simple ATM. Ask the user for their account balance, and then check if they have enough funds to withdraw a certain amount. If yes, update the balance; otherwise, display an insufficient funds message.
//ATM Machine
let accNo = 123456;
let accBal = 24000;
let withDrawl = 15000;
let minBalReq = 10000;
// if, else if approach
if (accBal - withDrawl >= minBalReq) {
    console.log("you can withdraw your cash");
}
else {
    console.log("you cannot withdraw your cash");
}
// switch case approach
switch ((accBal - withDrawl) >= minBalReq) {
    case true:
        console.log(`You can Withdraw Cash`);
        break;
    default:
        console.log(`Not sufficient min balace after required widrawl so not allowed`);
}
//Design a program that takes a month as input (1-12) and prints the number of days in that month. 
let months = 3;
if (months >= 1 && months <= 12) {
    if (months === 2) {
        console.log(`The Month ${months} has 28 days`);
    }
    else if (months === 4 || months === 6 || months === 9 || months === 11) {
        console.log(`The Month ${months} has 30 days`);
    }
    else {
        console.log(`The Month ${months} has 31 days`);
    }
}
else {
    console.log(`Invalid Month! : Please enter number between 1 to 12`);
}
//Create a program that asks the user to enter three numbers. Determine and print whether the sum of any two numbers is equal to the third.
let num1 = 1;
let num2 = 5;
let num3 = 3;
if (num1 + num2 == num3 || num2 + num3 == num1 || num1 + num3 == num2) {
    console.log(`sum of two numbers is equals to third number`);
}
else {
    console.log(`sum of two numbers is not equals to third number`);
}
//switch condition
let weekDay = 5;
switch (weekDay) {
    case 1:
        console.log(`${weekDay} : Day is Monday`);
        break;
    case 2:
        console.log(`${weekDay} : Day is tuesday`);
        break;
    case 3:
        console.log(`${weekDay} : Day is Wednesday`);
        break;
    case 4:
        console.log(`${weekDay} : Day is Thursday`);
        break;
    case 5:
        console.log(`${weekDay} : Day is Friday`);
        break;
    case 6:
        console.log(`${weekDay} : Day is Saturday`);
        break;
    case 7:
        console.log(`${weekDay} : Day is Sunday`);
        break;
    default:
        console.log(`${weekDay} is Invalid number.Write between 1 to 7`);
}
//Basic calculator
let operator = `/`;
switch (operator) {
    case `+`:
        console.log(num1 + num2);
        break;
    case `-`:
        console.log(num2 - num3);
        break;
    case `*`:
        console.log(num3 * num1);
        break;
    case `/`:
        console.log(num2 / num1);
        break;
    default:
        console.log(`Invalid operator`);
}
//vovel
let alphabet = `a`;
switch (alphabet) {
    case `a`:
        console.log(`${alphabet} is a vovel`);
        break;
    case `e`:
        console.log(`${alphabet} is a vovel`);
        break;
    case `i`:
        console.log(`${alphabet} is a vovel`);
        break;
    case `o`:
        console.log(`${alphabet} is a vovel`);
        break;
    case `u`:
        console.log(`${alphabet} is a vovel`);
        break;
    default:
        console.log(`${alphabet} is not a vovel`);
}
/*
QTR:1 Week 5 assignment.
- Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5 it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.
 - Try making ATM Machine matches pin and account number it it matches then user can withdraw amount. And if he or she hasn't sufficient balance show them a message .Show message for wrong account number and wrong pin separately.
 - Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else if abd switch statement.
 - Write a program that prints the name of study for a person for instance   middle , matric etc from playgroup to PhD on basis of class number. Do it with both if else if and switch statement .
 - Write a TS program that check ms wheather if the number is positive, zero or negative.
 - Take 5 different numbers and check which on is greatest and then check which one is smallest use separate conditionals  for both scenarios.
 */
//-Q1: Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5 it should print day name Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.
let day1 = 8;
if (day1 >= 1 && day1 <= 7) {
    switch (day1) {
        case 1:
            console.log(`Monday`);
            break;
        case 2:
            console.log(`Tuesday`);
            break;
        case 3:
            console.log(`Wednesday`);
            break;
        case 4:
            console.log(`Thursday`);
            break;
        case 5:
            console.log(`Friday`);
            break;
        case 6:
            console.log(`Weekend`);
            break;
        default:
            console.log(`Its Sunday`);
    }
}
else {
    console.log(`Invalid Day! : Please input from 1 to 7`);
}
// Try making ATM Machine matches pin and account number it it matches then user can withdraw amount. And if he or she hasn't sufficient balance show them a message .Show message for wrong account number and wrong pin separately. 
let accountNum = 123456;
let pin = 8264;
let totalCash = 50000;
let withdrawalAmount = 25000;
if (accountNum === 123456) {
    if (pin === 8264) {
        console.log(`Withdrawal Amount: ${withdrawalAmount}`);
        if (withdrawalAmount <= totalCash) {
            console.log(`You can withdraw your cash`);
        }
        else {
            console.log(`SORRY ==> You don't have enough balance to withdraw`);
        }
    }
    else {
        console.log(`Invalid PIN !!!`);
    }
}
else {
    console.log(`Invalid Account`);
}
//- Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else if and switch statement.
//In IF ELSE Statement
let hour = 5;
if (hour >= 0 && hour <= 23)
    // Using IF-ELSE statement
    if (hour >= 5 && hour < 12) {
        console.log(`Good Morning`);
    }
    else if (hour >= 12 && hour < 17) {
        console.log(`Good Afternoon`);
    }
    else if (hour >= 17 && hour < 21) {
        console.log(`Good Evening`);
    }
    else {
        console.log(`Good Night`);
    }
else {
    console.log(`Invalid HRS! : Input HRS from 0 to 23`);
}
// Using SWITCH statement
if (hour >= 0 && hour <= 23)
    switch (true) {
        case hour >= 5 && hour < 12:
            console.log(`Good Morning`);
            break;
        case hour >= 12 && hour < 17:
            console.log(`Good Afternoon`);
            break;
        case hour >= 17 && hour < 21:
            console.log(`Good Evening`);
            break;
        default:
            console.log(`Good Night`);
            break;
    }
else {
    console.log(`Invalid HRS! : Input HRS from 0 to 23`);
}
//- Write a program that prints the name of study for a person for instance   middle , matric etc from playgroup to PhD on basis of class number. Do it with both if else if and switch statement .
let class1 = 5;
let primery = class1 >= 1 && class1 <= 5;
let middle = class1 >= 5 && class1 <= 8;
let matric = class1 >= 9 && class1 <= 10;
let interMediate = class1 >= 11 && class1 <= 12;
let graduation = class1 >= 13 && class1 <= 14;
let masters = class1 >= 15 && class1 <= 16;
let phd = class1 >= 17 && class1 <= 20;
if (class1 >= 1 && class1 <= 20) {
    switch (true) {
        case primery:
            console.log(`You belongs to Primery section`);
            break;
        case middle:
            console.log(`You belongs to Middle section`);
            break;
        case matric:
            console.log(`You belongs to Matric section`);
            break;
        case interMediate:
            console.log(`You belongs to InterMediate section`);
            break;
        case graduation:
            console.log(`You belongs to Graduation section`);
            break;
        case masters:
            console.log(`You belongs to Masters section`);
            break;
        default:
            console.log(`You belongs to Phd section`);
    }
}
else {
    console.log(`Invalid class! : Enter from 1 to 20 `);
}
// - Write a TS program that check ms wheather if the number is positive, zero or negative.
let num9 = -1;
let positive = num9 > 0;
let negative = num9 < 0;
if (num9) {
    switch (true) {
        case positive:
            console.log(`Number is Positive`);
            break;
        case negative:
            console.log(`Number is Negative`);
            break;
    }
}
else {
    console.log(`Number is Zero`);
}
//- Take 5 different numbers and check which one is greatest and then check which one is smallest use separate conditionals  for both scenarios.
let num4 = 1;
let num5 = 10;
let num6 = 25;
let num7 = 5;
let num8 = 55;
let greatestNum4 = num4 > num5 && num4 > num6 && num4 > num7 && num4 > num8;
let greatestNum5 = num5 > num4 && num5 > num6 && num5 > num7 && num5 > num8;
let greatestNum6 = num6 > num4 && num6 > num5 && num6 > num7 && num6 > num8;
let greatestNum7 = num7 > num4 && num7 > num5 && num7 > num6 && num7 > num8;
let greatestNum8 = num8 > num4 && num8 > num5 && num8 > num6 && num8 > num7;
switch (true) {
    case greatestNum4:
        console.log(`Gretest Nummber is ${num4}`);
        break;
    case greatestNum5:
        console.log(`Gretest Nummber is ${num6}`);
        break;
    case greatestNum6:
        console.log(`Gretest Nummber is ${num6}`);
        break;
    case greatestNum7:
        console.log(`Gretest Nummber is ${num7}`);
        break;
    case greatestNum8:
        console.log(`Gretest Nummber is ${num8}`);
        break;
    default: {
        console.log(`Please check! : 1 or more numbers could'nt be same!!`);
    }
}
let smallestNum4 = num4 < num5 && num4 < num6 && num4 < num7 && num4 < num8;
let smallestNum5 = num5 < num4 && num5 < num6 && num5 < num7 && num5 < num8;
let smallestNum6 = num6 < num4 && num6 < num5 && num6 < num7 && num6 < num8;
let smallestNum7 = num7 < num4 && num7 < num5 && num7 < num6 && num7 < num8;
let smallestNum8 = num8 < num4 && num8 < num5 && num8 < num6 && num8 < num7;
switch (true) {
    case smallestNum4:
        console.log(`Smallest Nummber is ${num4}`);
        break;
    case smallestNum5:
        console.log(`Smallest Nummber is ${num6}`);
        break;
    case smallestNum6:
        console.log(`Smallest Nummber is ${num6}`);
        break;
    case smallestNum7:
        console.log(`Smallest Nummber is ${num7}`);
        break;
    case smallestNum8:
        console.log(`Smallest Nummber is ${num8}`);
        break;
    default: {
        console.log(`Please check! : 1 or more numbers could'nt be same!!`);
    }
}
