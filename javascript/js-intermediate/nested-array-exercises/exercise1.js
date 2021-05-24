// 1

function rotate(arr, num) {
  for (let i = 0; i < num; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

rotate([1, 2, 3], 1); // [3,1,2]
rotate([1, 2, 3], 2); // [2,3,1]
rotate([1, 2, 3], 3); // [1,2,3]

// 2
function makeXOGrid(rows, cols) {
  let result = [];
  let firstIndex = true;
  let newRow = [];

  for (i = 0; i < rows; i++) {
    newRow;

    for (x = 0; x < cols; x++) {
      if (firstIndex) {
        newRow.push('X');
      } else {
        newRow.push('O');
      }
      firstIndex = !firstIndex;
    }
    result.push(newRow);
  }
  return result;
}

makeXOGrid(3, 4);

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3, 2);

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3, 3);
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
