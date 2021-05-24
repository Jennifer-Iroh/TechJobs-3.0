# Exercise 2 - Timers Exercises (Answer the following questions:)

* What is the difference between setInterval and setTimeout?
  * Answer: A setInterval will run a function an infinite number of time sor until the timer is cleared while a setTimeout would run the function just once.

* What is the difference between using setInterval and a loop? Why would you want to choose one over the other?
  * Answer: The difference is that while a loop continually interates over anitem until a condition is fufilled, a setIntervaldoes the same thing at stipulated time intervals after which the clearId can be used to exit the loop. A setInterval is used when we want to iterate at spectific time intervals.

* What is the first parameter that setInterval and setTimeout accept?
  * Answer: A callback function.

* Why is it so important to store the result of setInterval and setTimeout in a variable?
  * Answer: We do this to get access to the timerId value.

* What does asynchronous mean in the context of setTimeout and setInterval?
  * Answer: It means code that can be executed later.
