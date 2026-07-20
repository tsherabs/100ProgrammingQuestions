const prompt = require('prompt-sync')(); 

let checkMarks = prompt("Enter your a marks: "); 

let result = finalGrade(checkMarks); 

function finalGrade(marks){
    if(marks == 100){
        console.log("Grade S"); 
    }else if(marks >= 90){
        console.log("Grade A"); 
    }else if(marks >= 70){
        console.log("Grade B"); 
    }else if(marks >= 60){
        console.log("Grade C"); 
    }else if(marks >= 40){
        console.log("Grade D"); 
    }else{
        console.log("Grade F"); 
    }
}