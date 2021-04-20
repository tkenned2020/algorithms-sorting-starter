// Implement Bubble Sort

//helper function
function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  // your code here
  let swapped = true;

  // While loop is a recursive step to check array
  // after first complete iteration
  while (swapped) {
    swapped = false;

    // Start at index 0, then increment through array by 1
    for (let index = 0; index < array.length; index++) {
      // Compare index 0 to index 1,
      // swap if index 0 is greater than index 1
      if (array[index] > array[index + 1]) {
        swap(array, index, index + 1);
        // Keep track there has been a swap
        // Meaning the array may not yet be
        // completely sorted
        swapped = true;
      };
    };
  }
  return array;
};

let array1 = [2, -1, 4, 3, 7, 3];
console.log(bubbleSort(array1));
// result [ 2, -1, undefined, undefined, 7, 3, <1 empty item>, 3, '-1': 4 ]
module.exports = {
  bubbleSort,
  swap,
};
