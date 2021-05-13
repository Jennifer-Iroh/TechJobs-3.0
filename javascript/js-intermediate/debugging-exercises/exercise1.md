# Exercise 1 - Answer the following questions

1. What does the throw keyword do?
   * Answer: It is used to create custom errors to be thrown out to users when a process is done incorrectly on our application.
  
2. What does the finally keyword do?
    * Answer: Whatever code that is nested in the finally block would run, regardless of an error occuring in the try block.

3. What is the difference between a TypeError and ReferenceError?
    * Answer: a type error occurs when we use certain methods on wrong types while a refernce error refers to something that is not stored in the memory.

4. How do you create a snippet in the Chrome dev tools?
    * Answer:  A new snippet can be created by clicking on the sources tab, selecting snippet and sleceting new.

5. In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
    * Answer: An error that occurs in your program, those are caught in the try and catch block.

6. How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
    * Answer: We catch errors in the catch block

    ```js
    try{
        true()
    } catch (e){
        console.log('a boolean is not a function, this is an error')
    }
    ```

7. Explain what type of error will be thrown, why the error is occuring, and how to fix it:

i.

```js
    person;
```

* Answer: It is a Reference Error
  * Fix
  
  ```js
  let person = 'jenny';
  ```
  
ii.

```js
let data = {};
data.displayInfo();
```

* Answer: It is a Type Error. Undefined cannot be invoked.

iii.

```js
let data = {};
data.displayInfo.foo = "bar";
```

* Answer: It is a type Error, It can be fixed by adding the  key and value of displayInfo to the data object so that it can be referenced.
  
iv.

```js
function data(){
    let thing = "foo";
}
data();
thing;
```

* Answer: It is a Reference Error. The thinh variable is only available in the function scope.
