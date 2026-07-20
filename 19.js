const prompt = require('prompt-sync')(); 

let number = prompt("Enter you number: "); 

let result = console.log(checkDivisbility(number));


function checkDivisbility(number){
    if(number%3==0 || number%5==0){
        return "Your number is divisible 3 or 5"
    }else{
        return "Not divisible"
    }
}