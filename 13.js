const prompt = require('prompt-sync')(); 

numbers = []; 

numbers.push(parseInt(prompt("Enter your first number: "))); 
numbers.push(parseInt(prompt("Enter your second number: "))); 
numbers.push(parseInt(prompt("Enter your last number: "))); 

isLarger(numbers[0], numbers[1], numbers[2]); 

function isLarger(num1, num2, num3){
    if(num1>num2){
        if(num1>num3){
            console.log(num1 + " is the greatest among the three."); 
        }
    }else if(num1 < num2){
        if(num2 > num3){
            console.log(num2 + " is the greatest among the three."); 
        }else{
        console.log(num3 + " is the greatest.")
    }
    }
}