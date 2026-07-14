const prompt = require('prompt-sync')(); 

let number = prompt("Enter your number: "); 


if(number<0){
    console.log("You number is negative"); 
}else if(number > 1){
    console.log("Your number is positive"); 
}else{
    console.log("Your number is eqaul to 0")
}
