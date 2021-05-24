//1
function map(arr, fn) {
  let newArr = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = fn(arr[i]);
    newArr.push(result);
  }
  return newArr;
}

map([1, 2, 3, 4], function (val) {
  return val * 2;
});

//   2
function reject(arr, fn) {
  let newArr = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i];
    if (!fn(result)) {
      newArr.push(result);
    }
  }
  return newArr;
}

reject([1, 2, 3, 4], function (val) {
  return val > 2;
});

reject([2, 3, 4, 5], function (val) {
  return val % 2 === 0;
});
