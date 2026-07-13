const subjects = [
    {
        subject: "English", 
        marks: 50
    }, 
    {
        subject: "Dzongkha", 
        marks: 60
    }, 
    {
        subject: "Maths", 
        marks: 70 
    }, 
    {
        subject: "Advanced Routing", 
        marks: 80
    }, 
    {
        subject: "Computational Maths", 
        marks: 60
    }
]
let total = 0; 


function totalFunc(){
    /*for(let i = 0; i < subjects.length; i++){
        total += subjects[i].marks;
    }   Using simple for loop and for of loop as well. 
    console.log("The total marks of 5 subjects are: " + total); 

    syntax for(variable of iterable (could he an arrya or a string, object))
*/ 
    for(let subject of subjects){
        total += subject.marks; 
    }
    let average = total/subjects.length; 
    console.log("The total marks of the subjects are: " + total);
    console.log("The average of the 5 subjects are: " + average); 
}

totalFunc();