const sumLargestNumbers = function(data) {
  let largeNum1 = data[0];
  let largeNum2 = data[1];

  for (let i = 0; i < data.length; i++) {
    if (data.length === 2) {
      let total = largeNum1 + largeNum2;
      return total;
    };

    if (data[i] > largeNum1){
      largeNum1 = data[i];
    } 
  };

  for (let x = 0; x < data.length; x++) {
    if (data[x] > largeNum2 && data[x] < largeNum1) {
      largeNum2 = data[x];
    }
  };

  let total = largeNum1 + largeNum2;
  return total;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));