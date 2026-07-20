const prompt = require('prompt-sync')(); 

let userNumber = prompt("Enter the number you want to print till: "); 

let result = console.log(naturalNumbers(userNumber)); 


function naturalNumbers(userNumber){
    for(let i = 1; i <= userNumber; i++){
        console.log(i) 
    }
}