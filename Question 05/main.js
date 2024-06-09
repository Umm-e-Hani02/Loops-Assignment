// 5.Exploring Arrays with Loops (Using loop)
// Make an empty array to story numbers
var myArray = [];
// Fill the array with numbers using for..loop
for (var x = 1; x <= 10; x++) {
    // Adding currrent value of x to the array
    myArray.push(x);
}
// Output the entire array 
console.log(myArray);
// Loop through the array using for loop based on its length
for (var x = 0; x < myArray.length; x++) {
    // Output the index and value of each number in the array
    console.log("Index ".concat(x, ": ").concat(myArray[x]));
}
// Loop through the array using a for..of loop
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var number = myArray_1[_i];
    // Output the entire array to the console
    console.log(myArray);
}
