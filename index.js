const CC = require('currency-converter-lt')

let currencyConverterFromUSDToEUR = new CC({ from: "USD", to: "EUR", amount: 100 })

currencyConverterFromUSDToEUR.convert().then((res) => {
    console.log(`Result:${res}`)
})