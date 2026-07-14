const prompt = require('prompt-sync')(); 

let seconds = prompt("Enter any number (sec): "); 
console.log("You have entered " + seconds + " seconds."); 

timeConversion(seconds); 

function timeConversion(sec){
    let min = sec/60; 
    let hours = sec/3600; 

    console.log("Your time in min is "+ min + " and in hours is " + hours); 
}