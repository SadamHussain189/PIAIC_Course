"use strict";
// If, Else, Else if statement
Object.defineProperty(exports, "__esModule", { value: true });
let marks = 23;
// console.log("Pass");
// console.log("Fail");
if (marks > 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
// put tsc -w for watch mode of tsc
// compiler, interpreter, transpiler
// tsc transpiler change code in to javascript
// node change our javascript in to computer language
// compiler convert whole
let marks1 = 80;
if (marks1 >= 80) {
    console.log("A+ Grade");
}
else if (marks1 >= 70 && marks1 < 80) {
    console.log("A Grade");
}
else if (marks1 >= 60 && marks1 < 70) {
    console.log("B Grade");
}
else {
    console.log("Fail");
}
let num = 99;
if (num % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
// Example usage
const inputChar = 'z';
const lowercaseChar = inputChar.toLowerCase();
if (lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u') {
    console.log(`${inputChar} is a vowel.`);
}
else {
    console.log(`${inputChar} is not a vowel.`);
}
let inputChar1 = 'a';
// const lowercaseChar = inputChar.toLowerCase();
if (inputChar1 === 'a' || inputChar1 === 'e' || inputChar1 === 'i' || inputChar1 === 'o' || inputChar1 === 'u') {
    console.log(`${inputChar1} is a vowel.`);
}
else if (inputChar1 === 'A' || inputChar1 === 'E' || inputChar1 === 'I' || inputChar1 === 'O' || inputChar1 === 'U') {
    console.log(`${inputChar1} is a vowel.`);
}
else {
    console.log(`${inputChar1} is not a vowel.`);
}
// WHAT IS SWITCH IN PROGRAMING
// condition (L.H.S == R.H.S) true // false
// if (){
// 
// }
// else{
// 
// }      else optional and depend on if
//  for multiple condition
// if (){
// 
// }
// else if(){
// 
// }     
// else if(){
// }
// else{
// }
// Nested statement
let inputChar2 = 'a';
// const lowercaseChar = inputChar.toLowerCase();
if (inputChar2 === 'a' || inputChar2 === 'e' || inputChar2 === 'i' || inputChar2 === 'o' || inputChar2 === 'u') {
    console.log(`${inputChar1} is a vowel.`);
    if (inputChar1 === 'A' || inputChar1 === 'E' || inputChar1 === 'I' || inputChar1 === 'O' || inputChar1 === 'U') {
        console.log(`${inputChar1} is a vowel.`);
    }
}
else {
    console.log(`${inputChar1} is not a vowel.`);
}
// NESTED IF ELSE
// if(country == "Pakistan"){
//     console.log('print')
//     if(){
//         ""
//     }
// }
// else{
//     console.log("else")
// }
let age = 13;
let name_person = "sadam";
let country = "Pakistan";
if (age > 19) {
    console.log("Adult");
    if (country == "Pakistan") {
        console.log(`Hello ${name_person}, you are from Pakistan`);
    }
    else {
        console.log(`Hello ${name_person}`);
    }
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Child");
}
// FUNCTION
// name function
// arrow function (latest syntax) (ES6 Feature)
// name function
// function functionName(){
// function body
// }
// call function
// functionName()
// pass value to function is called parameter
function drawcircle() {
    console.log("Function Body");
}
// call the function
drawcircle();
// FUNCTION PARAMETERS
function drawcircle2(fName) {
    console.log("Function Body", fName);
}
// call the function
drawcircle2("Sadam");
// CALCULATOR
function sum(num1, num2) {
    console.log(num1 + num2);
}
function multiply(num1, num2) {
    console.log(num1 * num2);
}
function divide(num1, num2) {
    console.log(num1 / num2);
}
function subtract(num1, num2) {
    console.log(num1 - num2);
}
multiply(2, 3);
// Assignment
// return type in function 
// switch in programming
