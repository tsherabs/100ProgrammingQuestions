const prompt = require('prompt-sync')(); 

let userAge = prompt("Enter your age: "); 

let eligibility = console.log(checkAge(userAge)); 

function checkAge(age){
    if(age>=18){
        return "You are eligible to vote."; 
    }else{
        return "You are not eligible"; 
    }
}