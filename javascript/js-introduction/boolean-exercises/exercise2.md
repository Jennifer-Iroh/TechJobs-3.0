# Exrcise 2 - Part II Boolean Logic

Answer the following questions about this code block:

```js
let isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
```

1. What should the above code console.log?
   * Answer: Keep it up!

2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
    * Answer: We do not need to specify that because if() already means the condition inside it must be true.

```js
let firstvariable;
let secondvariable = "";
let thirdvariable = 1;
let secretMessage = "Shh!";

if(firstvariable){
    console.log("first");
} else if(firstvariable || secondvariable){
    console.log("second");
} else if(firstvariable || thirdvariable){
    console.log("third");
} else {
    console.log("fourth");
}
```

1. What should the above code console.log? Why?
   * Answer: It console logs third because that is the only condition that is met/ true.
2. What is the value of firstvariable when it is initialized?
   * Answer: undefined
3. Is the value of firstvariable a "truthy" value? Why?
   * Answer: It is just undefined. It does not evalute to a truthy or falsy value.
4. Is the value of secondvariable a "truthy" value? Why?
   * Answer: It is an empty string and does not evalute to truthy or falsy.
5. Is the value of thirdvariable a "truthy" value? Why?
   * Answer: It is a truthy value because it evaluates to true.
  