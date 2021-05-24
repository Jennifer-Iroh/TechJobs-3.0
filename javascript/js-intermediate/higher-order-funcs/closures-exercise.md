# Exercise 3 - Closures(Answer the following questions:)

* What is a closure?
  * Answer: A closre is when a function is able to access variables fromanother function that has already been returned.

* List two reasons why closures are useful
  * Answer: They are used to create private variables and can be used to create modules.

* What is a module?
  * Answer: A module is a piece of code that is encapsulated and can be reused quite easily.

* What is the arguments array-like object?
  * Answer: It is a special keyword that we get access to everytime a function is called.

* Why do we call arguments an array-like-object?
  * Answer: Because it has a length property and can be looped through.

* Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

    ```js
    let firstCounter = createCounter();

    firstCounter(); // 1
    firstCounter(); // 2
    firstCounter(); // 3
    firstCounter(); // 4

    let secondCounter = createCounter();

    secondCounter(); // 1
    secondCounter(); // 2
    secondCounter(); // 3

    firstCounter(); // 5
    firstCounter(); // 6

    secondCounter(); // 4
    ```

[solution to last question found here](closures-exercise.js)
