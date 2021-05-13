// Multiple letter count
function multipleLetterCount(str){
  let obj = {}
  for (let i = 0; i < str.length; i++){
    if(str[i] in obj){
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  return obj
}

  
  // Array manipulation

  function arrayManipulation(arr, cmd, loc, val){
    if(cmd === 'remove' && loc === 'end'){
      return arr.pop()
    }
    if (cmd === 'remove' && loc === 'beginning'){
      return arr.shift();
    }
    if (cmd === 'add' && loc === 'beginning'){
      arr.unshift(val)
      return arr
    }
    if (cmd === 'add' && loc === 'end'){
      arr.push(val)
      return arr
    }
  }

  // OR a refactored versio

  function arrayManipulation(arr, cmd, loc, val){
    if (cmd === 'remove'){
      if (loc ==='end'){
        return arr.pop()
      }
      return arr.shift()
    } else if(cmd === 'add'){
    if (loc === 'beginning'){
      arr.unshift(val);
      return arr
    }
    arr.push(val)
    return arr
  }
  } 
  

  // Is palindrome

  function isPalindrome(str){
    if (str.toLowerCase().split('').reverse().join('') === str.toLowerCase()){
      return true;
    } else {
      return false;
    }
  }