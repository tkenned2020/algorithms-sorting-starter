// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  let result = [];
  while((array1.length > 0) || (array2.length > 0)) {
    for(let i = 0; ){
     if(array1[0] < array2[0]){
      eleRemoved = array1.shift(array1[0])
        result.push(eleRemoved/*array1[0]*/);
      } else if(array2[0] < array1[0]){
        eleRemoved1 = array2.shift(array2[0])
        result.push(eleRemoved1/*array2[0]*/);
      };
    };
  };
};

function mergeSort(array) {
  // your code here
}

module.exports = {
  merge,
  mergeSort
};
