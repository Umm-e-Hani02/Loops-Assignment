// 5.Exploring Arrays with Loops (Using loop)

// Make an empty array to story numbers
let myArray: number[] = []
// Fill the array with numbers using for..loop
for(let x = 1; x<= 10; x++){
    // Adding currrent value of x to the array
    myArray.push(x)
}
// Output the entire array 
console.log(myArray);

// Loop through the array using for loop based on its length
for (let x = 0; x < myArray.length; x++){
    // Output the index and value of each number in the array
    console.log(`Index ${x}: ${myArray[x]}`);   
}

// Loop through the array using a for..of loop
for(let number of myArray){
    // Output the entire array to the console
    console.log(myArray);
}
