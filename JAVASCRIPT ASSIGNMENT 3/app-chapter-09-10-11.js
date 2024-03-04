// CHAPTER # 09-10-11 (USER INPUT & CONDITIONAL STATEMENT)

// QUESION # 01

// var cityName = prompt ("Enter Your City Name")

// if(cityName == "Karachi"){
//     document.write ("Welcome To Cty Of Lights")
// }

// else if (cityName == "Islamabad") {
//     document.write ("Welcome To Capital Of Pakistan")
// }

// else{
//     document.write ("Please Refresh The Page & Enter Your City Name")
// }

// Quesion # 02

// var gender = prompt ("Your Gender")

// if(gender == "male") {
//     alert ("Welcome Sir")
// }

// else if (gender == "female") {
//     alert ("Welcome Ma'am")
// }

// else {
//   document.write ("Please Refresh The Page & Enter Your Gender")
// }

// Quesion # 03

//   var signalColor = prompt ("Enter the color of the road traffic signal (red, yellow, or green):")
//   var messageRed = ("Must Stop")
//   var messageGreen = ("MOve Now!")
//   var messageYellow = ("Ready To Move")

//   if (signalColor == "red") {
//     document.write("<table>")
//     document.write("<tr><th>Signal Color</th><th>Message</th></tr>")
//     document.write("<td>" + signalColor + "</td>" + "<td>" +  messageRed +"</td>")
//     document.write ("</table>")
//   }

//  else if (signalColor == "yellow") {
//     document.write("<table>")
//     document.write("<tr><th>Signal Color</th><th>Message</th></tr>")
//     document.write("<td>" + signalColor + "</td>" + "<td>" +  messageYellow +"</td>")
//     document.write ("</table>")
//   }

//   else if (signalColor == "green") {
//     document.write("<table>")
//     document.write("<tr><th>Signal Color</th><th>Message</th></tr>")
//     document.write("<td>" + signalColor + "</td>" + "<td>" +  messageGreen +"</td>")
//     document.write ("</table>")
//   }

//   else{
//     document.write ("Please Enter The Color")
//   }

// Quesion # 04

// var liter = prompt ("Fuel In Car")

// if (liter < 0.25){
//     document.write ("Please refill the fuel in your car")
// }

// else {
//     document.write ("Drive your car")
// }

// Quesion # 05

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

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

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Quesion # 06

// var markSheet = prompt ("Enter Your Roll Number");
// var rollNumber = 180058;
// var totalMarks = 300;
// var marksObtained = 290;
// var Percentage = "90%";
// var Grade = "A-one";
// var Remarks = ("Excellent");

// if (markSheet == rollNumber){
//     document.write ("<h1> Mark Sheet </h1>")
//     document.write ("<h2>" + "Total Marks:" + totalMarks + "</h2>")
//     document.write ("<h2>" + "Marks Obtained:" + marksObtained + "</h2>")
//     document.write ("<h2>" + "Percentage:" + Percentage + "</h2>")
//     document.write ("<h2>" + "Grade:" + Grade + "</h2>")
//     document.write ("<h2>" + "Remarks:" + Remarks + "</h2>")
// }
// else{
//     alert ("Enter Your Roll Number")
// }

// Quesion # 07

// var game = prompt ("Enter The Secret Number From 1 to 10")

// if (game == 4) {
//     alert ("Bingo! YOu Are Genius")
// }

// else if(game == 5) {
//     alert ("You Are Closer That Number")
// }

// else {
//     alert ("You Lose The Game")
// }

// Quesion # 08

// var message = prompt ("Please Divide")

// if (message % 3 == 0)
// {
//     alert (("is divisible by 3"))
// }

// else {
//     alert(("is not divisible by 3"))
// }

// Quesion # 09

// var numbers = prompt ("Enter the number")

// var evenNumbers = 1

// if(numbers % 2 == evenNumbers) {
//     alert ("This is even number")
// }

// else {
//     alert ("This is odd number")
// }

// Quesion # 10

// var temperature = prompt ("Enter The Temperature")

// if (temperature > 40){
//     alert ("It is too hot outside.")
// }

// else if (temperature > 30) {
//     alert ("The Weather today is Normal.")
// }

// else if (temperature > 20) {
//     alert ("Today’s Weather is cool.")
// }

// else if (temperature > 10) {
//     alert ("OMG! Today’s weather is so Cool.")
// }

// else {
//     alert ("Enter From 10 to 40")
// }

// Quesion # 11

//   // Function to perform calculation based on operation
//   function calculate(num1, num2, operation) {
//     if (operation === '+') {
//       return num1 + num2;
//     } else if (operation === '-') {
//       return num1 - num2;
//     } else if (operation === '*') {
//       return num1 * num2;
//     } else if (operation === '/') {
//       if (num2 === 0) {
//         return "Cannot divide by zero!";
//       }
//       return num1 / num2;
//     } else if (operation === '%') {
//       return num1 % num2;
//     } else {
//       return "Invalid operation!";
//     }
//   }

//   // Get input from the user
//   var num1 = parseFloat(prompt("Enter the first number:"));
//   var num2 = parseFloat(prompt("Enter the second number:"));
//   var operation = prompt("Enter the operation (+, -, *, /, %):");

//   // Check if the input is valid
//   if (!isNaN(num1) && !isNaN(num2)) {
//     var result = calculate(num1, num2, operation);
//     alert("Result: " + result);
//   } else {
//     alert("Invalid input! Please enter valid numbers.");
//   }

// var firstNumber = prompt ("Enter First Number")
// var secondNumber = prompt ("Enter Second Number")
// var operations = prompt ("Enter the operation (+, -, *, /, %):")

// if (operations = "+") {
//     alert (firstNumber + secondNumber)
// }

// else if (operations = "-") {
//     alert (firstNumber - secondNumber)
// }