// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  let result = [];
  while ((array1.length > 0) || (array2.length > 0)) {
    if (array1[0] < array2[0]) {
      eleRemoved = array1.shift(array1[0]);
      result.push(eleRemoved);
    } else if (array2[0] < array1[0]) {
      eleRemoved1 = array2.shift(array2[0])
      result.push(eleRemoved1);
    };

  };
  return result.concat(array1).concat(array2);
}

function mergeSort(array) {
  // your code here
  let middle = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, middle);
  let rightHalf = array.slice(middle);

  // mergeSort(leftHalf);
  // mergeSort(rightHalf);
  return merge(leftHalf, rightHalf);
}


module.exports = {
  merge,
  mergeSort
};
