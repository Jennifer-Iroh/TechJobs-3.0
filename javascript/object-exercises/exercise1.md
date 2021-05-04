# Objects Exercise 1

1. Create an object that has your firstName, lastName, and occupation as keys.
   * Answer:

    ```js
        let personalDetails = {
            firstName: Jennifer,
            lastName: Iroh,
            occupation: Programmer
        }
    ```

2. Access each value from your object using both dot notation and bracket notation.
   * Answer:

    ```js
        personalDetails.firstName;
        personalDetails.lastName;
        personalDetails.occupation;

        pesonalDetails["firstName"];
        personalDetails["lastName"];
        personalDetails["occupation"];
    ```

3. Add a key for hobby to your object. Remove the key and value for occupation.
   * Answer:
  
    ```js
        personalDetails.hobby = "Coding";

        delete personalDetails.occupation;
    ```

4. What is the difference between dot notation and bracket notation?
   * Answer: Bracket notation should be used when you need to evaluate some expression or pass in a variable to get the name of the key, but when the name of the key is known and it is not a variable or expression, always use the dot notation.
