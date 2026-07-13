let Cel = 43; 


let toFarenheit = console.log("Conversion from " + Cel + " Degree Celsius to Farenheit is: " + farenheit(Cel)); 

function farenheit(Cel){
    const conversion = (Cel * (9/5)) + 32; 
    return conversion
}