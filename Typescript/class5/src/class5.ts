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
                console.log('Congratulations! You have cleared your exams')
            }

        } else {
            console.log('Failed in Practical');
        }

    } else {
        console.log('Failed in Theory');
    }
} else {
    console.log('Not Allowed in Exams');
}


//Create a program that simulates a simple ATM. Ask the user for their account balance, and then check if they have enough funds to withdraw a certain amount. If yes, update the balance; otherwise, display an insufficient funds message.

//ATM Machine
let accNo: number = 123456
let accBal: number = 24000
let withDrawl: number = 15000
let minBalReq: number = 10000

// if, else if approach

if (accBal - withDrawl >= minBalReq) {
    console.log("you can withdraw your cash")
} else {
    console.log("you cannot withdraw your cash")
}


// switch case approach

switch ((accBal - withDrawl) >= minBalReq){
    case true:
        console.log(`You can Withdraw Cash`)
        break
    default:
        console.log(`Not sufficient min balace after required widrawl so not allowed`)
}


//Design a program that takes a month as input (1-12) and prints the number of days in that month. 
let months: number = 3

if (months >=1 && months <=12){
    if (months === 2){
        console.log(`The Month ${months} has 28 days`)
    } else if (months === 4 || months === 6 || months === 9 || months === 11){
        console.log(`The Month ${months} has 30 days`)
    } else {console.log(`The Month ${months} has 31 days`)}

} else {
    console.log(`Invalid Month! : Please enter number between 1 to 12`)
}


//Create a program that asks the user to enter three numbers. Determine and print whether the sum of any two numbers is equal to the third.
let num1 = 1
let num2 = 5
let num3 = 3
if (num1 + num2 == num3 || num2 + num3 == num1 || num1 + num3 == num2) {
    console.log(`sum of two numbers is equals to third number`)
}
else {
    console.log(`sum of two numbers is not equals to third number`)
}

//switch condition

let weekDay = 5
switch (weekDay){
    case 1:
        console.log(`${weekDay} : Day is Monday`)
        break
    case 2:
        console.log(`${weekDay} : Day is tuesday`)  
        break 
    case 3:
        console.log(`${weekDay} : Day is Wednesday`)
        break 
    case 4:
        console.log(`${weekDay} : Day is Thursday`) 
        break
    case 5:
        console.log(`${weekDay} : Day is Friday`)
        break 
    case 6:
        console.log(`${weekDay} : Day is Saturday`)
        break
    case 7:
        console.log(`${weekDay} : Day is Sunday`)
        break
default:
        console.log(`${weekDay} is Invalid number.Write between 1 to 7`)                        
}

//Basic calculator

let operator =`/` 
switch (operator){
    case `+`:
        console.log(num1 + num2)
        break
    case `-`:
        console.log(num2 - num3)
        break
    case `*`:
        console.log(num3 * num1)
        break
    case `/`:
        console.log(num2 / num1) 
        break           
default :
console.log(`Invalid operator`)
}


//vovel
let alphabet = `a`
switch (alphabet){
    case `a`:
        console.log(`${alphabet} is a vovel`)
        break
    case `e`:
        console.log(`${alphabet} is a vovel`)
        break
    case `i`:
        console.log(`${alphabet} is a vovel`)
        break
    case `o`:
        console.log(`${alphabet} is a vovel`)
        break
    case `u`:
        console.log(`${alphabet} is a vovel`)
        break
default :
console.log(`${alphabet} is not a vovel`)        
}