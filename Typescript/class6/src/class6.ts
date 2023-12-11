/*Qtr-1 , 4th_week assignment
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
//- Write a program that calculates the percentage. 
//Simple method
let marksObt: number = 756
let totalMarks: number = 850
let percentage: number = Math.floor(marksObt / totalMarks * 100)
console.log(`Percentage Marks : ${percentage} %`)


//Function method
function calculatePercentage(num1: number, percent: number) {
    var percentage: number = num1 * percent / 100;
    console.log(`${percent}% of ${num1} is : ${percentage}%`);
}
calculatePercentage(1066, 20);


//Arrow method =>
let calculatePr: any = (num2: number, pr: number) => {
    var per: number = num2 * pr / 100;
    console.log(`${pr}% of ${num2} is : ${per}%`);
}
calculatePr(159, 25)



//- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount
//Simple method
let price = 900
let discount10 = price * 10 / 100
let discount5 = price * 5 / 100

if (price > 100) {

    console.log(`Price $${price} after 10% discount is : $${(price - discount10)} & Total Discount is $${discount10}`)

}
else {
    console.log(`Price $${price} after 5% discount is : $${(price - discount5)} & Total Discount is $${discount5}`)
}

//Function method

function calculateDiscount(num2: number, discount?: number) {
    if (num2 > 100) {
        discount = 10
    } else {
        discount = 5
    }
    var disc: number = num2 * discount / 100;
    console.log(`${discount}% Discount on $${num2} is : $${disc}`)
}
calculateDiscount(100)

//Arrow method
let dis_count: any = (num2: number, discount?: number) => {
    if (num2 > 100) {
        discount = 10
    } else {
        discount = 5
    }
    var disc: number = num2 * discount / 100;
    console.log(`${discount}% Discount on $${num2} is : $${disc}`)
}
calculateDiscount(50)

//SWITCH CASE / Function
function calculate_Discount(num2: number, discount?: number) {
    switch (true) {
        case (num2 > 100):
            discount = 10
            break
        default:
            discount = 5

            var disc: number = num2 * discount / 100;
            console.log(`${discount}% Discount on $${num2} is : $${disc}`)
    }
}
calculate_Discount(50)

//- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

//Simple method
let age_ = 10

if (age_ > 0 && age_ <= 12) {
    console.log(`Category : Child due to age is ${age_} Years`)
}
else if (age_ > 12 && age_ <= 19) {
    console.log(`Category : Teenager due to age is ${age_} Years`)

} else {
    console.log(`Category : Adult due to age is ${age_} Years`)
}

//Function method
function age(age: number) {
    if (age >= 0 && age < 13) {
        console.log(`You are a Child`)
    } else if (age >= 13 && age < 20) {
        console.log(`You are a Teenager`)
    } else {
        console.log(`You are an Adult`)
    }
} age(0)

//Arrow method
let a_ge: any = (age_: number) => {
    if (age_ >= 0 && age_ < 13) {
        console.log(`You are a Child`)
    } else if (age_ >= 13 && age_ < 20) {
        console.log(`You are a Teenager`)
    } else {
        console.log(`You are an Adult`)
    }
}
a_ge(14)

//In SWITCH CASE / Function

let _age: any = (age_: number) => {
    switch (true) {
        case age_ >= 0 && age_ < 13:
            console.log(`You are a Child`)
            break
        case (age_ >= 13 && age_ < 20):
            console.log(`You are a Teenager`)
            break
        default:
            console.log(`You are an Adult`)
    }
}
_age(1221)


//- Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
//Simple method

let temperature = 15
if (temperature < 10) {
    console.log(`Its Cold! outside, so wear Warm Cloths like Huddy or Warm Jacket & Gloves`)
} else if (temperature >= 10 && temperature < 20) {
    console.log(`Its Cool outside, so wear light Jacket & Sweater`)
} else if (temperature >= 20 && temperature < 30) {
    console.log(`Its Warm outside, so wear light & breathable cloths`)
} else {
    console.log(`Its Hot! outside, so wear cool & comfortable cloths`)
}


//Function method
function temperatureOutside(temperature: number) {
    if (temperature >= -46 && temperature <= 10) {
        console.log(`Its too Cold outside!I suggest wear heavy winter clothes, gloves, and a hat.`)
    } else if (temperature >= 11 && temperature <= 20) {
        console.log(`It's cold.I suggest wear a jacket or sweater.`)
    }
    else if (temperature >= 21 && temperature <= 30) {
        console.log(`It's cool.I suggest wear light jacket or a long-sleeve shirt`)
    } else {
        console.log(`It's warm.I suggest wear light and comfortable clothes.`)
    }
} temperatureOutside(41)

//Arrow method
let _temp: any = (temperature: number) => {
    if (temperature >= -46 && temperature <= 10) {
        console.log(`Its too Cold outside!I suggest wear heavy winter clothes, gloves, and a hat.`)
    } else if (temperature >= 11 && temperature <= 20) {
        console.log(`It's cold.I suggest wear a jacket or sweater.`)
    }
    else if (temperature >= 21 && temperature <= 30) {
        console.log(`It's cool.I suggest wear light jacket or a long-sleeve shirt`)
    } else {
        console.log(`It's warm.I suggest wear light and comfortable clothes.`)
    }
}
_temp(15)

//In SWITCH CASE / Function
function suggestClothing(temperature: number) {
    let suggestion: string;

    switch (true) {
        case temperature < 0:
            suggestion = "It's freezing! Wear heavy winter clothes.";
            break;
        case temperature >= 0 && temperature < 10:
            suggestion = "It's very cold. Wear a warm jacket.";
            break;
        case temperature >= 10 && temperature < 20:
            suggestion = "It's chilly. A light jacket or sweater should be enough.";
            break;
        case temperature >= 20 && temperature < 30:
            suggestion = "It's cool. A t-shirt and jeans should be fine.";
            break;
        case temperature >= 30:
            suggestion = "It's warm. Shorts and a t-shirt would be comfortable.";
            break;
        default:
            suggestion = "Unable to provide a suggestion.";
            break;
    }

    console.log(suggestion);
}


suggestClothing(-10);


//- Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
//Simple method
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

//Function method
function number(_digit: number) {
    if (_digit % 3 == 0 && _digit % 5 == 0) {
        console.log(`Digit ${_digit} is divisible by both 3 & 5`)
    } else if (_digit % 3 == 0) {
        console.log(`Digit ${_digit} is divisible by 3`)
    } else if (_digit % 5 == 0) {
        console.log(`Digit ${_digit} is divisible by 5`)
    } else {
        console.log(`Digit ${_digit} is not divisible by 3 nor 5`)
    }
    return
}

number(5)

//Arrow method
let number_: any = (_digit: number) => {
    if (_digit % 3 == 0 && _digit % 5 == 0) {
        console.log(`Digit ${_digit} is divisible by both 3 & 5`)
    } else if (_digit % 3 == 0) {
        console.log(`Digit ${_digit} is divisible by 3`)
    } else if (_digit % 5 == 0) {
        console.log(`Digit ${_digit} is divisible by 5`)
    } else {
        console.log(`Digit ${_digit} is not divisible by 3 nor 5`)
    }

}
number_(60)

//SWITCH CASE / Function
function num_ber(_digit: number) {
    switch (true) {
        case (_digit % 3 == 0 && _digit % 5 == 0):
            console.log(`Digit ${_digit} is divisible by both 3 & 5`)
            break
        case (_digit % 3 == 0):
            console.log(`Digit ${_digit} is divisible by 3`)
            break
        case (_digit % 5 == 0):
            console.log(`Digit ${_digit} is divisible by 5`)
            break
        default:
            console.log(`Digit ${_digit} is not divisible by 3 nor 5`)
    }
}
num_ber(50)

//- Write a program that checks if the given year is leap year or not.

//simple method
let year = 1904
if (year % 4 == 0 && year % 100 != 0) {
    console.log(`${year} is a Leap Year`)
} else if (year % 400 == 0) {
    console.log(`${year} is a Century Leap Year`)
} else {
    console.log(`${year} is not a Leap Year`)
}


//function method
function leapYear(_year: number): void {
    switch (true) {
        case _year % 4 === 0 && _year % 100 !== 0:
            console.log(`${_year} is a Leap Year`)
            break
        case _year % 400 === 0:
            console.log(`${_year} is a Century Leap Year`)
            break
        default:
            console.log(`${_year} is not a Leap Year`)
    }
}
leapYear(1904)

//arrow method
const leap_Year = (_year: number) => {
    switch (true) {
        case _year % 4 === 0 && _year % 100 !== 0:
            console.log(`${_year} is a Leap Year`)
            break
        case _year % 400 === 0:
            console.log(`${_year} is a Century Leap Year`)
            break
        default:
            console.log(`${_year} is not a Leap Year`)
    }
}
leap_Year(1904)

//Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

//somple method
let day = 4
if (day >= 1 || day <= 7) {
    if (day === 1) {
        console.log(`The 1st Day of the Week is Sunday`)
    } else if (day === 2) {
        console.log(`The 2nd Day of the Week is Monday`)
    } else if (day === 3) {
        console.log(`The 3rd Day of the Week is Tuesday`)
    } else if (day === 4) {
        console.log(`The 4th Day of the Week is Wednesday`)
    } else if (day === 5) {
        console.log(`The 5th Day of the Week is Thursday`)
    } else if (day === 6) {
        console.log(`The 6th Day of the Week is Friday`)
    } else if (day === 7) {
        console.log(`The Last Day of the Week is Saturday`)
    }
    else { console.log(`"Invalid Numder is selected" Please select number between 1 to 7`) }
}

//function/switch case method
function weekDay(_day: number) {
    if (day >= 1 || day <= 7)
        switch (true) {
            case _day === 1:
                console.log(`The 1st Day of the Week is Sunday`)
                break
            case _day === 2:
                console.log(`The 2nd Day of the Week is Monday`)
                break
            case _day === 3:
                console.log(`The 3rd Day of the Week is Tuesday`)
                break
            case _day === 4:
                console.log(`The 4th Day of the Week is Wednesday`)
                break
            case _day === 5:
                console.log(`The 5th Day of the Week is Thursday`)
                break
            case _day === 6:
                console.log(`The 6th Day of the Week is Friday`)
                break
            default:
                console.log(`The Last Day of the Week is Saturday`)
                break
        }
    else {
        console.log(`"Invalid Numder is selected" Please select number between 1 to 7`)
    }
    return
}
weekDay(4)

//arrow // switch case
let week_Day = (_day: number) => {
    if (day >= 1 || day <= 7)
        switch (true) {
            case _day === 1:
                console.log(`The 1st Day of the Week is Sunday`)
                break
            case _day === 2:
                console.log(`The 2nd Day of the Week is Monday`)
                break
            case _day === 3:
                console.log(`The 3rd Day of the Week is Tuesday`)
                break
            case _day === 4:
                console.log(`The 4th Day of the Week is Wednesday`)
                break
            case _day === 5:
                console.log(`The 5th Day of the Week is Thursday`)
                break
            case _day === 6:
                console.log(`The 6th Day of the Week is Friday`)
                break
            default:
                console.log(`The Last Day of the Week is Saturday`)
                break
        }
    else {
        console.log(`"Invalid Numder is selected" Please select number between 1 to 7`)
    }
    return
}
week_Day(4)

//Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.

//simple method
let units = 456
let unitPrice = 50
let bill = units * unitPrice
if (units < 100) {
    console.log(`No Tax is applicable as units ${units} are less than 100 & Bill amount is = ${bill}`)
}
else if (units >= 100 && units < 200) {
    console.log(`10% Tax is applicable on units ${units} & Bill amount is ${(bill + (bill * 10 / 100))}`);
}
else if (units >= 200 && units <= 500) {
    console.log(`15% Tax is applicable on units ${units} & Bill amount is ${(bill + (bill * 15 / 100))}`);
}
else {
    console.log(`25% Tax is applicable on units ${units} & Bill amount is ${(bill + (bill * 25 / 100))}`);
}

//function//switch method
function b_unit(_unit: number) {
    let _bill = _unit * unitPrice
    switch (true) {
        case _unit < 100:
            console.log(`No Tax is applicable as units ${_unit} are less than 100 & Bill amount is = ${_bill}`)
            break
        case units >= 100 && units < 200:
            console.log(`10% Tax is applicable on units ${_unit} & Bill amount is ${(_bill + (_bill * 10 / 100))}`)
            break
        case units >= 200 && units <= 500:
            console.log(`15% Tax is applicable on units ${_unit} & Bill amount is ${(_bill + (_bill * 15 / 100))}`)
            break
        default:
            console.log(`25% Tax is applicable on units ${_unit} & Bill amount is ${(_bill + (_bill * 25 / 100))}`)
    }
    return
}
b_unit(456)

//arrow / switch case
let b_unit_ = (_unit: number) => {
    let _bill = _unit * unitPrice
    switch (true) {
        case _unit < 100:
            console.log(`No Tax is applicable as units ${_unit} are less than 100 & Bill amount is = ${_bill}`)
            break
        case units >= 100 && units < 200:
            console.log(`10% Tax is applicable on units ${_unit} & Bill amount is ${(_bill + (_bill * 10 / 100))}`)
            break
        case units >= 200 && units <= 500:
            console.log(`15% Tax is applicable on units ${_unit} & Bill amount is ${(_bill + (_bill * 15 / 100))}`)
            break
        default:
            console.log(`25% Tax is applicable on units ${_unit} & Bill amount is ${(_bill + (_bill * 25 / 100))}`)
    }
    return
}
b_unit_(456)

//arrow switch 2nd approach
let calculateBill = (_unit: number): string => {
    let unitPrice = 50; // Replace this with your actual unit price
    let _bill = _unit * unitPrice;
    let taxRate = 0;

    switch (true) {
        case _unit < 100:
            break;
        case _unit < 200:
            taxRate = 0.1;
            break;
        case _unit <= 500:
            taxRate = 0.15;
            break;
        default:
            taxRate = 0.25;
            break;
    }

    let totalBill = _bill + (_bill * taxRate);

    if (taxRate === 0) {
        return `No Tax is applicable as units ${_unit} are less than 100 & Bill amount is = ${_bill}`;
    } else {
        return `${(taxRate * 100)}% Tax is applicable on units ${_unit} & Bill amount is ${totalBill}`;
    }
}

let result = calculateBill(456);
console.log(result);
