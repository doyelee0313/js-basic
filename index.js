// console 에 띄우기
// console.log(`Hello`);
// console.log(`I like pizza`);

//팝업 알림창 띄우기
// window.alert(`This is an alert`);
// window.alert(`I like u`);

//id로 getElement 해서 text로 바꾸기
// document.getElementById("myH1").textContent = `Hwllo`;
// document.getElementById("myP1").textContent = `Pizza`;

//CHP2 VARIABLES

//variable = container that stores a value

//1. declaration let x;
//2. assignment x = 100;

//or x = 100;
// let x;
// x=100;
// console.log(x);


// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// varable 출력할때는 ${} 이용해서 안에 넣기
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`your gpa is ${gpa}`);

//무슨 타입인지 알고싶을때는 typeof
//console.log(typeof gpa);

// let fullName = "Bro";
// let age = 25;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;

//CHP4 ACCEPT USER INPUT


//1. easy way = window prompt
// let usernmae;

// username = window.prompt("What's your username?");

// console.log(username);

// //2. html textbox
// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

//CHP5 TYPE CONVERSION

//change the datatype of a value to another 

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//CHP6 const

//let으로 설정해놓으면 나중에 바뀔 수도 있는데 const로 하면 나중에 바꿀 수 없음
// let pi = 3.141592;

// const PI = 3.141592;

//CHP7 COUNTER PROGRAME

// const decreaseBtn = document.getElementById("decreaseBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const countLabel = document.getElementById("countLabel");

// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }


//CHP8 MATH (round, floor, ceil, trunc, pow, sqrt, log, sign, min, max)

// let x = 3.21;
// let y = 2;
// let z;

// z = Math.round(x);

// console.log(z)

//CHP9 RANDOM NUM

// const min = 50;
// const max = 100;

// //number should be between min and max
// let randomNum = (Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const myLabel = document.getElementById("myLabel");
// const min = 1;
// const max = 100;
// let randomNum;

// myButton.onclick = function () {
//     randomNum = Math.floor(Math.random() * (max - min)) + min;
//     myLabel.textContent = randomNum;
// }

//CHP10 IF STATEMENT

// let age = 25;

// if(age >= 10) {
//     console.log("you r old enough")
// } else if(age < 10){
//     console.log("lol")
// }

//CHP11 CHECKED PROPERTIES

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterBtn = document.getElementById("masterBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit")
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function() {
//     if(myCheckBox.checked) {
//         subResult.textContent = `you are subscribed!`;
//     } else {
//         subResult.textContent = `you are not subscribed!`;
//     }

//     if(visaBtn.checked) {
//         paymentResult.textContent = `you are paying w visa`;
//     } else if(masterBtn.checked) {
//         paymentResult.textContent = `you are paying w master`;
//     } else if(paypalBtn.checked) {
//         paymentResult.textContent = `you are paying w paypal`;
//     } else {
//         paymentResult.textContent = `you must select a payment type`;
//     }
// }

//CHP12 TERNERY OPERATION
//condition ? codeiftrue : codeiffalse

// let amount = 15;
// let discount = amount > 10 ? 5 : 0;
// console.log(`your discount is ${discount}`);

//CHP13 SWITCH

// let day = 5;

// switch(day) {
//     case 1:
//         console.log("its monday");
//         break;
//     case 2:
//         console.log("its tuesday");
//         break;
//     case 3:
//         console.log("its wendnesday");
//         break;
//     case 4:
//         console.log("its thursday");
//         break;
//     default:
//         console.log("lol");
// }

//CHP14 STRING METHOD(charAt, length, .trim(), .toUpperCase(), toLowerCase(), repeat(), startsWith(), padStart, padEnd)

// let username = "brocode";

// let a = username.charAt(0);
// console.log(a);

//CHP15 string slicing

// const fullName = "Bro Code"

// let firstName = firstName.slice(0,3);

//SPREAD OPERATOR

// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "celery", "potatoes"];

// let foods = [...fruits, ...vegetables, "eggs"];

// foods.sort().reverse();

// console.log(foods)

//REST PARAMETERS
// spread = expands an arrary into seperate elements 
// rest = bundles seperates elements into array


// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// function openFridge(...foods) {
//     console.log(foods);
// }

// openFridge(food1, food2, food3, food4, food5);

// // -> ['pizza', 'hamburger', 'hotdog', 'sushi', 'ramen']

// function openFridge(...foods) {
//     console.log(...foods);
// }

// openFridge(food1, food2, food3, food4, food5);

// // -> pizza hamburger hotdog sushi ramen

//CALL BACK = a function that is passed as an argument to another function

// hello(leave);

// function hello(callback) {
//     console.log("Hello!");
//     callback();
// }

// function leave() {
//     console.log("leave!");
// }

// function wait() {
//     console.log("wait!");
// }

// function goodbye() {
//     console.log("goodbye!");
// }

// sum(displayPage, 1, 2);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//     console.log(result);
// }

// function displayPage(result) {
//     document.getElementById("myH1").textContent = result;
// }

//FOR EACH = method used to iterate over the elements of an array and apply a specified function to each element
// array.forEach() -> element, index, arrary already provided

// let numbers = [1,2,3,4,5];

// function double(element, index, array){
//     array[index] = element * 2;
// }

// numbers.forEach(double);
// numbers.forEach(display);

// function display(element) {
//     console.log(element);
// }

//MAP = accepts a callback and applies that function to each element of an array, then return a new array
//for each 이랑 다른점은 map은 새로운 array를 return하고 for each는 원래 있는 어레이를 바꾸는거

// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

//FILTER
//.filter() = cerates a new array by filtering out elements


//javascript 에는 ===이 있는데 이는 type 과 value 가 같은지 둘다 비교해줌

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(element) {
//     return element % 2 === 0;
// }

//.reduce() = reduce the elements of an array to a single value

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(total);

// function sum(accumulator, element) {
//     return accumulator + element;
// }

//function declaration = define a resuable block of code that performs a specific task

// function hello() {
//     console.log("hello");
// }

//function expression = a way to define functions as a values or variables

// const hello = function() {
//     console.log("Hello");
// }

// hello();

// setTimeout(function(){
//     console.log("hello");
// }, 3000);

//can pass the whole function in the setTimeout

//ARROW FUNCTIONS = a concise way to write function expressions good for simple functions that you use only once
//(parameter) => some code

// const hello = () => console.log("hello");

// const hello = (name, age) => {console.log(`my name is ${name}`)
//                         console.log(`i am ${age} age old`)};

// hello("Doye", 15);

//OBJECT 
//object = {key:value, function()}

// const person1 = {
//     firstName: "Doye",
//     lastName: "Lee",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log("hi")},
//     sayBye: () => console.log("byeee"),
// }

// console.log(person.firstName);
// person.sayHello();
// person.sayBye();

// //arrow function 에서는 this 를 사용할 수 없다
// const person2 = {
//     name: "lol",
//     favFood: "pizza",
//     sayHello: function(){console.log(`hi, i am ${this.name} and i like ${this.favFood}`)},
//     sayBye: () => {console.log(`hi, i am ${this.name} and i like ${this.favFood}`)},
//     //sayHello 에서는 this 가능한데 sayBye에서는 this 를 사용할 수 없다
// }

// person2.sayHello();
// person2.sayBye();

