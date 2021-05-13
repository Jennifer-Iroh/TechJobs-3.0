# Function Exercise 1

* Difference
  * this function takes in two parameters and returns the difference of the two;

      ```js
        difference(2,2); // 0
        difference(0,2); // -2
      ```

* Product
  * this function takes in two parameters and returns the product of the two;

      ```js
        product(2,2); // 4
        product(0,2); // 0
      ```

* printDay
  * this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
  
      ``` js
        printDay(4); // "Wednesday"
        printDay(41); // undefined
      ```

* lastElement
  * this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

      ```js
        lastElement([1,2,3,4]); // 4
        lastElement([]); // undefined
      ```

* numberCompare
  * this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
  
      ```js
        numberCompare(1,1); // "Numbers are equal"
        numberCompare(2,1); // "First is greater"
        numberCompare(1,2); // "Second is greater"
      ```

* singleLetterCount
  * this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

      ```js
        singleLetterCount('amazing','A'); // 2
        singleLetterCount('Inf-Paces School','o'); // 2
      ```

[Solution found here](part1.js)
