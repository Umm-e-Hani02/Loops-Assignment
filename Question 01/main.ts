// 1. Creating a Lesson Plan(Using for loop )

// Creating an empty aray to store lesson objects
let myWork: {name: string, status: boolean}[] = []

// Iterate from 1 to 10 using a for loop
for(let i = 1; i <= 10; i++){
    // Create a lesson object with name and status properties
    let lesson = {
        name: `Lesson${i}`,
        status: (i % 2 === 0) ? true:false
    };
    // Push the lesson object into myWork array
    myWork.push(lesson);
}
// Output
console.log(myWork);