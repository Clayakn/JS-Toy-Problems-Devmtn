// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead


// -----------------------------------------------------------------
// Solution

// Step 1: Clarify - Understand the question

// return an array with numbers 1 to N
// N is only parameter 
// N is not less than 1
// replace value that is multiple of 3 with 'Fizz'
// replace multiple of 5 with 'Buzz' 
// if they are multiple of 3 & 5 use 'FizzBuzz'

// Step 2: Create Sample Data
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// Step 3: Solve Sample Data
[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz',10,11,'Fizz',13,14,'FizzBuzz']

// Step 4: Signature
function fizzBuzz(n) {
  arr
}

// Step 5: List Code Constructs
// function () {} 
// array [] 
// for () {} 
// if () {} 
// push()

// Step 6: Pseudo Code
// Take in integer N 
// make new array 
// make for loop (loop N times)
// check if number is divisible by 3, 5, or both 
// push string accordingly 
// return new array

// Step 7: Solve

function fizzBuzz(N) {
  let arr = []
for (let i = 1;i<=N;i++) {
  if (i%3===0 && i%5 === 0) {
arr.push('FizzBuzz')
  } else if (i%5 === 0) { 
arr.push('Buzz')
  } else if (i%3 === 0) {
arr.push('Fizz')
  } else {
arr.push(i)
  }
}
return arr
} 

console.log(fizzBuzz(23));