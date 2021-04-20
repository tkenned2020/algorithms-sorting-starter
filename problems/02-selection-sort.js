// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  // your code here
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(list) {
  // your code here

  for (let j = 0; j < list.length; j++) {
    let min = j;
    for (let index = j + 1; index < list.length; index++) {
      if (list[min] > list[index]) {
        min = index;
      };
    };
    swap(list, j, min);
  };
  return list;
};

let groceryList = [2, -1, 4, 3, 7, 3];

module.exports = {
  selectionSort,
  swap,
};
