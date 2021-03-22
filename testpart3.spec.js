AssertEquals = require('./test-framework.js')
let testFramework = new AssertEquals()

AssertEqualsForArray = require('./test-framework-for-array.js')
let testFrameworkForArray = new AssertEqualsForArray()

SourceCode = require('./sourcecode.js')

console.log('Calling a bagel price from object')
//setup
let basket1 = new SourceCode()
let expectedOutput1 = 2.49
// execute
let actualOutput1 = basket1._priceList['NewYork']
//validate
let result1 = testFramework.funct1(expectedOutput1,actualOutput1)
console.log(result1)

console.log('Check singlePrice gives us a price')
//setup
let basket2 = new SourceCode()
let expectedOutput2 = 2.49
//execute
let actualOutput2 = basket2.singlePrice('NewYork')
//validate
let result2 = testFramework.funct1(expectedOutput2,actualOutput2)
console.log(result2)

console.log('Check totalPriceOfBasket gives us full price')
//setup
let basket3 = new SourceCode()
basket3.addToBasket('NewYork')
basket3.addToBasket('London')
basket3.addToBasket('Paris')
let expectedOutput3 = 7.49
//execute
let actualOutput3 = basket3.totalPriceOfBasket()
//validate
let result3 = testFramework.funct1(expectedOutput3,actualOutput3)
console.log(result3)

