// Reduce and map are array methods in JavaScript and are used to process and transform array elements.
// The map() method applies the specified function to each element of the array and returns a new array containing the results of that function for each element.

// An example of using the map() method:


const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.map((number) => {
   return number * 2;
});

console.log(multipliedNumbers); // Output: [2, 4, 6, 8, 10]

// In this example, the function `(number) => { return number * 2; }` multiplies each element of the array by 2, and the returned new array `multipliedNumbers` contains the results of the multiplication.
// The reduce() method applies the specified function to the accumulator and each element of the array (from left to right) to convert the array to a single value.

// An example of using the reduce() method:


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
}, 0);

console log(sum); // Output: 15


// In this example, the function `(accumulator, currentValue) => { return accumulator + currentValue; }` adds all the elements of the array, starting with the accumulator with value 0, and the return value of `sum` is 15.
// So the map() method is used to transform each element of an array, and the reduce() method is used to transform an array into a single value.
