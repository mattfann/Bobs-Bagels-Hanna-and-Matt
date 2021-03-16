AssertEquals = require('./test-framework.js')
let testFramework = new AssertEquals()

SourceCode = require('./sourcecode.js')
let basket = new SourceCode()

// 1. Set up
basket.addToBasket('NewYork')
basket.addToBasket('London')
let expectedOutput = ['NewYork','London']
// 2. Execute
let actualOutput = basket.basketList()
// 3. Verify
let result = testFramework.funct1(actualOutput,expectedOutput)
console.log(result)

//1. Set up
let basket1 = new SourceCode()
basket1.addToBasket('NewYork')
basket1.addToBasket('London') // basketList['NewYork','London']
basket1.removeFromBasket('NewYork') // basketList
let expectedOutput1 = ['London']
//2. Execute
let actualOutput1 = basket1.basketList() 
//3. Verify
let result1 = testFramework.funct1(actualOutput1, expectedOutput1)
console.log(result1)