 let input = ["apple","oppo","samsung","Mi", "apple","google","google","android","mi"]
//output {
// apple: 2,
// oppo: 1,
// samsung: 1,
// Mi: 2,
// google: 2,
// android: 1}

function countWords() {
    for (let i = 0; i < input.length; i++) {
        let words = {input}
        console.count(input[i]);
    }
}  
countWords();

// 1. Create a Library Object:
// A library needs to store books with their titles and authors. Create an object with a method that accepts an array of book titles and their authors, and adds them to the library's collection.

let booksToAdd = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Moby Dick", author: "Herman Melville" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", author: "Jane Austen" }
];

const library = {
    Collection: [],
    addBooks: function(booksArray) {
    this.Collection.push(...booksToAdd)
    console.log(booksToAdd)
}
}
library.addBooks(booksToAdd)


// 2. Find the Most Frequent Color in a List:
// Create an object that has a method to find the most frequent color from an array of colors like ["red", "blue", "red", "green", "blue", "blue"].

let color = ["red", "blue", "red", "green", "blue", "blue"]

const frequentColor = {
    mostfrenquentcolor:function(colors){
        let colorfrenquency ={};
        colors.forEach(color=>{
            if(colorfrenquency[color] == undefined){
                colorfrenquency[color] = 1
            }else{
                colorfrenquency[color] += 1
            }
        });
        return colorfrenquency
    }
    }

let newcolor = frequentColor.mostfrenquentcolor(color)
console.log(newcolor);



// ## 3. Student Gradebook:
// Create an object `gradebook` that stores students' names and their grades. It should have a method that accepts an array of students' names and grades, and returns an object where the student’s name is the key, and their grade is the value.
// ```javascript
const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B+" },
    { name: "Charlie", grade: "A-" },
    { name: "David", grade: "C" },
    { name: "Eva", grade: "B" }
  ];
   
const gradebook = {
    newGradebook:[],
    addGrades: function(gradeArray) {
    gradeArray.forEach(student => {
       this.newGradebook[student.name] = student.grade
    });
    return this.newGradebook
    }
};
console.log(gradebook.addGrades(students))   


//4.Find Unique Products in Cart:
// Create an object shoppingCart that accepts an array of product names and returns an object showing how many times each product appears in the cart.


const products = [
    "Apple", "Banana", "Orange", "Milk", "Bread", 
    "Eggs", "Apple", "Cheese", "Milk", "Tomato", 
    "Apple", "Chicken", "Rice", "Cereal", "Yogurt", 
    "Carrot", "Potato", "Apple", "Milk", "Lettuce"
];

const shoppingCart = {
    getProductFrequency: function(productArray) {
     let productFrequency ={}
     productArray.forEach(product =>{
        if(productFrequency[product] == undefined){
            productFrequency[product] = 1;
        }else{
            productFrequency[product] += 1;
        }
     });
    return productFrequency;
  }
};

const frequent = shoppingCart.getProductFrequency(products);
console.log(frequent);

//5.Frequency of Letters in a String:
// Write an object letterCounter that accepts a string and returns an object showing the frequency of each letter in the string.


let string = "javascript"
const letterCounter = {
    countLetters: function(inputString) {
        let stringCointer = {}
        inputString.split('').forEach(letter=>{
         if(stringCointer[letter]== undefined){
                stringCointer[letter] = 1
            }else{
                stringCointer[letter] += 1
            }
        })
return stringCointer
    }
};
let newString = letterCounter.countLetters(string)
console.log(newString);


// 6. find out frequency of number in array [ 1,3,4,6,3,4,5,3,4,]

let num = [ 1,3,4,6,3,4,5,3,4,]

const numberFrequency ={
    
}