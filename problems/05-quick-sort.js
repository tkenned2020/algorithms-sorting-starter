// Implement Quick Sort

function quickSort(array) {
  // your code here
  if(array.length === 0){
    return array;
  }

  let pivot = array.shift(array[0]);
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else
    {right.push(array[i])}
  };

  let leftSort = quickSort(left)
  let rightSort = quickSort(right)

  return leftSort.concat([pivot]).concat(rightSort)
};

module.exports = {
  quickSort,
};
