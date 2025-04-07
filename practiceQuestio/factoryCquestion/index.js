// 1.E-commerce Inventory Management:
// Question: Imagine you have an e-commerce site that sells electronics.
//  You need a function that creates a product with properties like name, price, and category.
//  Create a factory function called createProduct that returns an object for each product.
//  Hint: Think of the factory function as a "blueprint" that creates different product objects with specified properties.

function product (name,price,category){
 let object = {}
 object.name = name
 object.price = price
 object.category = category

 return object;
}

let apple  = product("Iphone",500000,"IOS")
console.log(apple);
let samsung = product("M53",30000,"Android")
console.log(samsung);

//2.Student Report Card Generator:
//Question: Write a factory function createReportCard that generates a report card for each student with properties such as name, grade, and subject.
//This function should return an object for each student.
//Hint: Each student can have different grades, so think about how each object represents an individual student's information.

function createReportCard(name,grade,subject){
    let reportCard = {}
    reportCard.name = name
    reportCard.grade = grade
    reportCard.subject = subject
    return reportCard
}

let rajkumri = createReportCard("rajkumri","A","Math")
console.log(rajkumri);
let yash = createReportCard("yash","B","s.s")
console.log(yash);


//3.Car Rental Service:
// Question: Suppose you run a car rental service.
// Write a factory function createCar that creates a car object with properties like model, rentalRate, and availability.
// Use this to generate car instances for each vehicle in your fleet.
// Hint: Each car will have different values for these properties, so use a function that takes parameters for each property.

function createsCar(model,rentalRate,availability){
    let properties = {}
    properties.model = model
    properties.rentalRate = rentalRate
    properties.availability = availability
    return properties
}
let car1 = createsCar("Toyota Camry", 45000,"yes")
let car2 = createsCar("Tesla Model 3", 55000,"no")
let car3 = createsCar("Honda", 4500,"yes")

// console.log(car1);
// console.log(car2);
// console.log(car3);
let allCar = {car1, car2, car3};
console.log(allCar);


// 4.Library Book Generator:
//Question: Create a factory function createBook that generates a book object with properties such as title, author, ISBN, and availableCopies.
//Use this function to add books to a library inventory.
//Hint: Each book should have unique details, so think about how to pass these as arguments to the function.

function createBook(title,author,isbn,availableCopies){
    return{
  title : title,
  author : author,
  isbn : isbn,
  availableCopies : availableCopies
    }
}

let book1 = createBook("To Kill a Mockingbird","Harper Lee", "9780061120084", 5)
let book2 =  createBook("1984", "George Orwell", "9780451524935", 3)
let book3 = createBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 4);
let books = {book1,book2,book3}
console.log(books);


//5.Employee Badge Creator:
//Question: Your company needs to generate badges for employees with properties like name, id, department, and position.
//Write a factory function createEmployeeBadge that returns an employee badge object.
//Hint: Use parameters in your factory function to create unique badge information for each employee.

function createEmployeeBadge(namee,id,department,position){
    let badge = {}
    badge.namee = namee
    badge.id = id
    badge.department = department
    badge.position = position
    return badge
}

  let empolyee1 = createEmployeeBadge("john",454,"IT","Manager")
  let employee2 = createEmployeeBadge("Ben",484,"IT","Assistant Manager")

  let employees ={empolyee1,employee2}
  console.log(employees);
  

//                                              ------Constructor Function Questions-------

//1.Hotel Room Reservation System:
//Question: Suppose you’re building a reservation system for a hotel. 
//Write a constructor function Room that creates a room object with properties like roomNumber, type, price, and isAvailable.
//Hint: Use the new keyword to create new room objects.


function ReservatioSystem (roomNumber,type,price,isAvailable){
this.roomNumber = roomNumber;
this.type = type;
this.price = price;
this.isAvailable = isAvailable
}
let firstfloor = new ReservatioSystem(102,"single",1500,"yes")
let secondfloor = new ReservatioSystem(212,"Double",2000,"No")
console.log(firstfloor);
console.log(secondfloor);

//2.Online Course Management:
// Question: Design a constructor function Course that generates an object representing an online course with properties like title, instructor, duration, and studentsEnrolled.
// Hint: Use the this keyword to assign values to each property

function OnlineCourse(title,instructor,duration,studentsEnrolled){
  this.title = title
  this.instructor = instructor
  this.duration = duration
  this.studentsEnrolled = studentsEnrolled
}
let webDevelopment = new OnlineCourse("Web","sir's name","6 Months",1140)
console.log(webDevelopment);

//3.Digital Wallet:
// Question: Create a constructor function Wallet that initializes a wallet object with properties like ownerName, balance, and currency.
// Include a method that allows the owner to add money to the wallet.
// Hint: Add methods inside the constructor to handle wallet operations.

 function Wallet(ownerName,balance,currency){
  this.ownerName = ownerName
  this.balance = balance
  this.currency = currency
  this.addMoney = function(amount){
    this.balance = amount
  }
}
 
 let owner1 = new Wallet("Ben",20000,"Rupees")
 console.log(owner1);
owner1.addMoney(50000) 
console.log(owner1);


//4.City Weather Tracker:
// Question: Write a constructor function Weather that creates a weather object with properties like city, temperature, humidity, and forecast.
// Create a method to update the forecast. 
// Hint: Use the constructor to set initial values, and add a method to update properties.

function Weather(city, temperature, humidity, forecast) {
  this.city = city;
  this.temperature = temperature;
  this.humidity = humidity;
  this.forecast = forecast;
  
  this.updateForecast = function(newForecast) {
      this.forecast = newForecast;
  };
}

let myCityWeather = new Weather("New York", 75, 60, "Sunny");
console.log(myCityWeather)
myCityWeather.updateForecast("Rainy");
console.log(myCityWeather);


//5.School Student Enrolment:
// Question: Write a constructor function Student that generates a student object with properties name, rollNumber, grade, and subjects.
// Add a method to add new subjects to the student’s subject list.
// Hint: Use the new keyword to create each student, and add a method to modify the object’s state.

function Student(name, rollNumber, grade, subjects) {
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.subjects = subjects;

  this.addSubject = function(newSubject) {
      this.subjects = newSubject
  };
}

let student1 = new Student("John", 101, "10th", "Math");
console.log(student1);
student1.addSubject("Science");
console.log(student1);