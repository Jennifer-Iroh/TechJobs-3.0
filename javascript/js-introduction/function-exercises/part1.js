// difference
function findDifference(a, b) {
  return a - b;
}

findDifference(2, 2);
findDiffernece(0, 2);

// product
function findProduct(a, b) {
  return a * b;
}

findProduct(2, 2);
findProduct(0, 2);

// printday
function printDay(day) {
  const weekDays = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };

  if (weekDays[day] < 1 || weekDays[day] > 7) {
    return undefined;
  } else {
    return weekDays[day];
  }
}

// last element
function lastElement(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[arr.length - 1];
  }
}

lastElement([1,2,3,4]); 
lastElement([]); 


// Number compare
function compareNum(a, b) {
  if (a === b) {
    return 'Numbers are equal';
  } else if (a > b) {
    return 'First number is greater';
  }else{
  return 'Second number is greater';
  }
}


compareNum(1,1); 
compareNum(2,1);
compareNum(1,2); 


// single letter count
function singleLetterCount(word, letter){
  let count = 0;
  for (let i = 0; i < word.length; i++){
    if (word[i].toLowerCase() === letter.toLowerCase()){
      count++;
    }
  }
  return count;
}