class AssertEqualsForArray{
    constructor(){
        
    }
  funct1(input1,input2){
    if(input1.length !== input2.length){
        return false
    }
    else{
    for (let i=0; i<input1.length; i++){
    if (input1[i] === input2[i]){
        return true
    }
    else {
        return false
    }
    }
    }
    }
}

module.exports = AssertEqualsForArray

console.log('3d - Does Airport stop any attempt to take off a Plane not landed at Airport?')
//Setup
let expectedOutput3d = 'No such plane as Spitfire at Heathrow'
//Execute
let actualOutput3d = heathrow.takeOffPlane(spitfire)
//Validate
let result3d = testFramework.test(expectedOutput3d,actualOutput3d)
console.log(result3d)

console.log('3e - Does ')