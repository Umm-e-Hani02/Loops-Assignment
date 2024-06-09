// 4.Exploring Objects with for...in Loop
// Define an object with three properties
var myObjects = {
    item1: "Watch",
    item2: "Glasses",
    item3: "Bag"
};
// Iterate each property of the object using a for..in loop
for (var items in myObjects) {
    // Output the property name and its value
    console.log("".concat(items, ": ").concat(myObjects[items]));
}
