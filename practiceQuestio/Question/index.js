// 1.Write a JavaScript code snippet that uses arithmetic operators to calculate the area of a circle given its radius. Assume the radius is 7. Display the result using console.log.

let radius = 7;
let pi = 22/7;
let value = radius*pi;
let ans = (value*radius);
console.log(ans);

// 2.Given the variables a = 10, b = 20, and c = 5, write a JavaScript code to find the value of (a * b) / c + (b - a). Use console.log to display the result.

 let a = 10
 let b = 20
 let c = 5
 console.log((a*b)/c+(b-a))

//3.Given the variables x = 5 and y = 10, use assignment operators to increment x by 2 and multiply y by x. Display the new values of x and y using console.log
  let x = 5
  let y = 20 
  x= x + 2
  console.log(x)
  y = x * y
  console.log(x,y)

//4.Write a JavaScript code snippet that uses the compound assignment operators to perform the following operations:

// Add 15 to num
// Subtract 5 from num
// Multiply num by 3
// Divide num by 2
// Initialize num to 10, and log the result after each operation.

  let num = 10;
  console.log(num += 15)
  console.log(num -= 5)
  console.log(num *= 5)
  console.log(num /= 5)


//5.Given the variables score1 = 85 and score2 = 90, write a JavaScript code using comparison operators to check if both scores are greater than 80 and display the result using console.log.  

  let score1 = 85
  let score2 = 90
  if (score1 >= 80){
    console.log("score1 is greater then 80")
  }
  else {
    console.log("score1 is less then 80")
  }
  if (score2 <= 80){
    console.log("score2 is greater then 80")
  }
  else {
    console.log("score2 is less then 80")
  }

//6.Write a JavaScript code snippet to compare two strings, "apple" and "banana", using comparison operators to check if the first string is less than the second string. Display the result using console.log.

// let apple = "A"
// let banana ="B"
// console.log("B" > "A")

let apple = "5"
let banana = "7"
console.log(banana >= apple)

//7.Given age = 25 and hasDrivingLicense = true, use logical operators to write a condition that checks if the person is eligible to drive. Print the result using console.log.

let age = 25
let hasLicense = true
console.log( age && hasLicense)

//8.Write a JavaScript code snippet that checks if a number is between 10 and 50 (inclusive) or is a multiple of 5 using logical operators. Display the result using console.log.

let number = 2
console.log(number >= 50)

//  let a=65;
//  if(a%5===0&&(a>10&&a<50)) 
//  {
//     console.log("sachu")
//  }else{
//     console.log("khotu")
//  }

//9.Write a JavaScript code snippet that converts a string "123.45" to a number and adds 10 to it. Display the result using console.log.

let string = "123.45"
console.log(typeof string)
let strings = Number (string)
console.log(typeof strings)
console.log(strings + 10)
console.log(Math.round(strings + 10))

//10.Write a JavaScript code snippet to convert a boolean value true to a string and concatenate it with " is the value". Use console.log to display the result.

let valuee = true
console.log(typeof valuee)
let values = String (valuee)
console.log(typeof values)
console.log(values+" is the value")

//12.Write a JavaScript code snippet that uses console.log to display the values of variables a = 5, b = 10, and the result of their addition.

let aa = 5
let bb = 10
let cc = aa + bb
console.log(aa)
console.log(bb)
console.log(cc)

//13.Write a JavaScript code snippet that checks if a given number is positive. Use an if statement and display the result using console.log.

let TheNum = 1 
if( TheNum >= 0){
  console.log("positive")
}
else{
  console.log("negative")
}

//14.Given the variable temperature = 30, write an if statement that checks if the temperature is above 25. If true, log "It's a hot day" to the console.
let temperature = 30
if (temperature >= 25){
  console.log("It's a hot day")
}

//15.Write a JavaScript code snippet that checks if a number is positive, negative, or zero using nested if-else statements. Display the appropriate message using console.log.

let check = 0
if(check == 0){
  console.log("zero")
}
else{
  if(check >= 0)
    console.log("positive")
  else {
    console.log("negative")
  }
}

//16.Write a JavaScript code using nested if-else statements to determine the grade of a student based on the following conditions:

// Grade "A" if score is 90 or above
// Grade "B" if score is between 80 and 89
// Grade "C" if score is between 70 and 79
// Grade "D" if score is below 70
// Assume the score is 75.
let score = 75;

if (score >= 90 && score <= 100) {
  console.log("Grade A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade C");
}else {
  console.log("Grade D")
}

//17.Write a JavaScript code snippet that uses arithmetic, comparison, and logical operators to determine if a number is both even and greater than 10. Display the result using console.log.

let que = 6
if (que %2==0 && que >= 10){
  console.log(que + " is both even and greater than 10")
}else{
  console.log(que + " is not greater than 10")
}

//18.Write a code snippet that assigns a value to a variable marks, then checks if the marks are greater than or equal to 75. If true, assign "Passed" to another variable result, otherwise assign "Failed". Display result using innerHTML.

//19.Given num1 = 8 and num2 = 3, use a combination of arithmetic, assignment, and comparison operators to find if num1 is a multiple of num2 after incrementing num1 by 1. Log the result.
let num1 = 8
let num2 = 3
++num1
 if (num1 % num2 ===0){
  console.log(`${num1} is multiple of ${num2}`)
 }else {
  console.log(`${num1} is not a multiple of ${num2}`);
} 

//20.Write a JavaScript code snippet that checks if a given variable age is either less than 18 or greater than 60 using logical operators, and displays the message "Not eligible" using console.log. If neither condition is met, display "Eligible".

let agee = 8
if (agee < 18 || agee > 60){
  console.log("Not eligible")
}
else{
  console.log(" eligible")
}
  // que1
//13.Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38

let date = new Date();
let day = date.getDay();
let hour = date.getHours();
let minute  = date.getMinutes();
let second  = date.getSeconds();
let daysname= ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
day = daysname[day];
console.log("Today is :"+ day+" Current time is :" + (hour) +(minute) +(second))


// practiceque

// 1.
let Namee = "my name";
console.log(Namee)
Namee = "my Father's name"
console.log(Namee)
Namee = "my mother's name"
console.log(Namee)

//2.

let ShubhNaam = "kaushika"
let umar = "20"
console.log("My Name is "+ShubhNaam+" and My age is "+umar+".") 