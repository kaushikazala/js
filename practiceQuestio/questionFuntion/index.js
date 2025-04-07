//1.Calculate Total Expenses:
// A family wants to calculate their weekly expenses. They spent ₹200, ₹150, ₹100, ₹350, and ₹50 over five days. Write a function to calculate the total expense.

let array = [200,150,100,350,50]
let sum = 0
const value = array.forEach((num)=>{
    sum +=num;
});
console.log("Sum of expenses:", sum);

//2.Find the Highest Temperature:
// A weather app shows the temperatures recorded in a city over 7 days as [32, 35, 30, 31, 33, 36, 34]. Write a function to find the highest temperature in the array.

let temperature = [32,35,30,31,33,36,34]
let maxtemp = 0
function highesttemp (){
    for(i=0;i<temperature.length;i++){
        if(temperature[i]>maxtemp){
            maxtemp = temperature[i]
        }
    }
    console.log(maxtemp)
}
highesttemp()

//3.Find the Lowest Test Score:
// A student got test scores of [56, 72, 48, 90, 65]. Write a function to find the lowest score.

let score = [56,72,48,90,65]
function lowest() {
    console.log(Math.min(...score));
}
lowest();

//4.Calculate Average Salary:
// In a company, the monthly salaries of 5 employees are [45000, 55000, 30000, 70000, 60000]. Write a function to calculate the average salary.

let salary = [45000, 55000, 30000, 70000, 60000]
function employees (){
    let average = 0
    for(let i = 0; i<salary.length;i++){
        average += salary[i]
    }
    return average /salary.length
}
console.log(employees())

//5.Reverse the Guest List:
// You have a list of guests for a party: ["John", "Aman", "Rita", "Raj"]. Write a function to reverse the guest list.

let guest =["john","aman","Rita","Raj"]
function reverse(){
    guest.reverse()
    console.log(guest)
}
reverse()

//6.Check for Available Seats:
// A movie theater has an array of available seat numbers: [3, 5, 7, 9, 12]. Write a function to check if seat number 7 is available.

// let seat = [3,5,7,9,12]
// console.log(seat.includes(7))
let seat = [3,5,7,9,12]
function available()
{
    for(i=0;i<seat.length;i++){
        if(seat[i]==7){
            console.log("seat is avaible")
        }
    }
}
available();

//7.Remove the First Task:
// You have a to-do list: ["Buy groceries", "Clean room", "Study"]. Write a function to remove the first task from the list and return the updated list.

let task=["Buy groceries","clean room","Study"]
function remove (){
    let firstTask = task.shift()
    console.log(task)
}
remove()

//8.Remove Duplicate Phone Numbers:
// A phone company wants to remove duplicate phone numbers from an array: [9876543210, 9123456789, 9876543210, 9000000000]. Write a function to remove duplicates.

let number = [9876543210, 9123456789, 9876543210, 9000000000]
function removeduplicate(){
    let nemNum = new Set(number)
    console.log(nemNum)
}
removeduplicate();


//9.Find Second Largest Sale Amount:
// A shop recorded sales amounts: [200, 400, 100, 700, 500]. Write a function to find the second-largest sale.

let amounts = [200,400,100,700,500]
function numberr(){
    console.log(amounts.sort()[amounts.length-2]) 
}
numberr()

//10.Get the Last Product Sold:
// A store records product sales as ["Shoes", "T-shirt", "Hat"]. Write a function to get the last product sold.
// Hint: Access the last array element.

let product = ["Shoes","T-shirt","Hat"]
function lastproduct(){
    console.log(product.slice(-1))
}
lastproduct()

//11.Check if Shopping Cart is Empty:
// Write a function to check if the shopping cart array cart = [] is empty.
// Hint: Check if the length is 0.
let cart = []
function shoppingcart(){
    if(cart.length==0){
        console.log("cart is empty")
    }else{
        console.log("cart is not empty")
    }
}
shoppingcart()

//12.Count Occurrences of an Item:
// A library has multiple copies of books in its inventory: ["Book A", "Book B", "Book A", "Book C", "Book A"]. Write a function to count how many times "Book A" appears.
// Hint: Use a loop or filter().

let books = ["Book A", "Book B", "Book A", "Book C", "Book A"]
function bookcount(){
    for(i=0;i<books.length;i++){
        if(books[i]=="Book A"){
          console.count(books[i])
          }
        }
    }
bookcount(books)

//13.Merge Two Student Lists:       
// Two classes have student lists: ["Rahul", "Neha"] and ["Aman", "Priya"]. Write a function to merge both lists.
// Hint: Use .concat() or spread operator
let class1 =["Ruhal","Neha"]
let class2 =["Aman","Priya"]
function merge(){
    let merge = class1.concat(class2)
    console.log(merge)
}
merge()

//14.ind the Positi on of a Movie:
// A list of movies is ["Inception", "Avatar", "Titanic"]. Write a function to find the position of "Avatar" in the list.
// Hint: Use .indexOf()

let movies = ["Inception", "Avatar", "Titanic"]
function position(){
    console.log(movies.indexOf("Avatar"))
}
position()

//15.Multiply All Prices by Discount:
// A store wants to apply a 10% discount to all prices: [1000, 2000, 1500, 2500]. Write a function to return new prices after applying the discount.
// Hint: Multiply each price by 0.9.

let prices = [1000,2000,1500,2500]
let discount = 0.9
function newprice(){
    for(i=0;i<prices.length;i++){
        newamount = prices[i]*discount
        console.log(`OG amount =${prices[i]} and discounted amount =${newamount}`)
    }
    return newamount
}
console.log(newprice())


//16.Sort Scores in Descending Order:    .................***********............
// A sports team scored [10, 50, 30, 20]. Write a function to sort these scores in descending order without using .sort().
// Hint: Use nested loops for sorting.

let scores = [10,50,30,20]
function sortt(){
for(i=0;i<scores.length;i++){
    for(j=i+1;j<scores.length;j++){
        if(scores[i]<scores[j]){
            temp = scores[i]
            scores[i] = scores[j]
            scores[j] = temp
    }
}
}return scores
}
console.log(sortt())

//17.Split Attendees into Groups:
// An event has 10 attendees: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]. Write a function to split them into groups of 3.
// Hint: Loop and use slice().

let attendees = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
function splitt(){
    console.log(attendees.slice(0,3))
    console.log(attendees.slice(3,6))   
    console.log(attendees.slice(6,9))
    console.log(attendees.slice(9,10))
}
splitt()

//18.Rotate the Line of Cars:
// A parking lot has cars in a line: ["Car1", "Car2", "Car3", "Car4"]. Write a function to rotate the cars so "Car4" comes to the front.
// Hint: Use .pop() and .unshift().
let cars = ["Car1", "Car2", "Car3", "Car4"] 
function rotate(){
    console.log(cars.unshift("Car4"))
    console.log(cars.pop("car4"))
    console.log(cars)
}
rotate()

//19.Remove Unwanted Values from the List:
// A form received some invalid values: [0, "A", "", null, "B", undefined]. Write a function to remove all falsey values (like 0, null, undefined) from the list.
// Hint: Use .filter().

let values = [0, "A", "", null, "B", undefined]
function removevalue(){
    let newvalue = values.filter(Boolean)
    console.log(newvalue)
}
removevalue()


//19.Count Vowels in a Name:
// A user enters their name "Rahul". Write a function to count how many vowels are in the name.
// Hint: Check for vowels (a, e, i, o, u).

let names = "Rahul"
let vowels = ["a","e","i","o","u"]
function countvowels(){
    for(i=0;i<names.length;i++){
        for(j=0;j<vowels.length;j++){
        if(names[i]==vowels[j]){
           console.count(names[i])
        }
    }
} 
}
countvowels()

//20.Reverse a Product Code:
// A company has a product code "AB1234". Write a function to reverse this code.
// Hint: Convert to array, reverse, and join

let code = "AB1234"
function reversecode(){
  newreversec = code.split("").reverse().join("")
  console.log(newreversec)
}
reversecode()

//21.Check if a Name is a Palindrome:
// A child enters the name "radar" into a game. Write a function to check if the name is a palindrome (same forwards and backwards).
// Hint: Compare string to its reverse.

let gameName = "radar"
let reverseName = gameName.split("").reverse().join("")
function palindrome(){
    if(gameName==reverseName){
        console.log(`${gameName} is a palindrome`)
    }
    else{
        console.log(`${gameName} is not a palindrome`)
    }
}
palindrome()

//22.Remove Spaces from a Message:
// A user enters a message "Hello World 2024". Write a function to remove all spaces from the message.
// Hint: Use .replace() or .split() and .join().

let message = "Hello World 2024"
let newmessage = message.split(" ").join("")
function removespace(){
    console.log(newmessage)
}
removespace()

//23.Convert a Sentence to Words:
// A sentence "JavaScript is fun" is given. Write a function to convert the sentence into an array of words.
// Hint: Use .split() with a space.

let sentence = "JavaScript is fun"
let newsentence = sentence.split(" ")
function convert(){
    console.log(newsentence)
}
convert()