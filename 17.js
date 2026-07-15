const prompt = require('prompt-sync')(); 

let userCharacter = 'a'; 
let dummyChracter = 1; 
let dummyChracter1 = 'a'; 
checkCharactertype(userCharacter, dummyChracter, dummyChracter1); 


function checkCharactertype(character, dummyChracter, dummyChracter1){
    if(typeof character === typeof dummyChracter){
        console.log("The enterted character is a number");
    }else if(typeof character === typeof dummyChracter1){
        console.log("The enterted character is a string");
    }else{
        console.log("The enterted character is a special character");
    }
}