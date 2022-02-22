// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Example  s
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7,  8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunkArray = [];
  let dummy = [];
  console.log(array.length)
  for (let i=0; i < array.length; i++){
    if (i != 0 && ( i + 1) % size == 0){
       dummy.push(array[i]);
       chunkArray.push(dummy.values());
        console.log(chunkArray);
       dummy.length = 0;
    }
    else {
      dummy.push(array[i]);
    }
  }
  console.log(chunkArray);
}
chunk([1,2,3,4,5,6],3)
module.exports = chunk;
