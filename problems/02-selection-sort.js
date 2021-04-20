// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  // your code here
}

function selectionSort(list) {
  // your code here
  let min = 0;

  while () {

    for (let index = 0; index < list.length; index++) {

      if (list[min] > list[index + 1]) {
        swap(list, min, index + 1);
        min = index + 1;

      }
    }
  }
}

module.exports = {
  selectionSort,
  swap
};
