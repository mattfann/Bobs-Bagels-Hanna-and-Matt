AssertEquals = require('./test-framework.js')
let testFramework = new AssertEquals()

AssertEqualsForArray = require('./test-framework-for-array.js')
let testFrameworkForArray = new AssertEqualsForArray()

SourceCode = require('./sourcecode.js')

// 1. Set up
let basket = new SourceCode()
basket._capacity = 3
let expectedOutput = 3
// 2. Execute
let actualOutput = basket._capacity
// 3. Verify
let result = testFramework.funct1(actualOutput,expectedOutput)
console.log(result)


//1. Setup
let basket1 = new SourceCode()
basket1._capacity = 3
basket1.addToBasket('NewYork')
basket1.addToBasket('London')
basket1.addToBasket('Salty')
let expectedOutput1 = 'Basket is full!'
//2. Execute
let actualOutput1 = basket1.addToBasket('Sweet')
//3. Verify
let result1 = testFramework.funct1(actualOutput1,expectedOutput1)
console.log(result1)

basket1.addToBasket('Sweet')
let expectedOutput1a = ['NewYork','London','Salty']
let actualOutput1a = basket1._basket
let result1a = testFrameworkForArray.funct1(actualOutput1a,expectedOutput1a)
console.log(result1a)


//1. Setup
let basket2 = new SourceCode()
basket2._capacity = 4
basket2.addToBasket('NewYork')
basket2.addToBasket('London')
basket2.addToBasket('Salty')
let expectedOutput2 = 'Basket is not full!'
//2. Execute
let actualOutput2 = basket2.enlargeBasketCapacity()
//3. Verify
let result2 = testFramework.funct1(actualOutput2,expectedOutput2)
console.log(result2)

basket2.addToBasket('Sweet')
let expectedOutput2a = 'Capacity Doubled'
let actualOutput2a = basket2.enlargeBasketCapacity()
let result2a = testFramework.funct1(actualOutput2a,expectedOutput2a)
console.log(result2a)

let expectedOutput2b = 8
let actualOutput2b = basket2._capacity
let result2b = testFramework.funct1(actualOutput2b,expectedOutput2b)
console.log(result2b)


let basket3 = new SourceCode()
basket3._capacity = 4
basket3.addToBasket('NewYork')
basket3.addToBasket('London')
basket3.addToBasket('Salty')
let expectedOutput3 = 'Bagel Type Not In Basket'
//2. Execute
let actualOutput3 = basket3.removeFromBasket('Swiss')
//3. Verify
let result3 = testFramework.funct1(actualOutput3,expectedOutput3)
console.log(result3)

let expectedOutput3a = 'Bagel already in basket 1 time(s). Bagel added again so now in basket 2 times?'
actualOutput3a = basket3.addToBasket('NewYork')
let result3a = testFramework.funct1(actualOutput3a,expectedOutput3a)
console.log(result3a)

