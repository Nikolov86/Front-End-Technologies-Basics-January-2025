function rotateLeft(arr, steps) {
  steps = steps % arr.length; // Handle cases where steps > arr.length
  let newArr = arr.slice(steps).concat(arr.slice(0, steps));
  return newArr; // Return the rotated array
}

let result = rotateLeft([51, 47, 32, 61, 21], 2); // Call the function
console.log(result); // Log the result
