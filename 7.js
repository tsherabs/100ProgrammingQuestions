let a = [100]; 
let b = [52]; 


const before = console.log("Before Swapping: "+ a[0], b[0])
const result = console.log("After Swapping: " + SwapWithout(a[0], b[0]));
function SwapWithout(num1, num2){
    num1 += num2; 
    num2 = num1 - num2; 
    num1 -= num2; 
    return [num1, num2]; 
}