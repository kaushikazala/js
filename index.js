// 1. For Loop and Array
// Write a for loop to iterate over an array of numbers [1, 2, 3, 4, 5] and print each number to the console.

let number = [1,2,3,4,5]
for(i=0;i<number.length;i++){
    console.log(number[i])
}

// 2. While Loop and Array
// Write a while loop to print all the elements of the array [10, 20, 30, 40, 50] to the console.

let array =[10,20,30,40,50]
let j = 0
while(j<array.length){
  console.log(array[j])
    j++;
}

// 3. String Length
// Given a string let str = "Hello, World!";, use a for loop to find and print the length of the string.
let string = "Hello,world!"
let length = 0
for(i=0;i<string.length;i++){
  length++

}
console.log(string +" has "+length+" number of length")

// 4. String Characters
// Use a for loop to print each character of the string "JavaScript" one by one.

let str = "JavaScript";
for ( i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 5. Sum of Array Elements
// Write a for loop to calculate and print the sum of the elements in the array [1, 2, 3, 4, 5].

let sumOfarr=[1,2,3,4,5]
let sum = 0
for(i=0;i<sumOfarr.length;i++){
    sum += sumOfarr[i]
}
console.log(sum)

// 6. Find Maximum in Array
// Given an array [3, 1, 4, 1, 5, 9], use a for loop to find and print the maximum value.

let arrNum = [3,1,4,1,5,9]
let max = -Infinity
for(i=0;i<arrNum.length;i++){
  if(arrNum[i]>max){
    max = arrNum[i]
  }
}
console.log(max)

// 7. Array Reversal
// Write a for loop to reverse the array [1, 2, 3, 4, 5] and print the reversed array.

let reversal = [1,2,3,4,5]
let result = 0
for (i = 0; i > reversal.length;i--) {
    
}


// 8. String to Uppercase
// Given a string let greeting = "hello";, use a for loop to convert each character to uppercase and print the result.

let greeting = "hello";
for ( i = 0; i < greeting.length; i++) {
  if(i == 0){
    console.log(greeting.toLocaleUpperCase());
  }
}

// 9. Counting Elements
// Write a while loop to count the number of elements in the array [2, 4, 6, 8, 10] and print the count.
 
let arrayNumber = [2,4,6,8,10]
let count = 0
while(count<arrayNumber.length){
  count++;
}
console.log(count)

// 10. Find Even Numbers
// Given an array [1, 2, 3, 4, 5, 6], use a for loop to print only the even numbers.

let arrayy = [1,2,3,4,5,6]
for(i=0;i<arrayy.length;i++){
  if(arrayy[i] % 2 == 0){
    console.log(`${arrayy[i]}is even number`)
  }
}

// 11. Array Length
// Write a while loop to find and print the length of the array [5, 10, 15].

let a = [5,10,15]
let b = 0
while (b<a.length) {
  console.log(b)
  b++
}

// 12. Sum of String Lengths
// Given an array of strings ["apple", "banana", "cherry"], use a for loop to calculate and print the total length of all strings combined.

let fruit = ["apple","banana","cherry"]
let lengthOffruit = 0
for(i=0;i<fruit.length;i++){
lengthOffruit += fruit[i].length
}
console.log(lengthOffruit)

// 13. Concatenate Strings
// Given an array of strings ["This", "is", "JavaScript"], use a for loop to concatenate them into one string and print it.
 
let line = ["This","is","javascript"]
 let newline = ""
 for(i=0;i<line.length;i++){
    newline += line[i]
 }
 console.log(newline)
  
//  14. Find String Index
// Write a for loop to find and print the index of the character 'a' in the string "JavaScript".

let stringIndex = ["javascript"]
let index = 0
for(i=0;i<stringIndex.length;i++){
  if(stringIndex.length == a){
    console.log(stringIndex)
  }
}