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

