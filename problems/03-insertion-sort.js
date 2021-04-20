// Implement Insertion Sort

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function insertionSort(array) {
  // your code here
  for (let index = 1; index < array.length; index++) {
    let value = array[index];
    for (let j = 0; j < index; j--) {
      if (array[j] < value) {
        swap(array, array[index], array[j]);
      }
    }
  }
  return array;
}


//function selectionSort(list) {
//  // your code here
//
//  for (let j = 0; j < list.length; j++) {
//    let min = j;
//    for (let index = j + 1; index < list.length; index++) {
//      if (list[min] > list[index]) {
//        min = index;
//      };
//    };
//    swap(list, j, min);
//  };
//  return list;
//};




module.exports = {
  insertionSort
};
