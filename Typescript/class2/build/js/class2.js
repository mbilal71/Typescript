"use strict";
//Qtr-1 , 3rd_week assignment
//Q:1.AGE
let yob = 2009;
let cyear = 2023;
console.log(`My age is :`, cyear - yob, `Years`);
//Q:2.AREA OF RECTANGLE.
let _width = 10;
let _length = 20;
let _area = _width * _length;
console.log(`Area of a Rectangle is :`, _area, `sqft`);
//Q:3.AREA OF CIRCLE.
let _radius = 5;
console.log(`Area of CIRCLE :`, Math.floor(Math.PI * _radius ** 2));
//Q:4.AREA OF CUBE.
let $length = 2;
let $area = $length * 2 * 6;
let $volume = $length ** 3;
console.log(`Area of CUBE is :`, $area, `cubicft`);
console.log(`Volume of CUBE is : `, $volume, `sqft`);
// Convert Fahrenheit to Celsius
let fahrenheit = 100; // Replace 1 with the Fahrenheit temperature you want to convert
let celsius = Math.floor((5 / 9) * (fahrenheit - 32));
console.log(`Fahrenheit:`, fahrenheit);
console.log(`Celsius:`, celsius);
// Convert Celsius to Fahrenheit
let _celsius = 37.23; // Replace 1 with the Celsius temperature you want to convert
let _fahrenheit = (_celsius * 9 / 5) + 32;
console.log(`Celsius:`, _celsius);
console.log(`Fahrenheit:`, _fahrenheit);
//Q6:CONVERT SEC INTO MIN.
let sec = 100;
let sec_rem = sec % 60;
let min = Math.floor(sec - sec_rem) / 60;
console.log(`SECOND :`, sec);
console.log(`MINUTES : ${min}, & SECONDS : ${sec_rem}`);
//Q6:CONVERT MIN INTO SEC.
let _min = 5;
let _sec = _min * 60;
console.log(`MINUTES :`, _min);
console.log(`SECOND :`, _sec);
//Q:7.CACULATE PERCENTAGE.
let a = 50;
let b = 10;
let per = a * b / 100;
console.log(`10% of 50 is :`, per);
//Q:8.CONVERT DAYS INTO WEEK&DAYS.
let days = 80;
let rem = days % 7;
let week = (days - rem) / 7;
console.log(days, `Days = `, week, `week & `, rem, `days`);
//INCREMENT / DECREMENT.
//Q:9/1.
let _a = 2;
let y = ++_a * 3;
console.log(`Q:9/1 - Value of y : ++a * 3,(where a=2) = (3*3) =`, y);
//Q:9/2.
let x = 5;
let _y = x-- + 2;
console.log(`Q:9/2 - Value of y : x-- + 2,(where x=5) = (5+2) =`, _y);
//Q:9/3.
let _x = 3;
let $y = ++_x + _x++ + ++_x;
console.log(`Q:9/3 - Value of y : ++_x + _x++ + ++_x,(where x=3) = (4+4+6) =`, $y);
//Q:9/4.
let m = 2;
let n3 = ++m * m++ * --m;
console.log(`Q:9/4 - Value of n : ++m * m++ * --m,(where m=2) = (3*3*3) =`, n3);
//Q:9/5.
let $a = 3;
let $b = 5;
let result = ++$a + $b-- - $a++ + --$b;
console.log(`Q:9/5 - Value of result : ++a + b-- - a++ + --b,(where a=3 & b=5) = (4+5-4+3) =`, result);
//Q:9/6.
let p = 2;
let q = 4;
let r = p++ + ++q - --p + q--;
console.log(`Q:9/6 - Value of r : p++ + ++q - --p + q--,(where p=2 & q=4) = (2+5-2+5) =`, r);
//Q:9/7.
let f = 5;
let g = 3;
let h = 2;
let i = 7;
let calculate = ++f * (g-- + h) / --i;
console.log(`Q:9/7 - Result of Calculate : ++f * (g-- + h) / --i,(where f=5, g=3, h=2 & i=7) = (6*(3+2)/6) =`, calculate);
//Q:9/8.
let j = 2;
let k = 3;
let l = 4;
let ans = j++ * (--k + j) / (l-- - k);
console.log(`Q:9/8 - ans is : j++ * (--k + j) / (l-- - 3),(where j=2, k=3 & ;l=4) = (2*(2+3)/(4-2) =`, ans);
let answer8 = 2 * (2 + 3) / (4 - 2);
let answer7 = 6 * (3 + 2) / 6;
let answer6 = 2 + 5 - 2 + 5;
let answer5 = 4 + 5 - 4 + 3;
let answer4 = 3 * 3 * 3;
let answer3 = 4 + 4 + 6;
let answer2 = 5 + 2;
let answer1 = 3 * 3;
console.log(`Q1 ${y} = ${answer1}`);
console.log(`Q2 ${_y} = ${answer2}`);
console.log(`Q3 ${$y} = ${answer3}`);
console.log(`Q4 ${n3} = ${answer4}`);
console.log(`Q5 ${result} = ${answer5}`);
console.log(`Q6 ${r} = ${answer6}`);
console.log(`Q7 ${calculate} = ${answer7}`);
console.log(`Q8 ${ans} = ${answer8}`);
