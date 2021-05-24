// 1

function countDown(num) {
  const timerId = setInterval(() => {
    num--;
    if (num <= 0) {
      clearInterval(timerId);
      console.log('DONE');
    } else {
      console.log(num);
    }
  }, 1000);
}

countDown(4);

// 2
function randomGame() {
  let counter = 0;
  let timerId = setInterval(() => {
    let num = Math.random();
    counter++;
    if (num > 0.75) {
      clearInterval(timerId);
      console.log('it took ' + counter + ' tries');
    }
  }, 1000);
}

// 3
function isEven(num) {
  return num % 2 === 0;
}

// 4
function isOdd(num) {
  return num % 2 !== 0;
}

//5
function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

// 6
function numberFact(num, callback) {
  return callback(num);
}

// 7
function find(arr, callback) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i];
    if (callback(result)) {
      return result;
    }
  }
}

// 8
function findIndex(arr, callback) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i];
    if (callback(result)) {
      return i;
    }
  }
}


// 9
function specialMultiply(num1, num2){
    if(arguments.length ===1){
      return function newFunc(num2){
        return num1*num2  
      }
    }
    return num1*num2
  }