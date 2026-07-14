// This is Level 2 

const prompt = require('prompt-sync')(); 

let userNumber = prompt("Enter your number: "); 

if(hasEven(userNumber) == true){
    console.log("The entered number is an even number.")
}else{
    console.log("It is an odd number."); 
}

function hasEven(number){
    if(number%2==0){
        return true; 
    }else{
        return false; 
    }
}



