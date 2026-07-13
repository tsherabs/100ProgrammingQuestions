let num1 = [5]; 
let num2 = [6]; 


console.log("Before Swapping: " + num1[0], num2[0] )


function swapnumber(num1, num2){
    let temp = num1; 
    num1 = num2; 
    num2 = temp;
    return [num1, num2];
}


let Swap = swapnumber(num1[0], num2[0]); 
console.log(Swap)