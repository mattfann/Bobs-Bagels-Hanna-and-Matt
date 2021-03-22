AssertEquals = require('./test-framework.js')
let testFramework = new AssertEquals()

AssertEqualsForArray = require('./test-framework-for-array.js')
let testFrameworkForArray = new AssertEqualsForArray()

SourceCode = require('../sourcecode.js')


// 1. Set up
let basket = new SourceCode()
basket.addToBasket('NewYork')
basket.addToBasket('London')
let expectedOutput = ['NewYork','London']
// 2. Execute
let actualOutput = basket._basket
// 3. Verify
let result = testFrameworkForArray.funct1(actualOutput,expectedOutput)
console.log(result)

//1. Set up
let basket1 = new SourceCode()
basket1.addToBasket('NewYork')
basket1.addToBasket('London') // basketList['NewYork','London']
basket1.removeFromBasket('NewYork') // basketList
let expectedOutput1 = ['London']
//2. Execute
let actualOutput1 = basket1._basket 
//3. Verify
let result1 = testFrameworkForArray.funct1(actualOutput1, expectedOutput1)
console.log(result1)


