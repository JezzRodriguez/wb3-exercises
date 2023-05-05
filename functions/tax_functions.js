"use strict"
function getSocSecTax(grossPay) {
    let taxRate = grossPay * 0.065
    return taxRate
}

function getMedicareTax(grossPay) {
    let taxRate = grossPay * 0.0145
    return taxRate
}

function getFederalTax(grossPay, withholdingCode) {
    if (withholdingCode === 0) {
        var taxRate = grossPay * .23
        console.log('Your tax is 23%');
    }
    else if (withholdingCode === 1) {
        taxRate = grossPay * .21
        console.log('Your tax is 21%');
    }
    else if (withholdingCode === 2) {
        taxRate = grossPay * 0.195
        console.log('Your tax is 19.5%');
    }
    else if (withholdingCode === 3) {
        taxRate = grossPay * .185
        console.log('Your tax is 18.5%');
    }
    else if (withholdingCode === 4) {
        taxRate = grossPay * .18
        console.log('Your tax is 18%');
    }
    else {
       let rate = withholdingCode - 4
       taxRate = grossPay * (.18 - (rate * .005))
       taxRate = taxRate.toFixed(2)
    }
    return taxRate
}  