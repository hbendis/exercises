# Debugging Exercises

#### 1. Fido says...
* In the following code, we want fido to bark. Instead, we get an error. Why?

``` javascript 
class Dog {
  constructor(name) {
    this.name = name;
  }
}

bark = function() {
  console.log(`${this.name} says woof`);
};

let fido = new Dog("fido");
fido.bark();
```
* Edit the code to make fido bark. 

#### 2. Month Name
Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument. 
* Example 
* getMonthName(15) -> `Invalid Month Number!`

#### 3. Reverse 
Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument. 

* Example 
* reverseString(2019) -> `ERROR! This is not a string!`

#### 4. Comparing Arrays
Create a function that returns true if two arrays contain identical values, and false otherwise.

Someone wrote the following code: 
```javascript
function compareArrays(arr1, arr2) {
  if (arr1 === arr2) {
    return true
   } else {
    return false
   }
}
```
* Why doesn't the code work? 
* Fix the code (or restart) to solve the problem.

* Examples of output
* compareArrays([1, 2], [1, 3]) ➞ false
* compareArrays([1, 2], [1, 2]) ➞ true
* compareArrays([4, 5, 6], [4, 5, 6]) ➞ true
* compareArrays([4, 7, 6], [4, 5, 6]) ➞ false


#### 5. Recursion 
The following code should get the sum of the array items, but it does not work. Fix it so that it will. 
```javascript
function sum(array) {
    let result = array.pop() + sum(array);
    return result;
}

console.log(sum([1, 2, 3]));
```
