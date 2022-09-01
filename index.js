const my_math = require('./my_math')
const os = require('os')

const currentOs = os.platform()

console.log(currentOs)

const res1 = my_math.add(50, 50)
const res2 = my_math.minus(38, 1)

console.log(`Result 1 : ${res1}`)
console.log(`Result 2 : ${res2}`)