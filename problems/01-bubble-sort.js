// Implement Bubble Sort

//helper function
function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  // your code here
  for (let index = 0; index < array.length; index++) {
    let pointer = 0
    if (array[index] > array[index + 1]) {
      swap(array, array[index], array[index + 1]);
      
    };
  };
  return array;
};

let array1 = [2, -1, 4, 3, 7, 3];
console.log(bubbleSort(array1));
// result [ 2, -1, undefined, undefined, 7, 3, <1 empty item>, 3, '-1': 4 ]
module.exports = {
  bubbleSort,
  swap,
};
