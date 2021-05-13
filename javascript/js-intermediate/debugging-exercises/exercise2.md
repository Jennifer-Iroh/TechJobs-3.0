# Exercise 2 - Fix the broken code and explain what was wrong

1. ```js
    for(let i=0; i > 5; i++){
        console.log(i);
        }
    ```

    * Answer: the code wouldnot run if i is greter than 5.
    * Fix
  
        ```js
        for(let i=0; i < 5; i++){
                console.log(i);
                }
        ```

2. ```js
    function addIfEven(num){
        if(num % 2 = 0){
            return num + 5;
        }
        return num;
        }
    ```

    * Answer: the strict equality sign should be used.
    * Fix
  
        ```js
        function addIfEven(num){
        if(num % 2 === 0){
            return num + 5;
        }
        return num;
        }
        ```

3. ```js
    function loopToFive(){
        for(let i=0, i < 5, i++){
            console.log(i);
        }
    }
    ```

    * Answer: the commas sould be changed to semi-colons.
    * Fix
  
        ```js
        function loopToFive(){
        for(let i=0; i < 5; i++){
            console.log(i);
            }
        }
        ```

4. ```js
    function displayEvenNumbers(){
        let numbers = [1,2,3,4,5,6,7,8];
        let evenNumbers = [];
        for(let i=0; i<numbers.length-1; i++;){
            if(numbers % 2 = 0); {
                evenNumbers.push(i);
            }
            return evenNumbers;
        }
    }
    displayEvenNumbers(); // should return [2,4,6,8]
    ```

    * Answer: The semi-colon after i++ would give a syntax error, i < numbers.length-1 would eleiminate the last element in the array. the === sign should be used instead of = in the if statement, the element that we are working with should be number [i] for all instances. The return keyword should come at the end of the loop (for block. )
    * Fix
  
        ```js
        function displayEvenNumbers(){
        let numbers = [1,2,3,4,5,6,7,8];
        let evenNumbers = [];
        for(let i=0; i<numbers.length; i++){
            if(numbers[i] % 2 === 0){
                evenNumbers.push(numbers[i]);
                }  
            }   
            return evenNumbers;
        }
        ```
