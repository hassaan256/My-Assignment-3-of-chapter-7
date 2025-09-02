console.log("Javascript connected!");

// Que:1... Ans:1
// var city = prompt("Enter a city name (Karachi) ")
// if (city === "Karachi"){
// console.log("Welcome to the city of Lights!");
// } else {
// console.log("Enter a Valid city name, Hint(Kara)!");
// }


// Que:2... Ans:2
// var gender = prompt("Enter your Gender.");
// if (gender === "Male"){
// console.log("Good Morning Sir.");
// } else if (gender ==="Female"){
//     console.log("Good Morning Ma'am.");
// }


// Que:3... Ans:3
// var trafficLight = prompt("What is the color of traffice lights now ?", "First Latter in Capital")

// if (trafficLight === "Red"){
//     console.log("Must Stop!");
// } else if (trafficLight === "Yellow"){
//      console.log("Ready to move!");
// } else if (trafficLight === "Red") {
//     console.log("Move NOw!");
// } else {
//     console.log("Enter a valid color of traffic light like red, Yellow and Green and First latter must be in upper case.");
// }


// Que:4... Ans:4
// var carFuel = +prompt("Enter the remaining Petrol quantity of your Car. ","In litter like 2");


// if (carFuel == 0.25){
//     console.log("Please refill the fuel in your car.");
// } else if (carFuel <= 1) {
//     console.log("Refill your car’s petrol before it reaches 0.25.");
// } else {
//     console.log("Enjoy your Ride 🚗.");
// }


// Que:5... Ans:5 
// (a)
// var a = 4;
// if (++a === 5){
// alert("Given condition for variable a is true");
// }
// Output is True



// Que:5... Ans:5 
// (b)
// var b = 82;
// if (b++ === 83){
// alert("Given condition for variable b is true");
// } 
// Output is False



// Que:5... Ans:5 
// (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Output is condition 2 and 4 are True



// Que:5... Ans:5 
// (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Output is "The cost equals"


// Que:5... Ans:5 
// (e)
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// Output is True



// Que:5... Ans:5 
// (f)
// if("car" < "cat"){
// alert("car is smaller than cat");
// }
// Output is "car is smaller than cat"



// Que:6... Ans:6
// var sub1_Marks = +prompt("Enter your First subject marks.");
// var sub2_Marks = +prompt("Enter your Second subject marks.");
// var sub3_Marks = +prompt("Enter your Third subject marks.");

// var total = 300;
// var obtainedMarks = sub1_Marks + sub2_Marks + sub3_Marks;
// var percentage = obtainedMarks / total * 100;


// if (sub1_Marks > 100 || sub2_Marks > 100 || sub3_Marks > 100) {
//     document.write("Please enter marks between 1 to 100 in each subject.");
// } else {
//     document.write("<b>Mark Sheet</b>");
//     document.write("<br><br>Total Marks: " + total);


//     if (sub1_Marks >= 80) {
//         document.write("<br>Obtained Marks: " + obtainedMarks);
//         document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
//         document.write("<br>Grade:" + "'A-one'");
//         document.write("<br><b>Excellent</b>");

//     } else if (sub2_Marks >= 70) {
//         document.write("<br>Obtained Marks: " + obtainedMarks);
//         document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
//         document.write("<br>Grade: " + "'A'");
//         document.write("<br><b>Good</b>");
//     } else if (sub3_Marks >= 60) {
//         document.write("<br>Obtained Marks: " + obtainedMarks);
//         document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
//         document.write("<br>Grade: " + "'B'");
//         document.write("<br><b>You need to improve</b>");
//     } else {
//         document.write("<br>Obtained Marks: " + obtainedMarks);
//         document.write("<br>Percentage: " + percentage.toFixed(2) + "%");
//         document.write("<br>Grade: " + "'Fail'");
//         document.write("<br><b>Sorry</b>");
//     }
// }



// Que:7... Ans:7
// var secretNum = 4;
// var guessNum = +prompt("Guess a number between 1 to 10.");

// if (guessNum === 4){
//     console.log("Bimgo! Correct answer");
// } else if (guessNum + 1 === 6) {
//     console.log("Close enough to the correct answer.");
// } else {
//     console.log("Try Again!");
// }



// Que:8... Ans:8
// var userNum = prompt("Enter a number to check it is divisible by 3 or not.");

// if (userNum % 3 == 0){
//     console.log("Yes! It is divisble by 3.");
// } else {
//  console.log("It is not divisible by 3.");
// }



// Que:9... Ans:9
// var num = prompt("Enter a number to check it is even or add.");

// if (num % 2 === 0) {
//     console.log("It is an even number.");
// } else {
//     console.log("It is an odd number.");
// }




// Que:10... Ans:10
// var temperature = +prompt("Enter a temperature of your city.", "50")

// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//     console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today’s weather is so Cool.");
//  } else {
//     console.log("Today weather is so cold. (Stay Home)");
// }



// Que:11... Ans:11
var num1 = +prompt("Enter a first number.");
var num2 = +prompt("Enter a second number.");
var operator = prompt("Enter an operator (+, -, *, / or %)");

if (operator == "+") {
    console.log(num1 + num2);
} else if (operator == "-") {
    console.log(num1 - num2);
} else if (operator == "*") {
    console.log(num1 * num2);
} else if (operator == "/") {
    console.log(num1 / num2);
} else if (operator == "%") {
    console.log(num1 % num2);
} else {
    console.log("Enter a valid operator.");
}



