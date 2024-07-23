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

//STATIC keyword

// class MathUtil{
//     static PI = 3.14;
// }

// const MathUtil1 = new MathUtil();

// console.log(MathUtil1.PI); //이렇게 새로 만들 필요없음, 왜냐하면 static 이라 클래스 자체에 있기 때문

// console.log(MathUtil.PI);

//GETTER AND SETTER

//getter = special method that makes a property readable
//setter = special method that makes a property writable

// class Rectangle{
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else {
//             console.error("width must be a positive num");
//         }
//     }

//     set height(newHeight) {
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else {
//             console.error("width must be a positive num");
//         }
//     }

//     get width() {
//         return this._width;
//     }

//     get height() {
//         return this._height;
//     }
// }

// const rectangle = new Rectangle(3,4);

// console.log(rectangle.width);
// console.log(rectangle.height);

//DESTRUCTURING = extract values from arrays and objects then assign them to variables in a convenient way
//[] = to perform array destructuring
//{} = to perform object destructuring


// //기본 destructuring
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "fry cook",
// }

// // const {firstName, lastName, age, job} = person1;

// // console.log(firstName);

// //function destructuring

// function displayPerson({firstName, lastName, age, job="Unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
// }

// displayPerson(person1);

//closure = a function defined inside of another function, the inner function has access to the variables and scope of the outer function

// function outer() {
//     let message = "hello";
    
//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// message = "Goodbye";

// outer();


//ES6 module = 다른 파일에 있는 함수를 쓰는거
//mathUtil 파일을 내가 만들어야 함

// import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(PI)
// console.log(`${circumference}cm `);

//SYNCHRONOUS = executes line by line consercutively in a sequential manner code that waits for an operation to complete

//ASYNCHRONOUS = allows multiple operations to be performed concurrently without waiting doesnt block the execution flow and allows the program to continue (time goes on)
//handled with callbacks, promiese, async

// function func1(callback){
//     setTimeout(() => {console.log("Task 1");  //since there is more than 1 line of code, aft 3sex do console log and callback.
//                       callback();}, 3000);
// }

// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// func1(func2);

//ERROR = an object that is created to represent a problem that occurs, occur often w user input or establishing a connection

// console.lag("Hello"); //Uncaught TypeError: console.lag is not a function at index.js:546:9

//network error
//promise rejection
//security errors

//try {} = encloses code that might potentially cause an error
// catch {} = catch and handle any thrown errors from try{}
//finally {} = always execute

// try{
//     console.log(x);
// } catch(error) {
//     console.log(error);
// } finally {
//     console.log("this always execute");
//     //close file
//     //close connection
// }

// console.log("this is the end"); //try catch 쓰면 에러 잡고 끝에까지 도달했다는걸 확인

// try{
//     const dividend = Number(window.prompt("enter a dividend: "));
//     const divisor = Number(window.prompt("enter a divisor"));

//     if(divisor == 0) { //내가 만든 에러 조건, 이렇게 되면 에러 던지기
//         throw new Error("you cant divide by zero");
//     }

//     const result = dividend/divisor;
//     console.log(result);

// }
// catch(error) {
//     console.log(error);
// }

// console.log("you have reached the end");

//DOM = document obejct model
//obejct that represents the page you see in the web browser and provides you with an API to interact with it.
//web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
//js can access the DOm to dynamically change the content, structure, and style of a web page

// document.getElementById(); //document는 object이고 그안에 method를 부른거
// console.log(document); //html 요소 어떻게 되어 있는지
// console.dir(document); //document 라는 오브젝트 부르기, 모든 property 다 보여줌

// // document.title = "my sebsite" //title 를 바꾸기

// document.body.style.backgroundColor = "hs1(0, 0%, 15%)"; //dark mode 로 전환

// const username = "Doye";

// const welcomeMsg = document.getElementById("welcome-msg")

// welcomeMsg.textContent += username === "" ? `Guest` : username;

//ELEMENT SELECTORS = methods used to target and manipulate HTML elements

// 1. document.getElementById() //return single element if finds it, but if not return null
// 2. document.getElementsByClassName() //html collection
// 3. document.getElementsByTagName() //html collection
// 4. document.querySelector() //elemnet or null
// 5. document.querySelectorAll() //nodelist


//2. document.getElementsByClassName()
// const fruits = document.getElementsByClassName("fruits");

// console.log(fruits);

// fruits[0].style.backgroundColor = "yellow"; //apple css 바꾸기

// for(let fruit of fruits) {
//     fruit.style.backgroundColor = "yellow";
// }

// fruits.forEach(); //html collection does not have foreach method

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// }); //fruit를 array로 typecast 변환한 다음에 foreach 적용가능


// 3. document.getElementsByTagName()
// const h4Elements = document.getElementsByTagName("h4");

// console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// 4. document.querySelector() first matching element, return only one
// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

//5. document.querySelectorAll()

// const fruits = document.querySelectorAll(".fruits")

// fruits[0].style.backgroundColor = "yellow";

// const foods = document.querySelectorAll("li")

// console.log(foods); //already array so no need to type cast into array

// foods.forEach(food => {
//     food.style.backgroundColor = "yellow";
// });

//DOM navigation = the process of navigating through the strucutre of an HTML document using JS

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// }); //ul의 가장 첫번째 요소들을 색칠함, lastElement도 동일

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow"; //orange가 색칠됨, previousElementSibling 도 같은 원리

// const element = document.getElementById("apple"); //fruit 가 선택되어 모두 색칠됨
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow"; //children 도 똑같음, 얘는 array로 변환해서 사용해야 함


//ADD AND CHANGE HTML
//create element

const newH1 = document.createElement("h1");

//add arrtribute

newH1.textContent = "i like pizza";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";

//append element to dom
// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById("box1").append(newH1);

// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2")
// document.body.insertBefore(newH1, box2);

//remove HTML element
// document.getElementById("box1").removeChild(newH1);


//EVENTLISTENER = listen fro specific events to create interactive web pages
//events: click, mouseover, mouseout
//.addEventListener(event, callback)

// const myBox = document.getElementById("myBox");

// function changeColor(event) {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "outch!"
// }

// myBox.addEventListener("click", changeColor)

// //OR

// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "outch!";
// });

// //OR

// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "outch!";
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "wow";
// });

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "green";
//     event.target.textContent = "hehe";
// });

//KEY EVENTS = listen for specific events to create interactive web pages, events: keydown, keyup
//.document.addEventListener(event, callback);

// document.addEventListener("keydown", event => {
//     console.log(`key down is = ${event.key}`);
// })

// document.addEventListener("keyup", event => {
//     console.log(`key up is = ${event.key}`);
// })

// const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", event => {
//     myBox.textContent = "!!";
// })

// document.addEventListener("keyup", event => {
//     myBox.textContent = "??";
// })

//HIDE AND SHOW ELEMENT
//myImg.style.display = "none";
//myImg.style.visibility = "hidden";

//CLASSLIST = element properties in js used to interact w an element's list of classes (css classes)
//allows you to make reusable classes for many elements across your webpage
//add(),remove(), toggle(remove if present, add if not), replace(oldclass, newclass), contains()

//const my Button = document.getElementbyId("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");


//PROMISE = an object that manages asynchronous operations, wrap a promise object around {asynchronous code}
//"i promise to return a value" PENDING -> RESOLVED or REJETED, 기다렸다가 resolve 아님 reject 값 리턴함
//new Promise((resolve, reject) => {asynchronous code})

//DO THESE CHORES IN ORDER

//1.walk the dog
//2. clean the kitchen
//3. take out the trash

//example of nested code

// function walkDog(callback){
//     setTimeout(() => {
//         console.log("u walk the dog");
//         callback();
//     }, 1500);
// }
// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("u cleanKitchen");
//         callback();
//     }, 2500);
// }
// function trash(callback){
//     setTimeout(() => {
//         console.log("u take out trash");
//         callback();
//     }, 500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         trash(() => console.log("done"));
//     })
// })

// //example of code using promise

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedDog = true;
            if(walkedDog){
                resolve("u walked dog"); //resolve 의 리턴값
            } else {
                reject("u didnt walked dog"); //리젝의 리턴값
            }        
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("u cleanKitchen");
            } else {
                reject("u didnt cleanKitchen");
            }
        }, 1500);
    })
}

function trash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trash = false;
            if(trash){
                resolve("u trashed");
            } else {
                reject("u didnt trashed");
            }      
        }, 1500);
    })
}

// walkDog().then(value => {console.log(value); return cleanKitchen()}) //value is the return value
//          .then(value => {console.log(value); return trash()})
//          .then(value => console.log(value))
//          .catch(error => console.error(error));

// //catch will handle all the reject

//Async/Await = async: makes a function return a promise
//              await : makes a async function wait for a promise

//              allows you write asynchornous code in a synchornous manner
//              async does not have resolve or reject parameters
//              everything after await is place in a event queue


//sync = 순서대로 천천히
//async = 순서 상관 없이

// async function doChores(){
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const trashResult = await trash();
//     console.log(trashResult);
// }

// doChores(); //async function 이라고 declare 해야지만 안에 await 쓸 수 있음

//JSON = js obejct notation
//{key: value} or [value1, value2, value3]
//JSON.stringify() = converts a js obejct to json file
//JSON.parse() = converts a JSON string to a JS object

// const names = ["a", "b", "c", "d"];

// const jsonstring = JSON.stringify(names);

// console.log(jsonstring);

// console.log(JSON.parse(jsonstring));



