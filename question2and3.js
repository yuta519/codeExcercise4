// Queston 3 → (ADVANCE)
// Write a function to check if there are duplicates in an array ?
//
// HINT - You have to use 2 for loops nested to solve this problem

let numList = [20, 40, -10, 5, 40, 5, 11]; //

const duplicatesArray = (array) => {
  // Write your logic here
  for (i = 0; array.length > i; i++) {
    for (j = i + 1; array.length > j; j++) {
      if (array[i] == array[j]) return true;
    }
  }
  return false;
}
console.log(duplicatesArray(numList)) // True
console.log(duplicatesArray([20, 40, -10, 5, 11])) // False
