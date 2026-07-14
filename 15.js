const prompt = require('prompt-sync')(); 

let userYear = prompt("Enter a year to check if its a leap year: "); 

console.log(checkLeapYear(userYear)); 

function checkLeapYear(year){
    if(year%4==0){
        return true; 
    }else{
        return false; 
    }
}