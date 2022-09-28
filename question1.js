// Question 1 —&gt; (ADVANCE)
// Write a function that checks if an array is sorted ?
// Let numList = [1,2,3,4,5,6];
// Sorted array means the value starting —&gt; End , it should be either increasing
// Or decreasing
// [ 1 , 2, 5, 6, 11, 20 ] // Ascending
// [ 10 , 11, 20 , 5, 4, 20]

const sortedList = (array) => {
  // Write your logic here, // HINT: FOR LOOP
  const isAsc = array[1] > array[0]
  for (i = 0; array.length > i; i++) {
    if (isAsc && array[i - 1] >= array[i]) return false;
    if (!isAsc && array[i] > array[i - 1]) return false;
  }
  return true;
}

console.log(sortedList([50, 10, 4, 4, 2, 3])) // False
console.log(sortedList([1, 2, 5, 6, 11, 20])) // True
