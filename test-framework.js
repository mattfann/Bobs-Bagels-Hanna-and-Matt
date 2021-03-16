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

module.exports = AssertEquals
