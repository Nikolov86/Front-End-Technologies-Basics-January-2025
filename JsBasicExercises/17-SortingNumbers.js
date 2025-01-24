function sortArraySpecial(arr) {
  arr.sort((a, b) => a - b);
  let result = [];

  while (arr.length > 0) {
    result.push(arr.shift()); // small

    if (arr.length > 0) {
      result.push(arr.pop()); // big
    }
  }

  return result;
}
let array = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
let sortedArray = sortArraySpecial(array);
console.log(sortedArray);
