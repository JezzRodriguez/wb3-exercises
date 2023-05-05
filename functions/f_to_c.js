"use strict"

function convertFtoC(currentTemp) {
    let temp = (currentTemp - 32) * (5 / 9)
    return Math.round(temp);
}

let celsius = convertFtoC(212);
console.log(celsius)

// celsius = convertFtoC(90);
// console.log(celsius)

// celsius = convertFtoC(72);
// console.log(celsius)

// celsius = convertFtoC(32);
// console.log(celsius)

// celsius = convertFtoC(0);
// console.log(celsius)

// celsius = convertFtoC(-40);
// console.log(celsius)

function convertCtoF(currentTemp){
    let temp = currentTemp * (9/5) +32
    return Math.round(temp);
}
let fahrenheit = convertCtoF() 