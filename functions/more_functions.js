"use strict"
// Exercise 1 page 1-12
function displayMailingLabel(name, address, city, state, zip) {
   console.log('Address:');
    console.log(name)
    console.log(address)
    console.log(city + ", " + state )
    console.log(zip)

}

function addNumbers(num1, num2) {
    let result = num1 + num2
    console.log(`${num1}+${num2}=${result}`)
}

function displayReciept(totalDue, amountPaid) {
    let change = totalDue - amountPaid
    let overPay = amountPaid - totalDue
    if (amountPaid < totalDue) {
        console.log("You need to pay the remaining balance of: $" + change.toFixed(2))
    }
    else if (amountPaid > totalDue) {
        console.log("You have paid an additional: $" + overPay);
    }
    else {
        console.log("Total due: $" + totalDue);
        console.log("Amount paid: $" + amountPaid);
        console.log('Change due: $' + change);
    }

}