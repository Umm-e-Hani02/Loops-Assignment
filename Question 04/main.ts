// 4.Exploring Objects with for...in Loop

// Define an object with three properties
let myObjects = {
    item1: "Watch",
    item2: "Glasses",
    item3: "Bag"
}
// Iterate each property of the object using a for..in loop
for(let items in myObjects){
    // Output the property name and its value
    console.log(`${items}: ${myObjects[items]}`);
}
