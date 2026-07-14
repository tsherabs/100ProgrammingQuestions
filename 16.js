const prompt = require('prompt-sync')(); 



let userInput = prompt("Enter any letter: ");
let isVowel = ['a', 'e', 'i', 'o', 'u']; 

console.log(checkVowel(userInput)); 

function checkVowel(userInput){
    for(let vowel of isVowel){
        if(userInput == vowel){
            return "The letter is a vowel."; 
        }else if(userInput !== vowel){
            return "The letter is a consonant."
        }
    }
}