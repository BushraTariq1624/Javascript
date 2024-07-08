//question1
var city= prompt("Enter Your City Name: ");
if (city== "karachi"){
    document.write("Welcome To City Of Lights! </br>")
}

//question2
var gender=prompt("Tell Me Your Gender: ");
if (gender=="male"){
    document.write("Good Morning Sir.");
}
if (gender=="female"){
    document.write("Good Morning Ma'am.");
}
document.write("</br>");

//question3
var color=prompt("Enter The Color: ");
if(color=="Red"){
    document.write("Must Stop.");
}
if(color=="Yellow"){
    document.write("Ready To Move.");
}
if(color=="Green"){
    document.write("Move Now.")
}
document.write("</br>");

//question4
var current_fuel=+prompt("Enter How Much Fuel Is Remaining In Your Car Tank (in ltr): ");
if(current_fuel<0.25){
    document.write("Please Refill The Fuel In Your Car...")
}

//question5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}
document.write("Yes The Alerts Are Working. ");

//question6
var total_marks=300;
var obtain_marks= +prompt("Tell Me Your Obtain Marks: ");
var percentage= (obtain_marks / total_marks)*100;
var grade;
var remarks;
if(percentage >= 80){
    document.write("Total Marks: "+ total_marks + "</br>");
    document.write("Obtain Marks: " + obtain_marks + "</br>");
    document.write("Percentage: "+ percentage + "</br>");
    document.write("Grade: A-one </br>");
    document.write("Remarks: Excellent </br>");
}
else if(percentage >= 70){
    document.write("Total Marks: "+ total_marks + "</br>");
    document.write("Obtain Marks: " + obtain_marks + "</br>");
    document.write("Percentage: "+ percentage + "</br>");
    document.write("Grade: A </br>");
    document.write("Remarks: Good </br>");
}
else if(percentage >= 60){
    document.write("Total Marks: "+ total_marks + "</br>");
    document.write("Obtain Marks: " + obtain_marks + "</br>");
    document.write("Percentage: "+ percentage + "</br>");
    document.write("Grade: B </br>");
    document.write("Remarks: You need to improve </br>");
}
else if(percentage < 60){
    document.write("Total Marks: "+ total_marks + "</br>");
    document.write("Obtain Marks: " + obtain_marks + "</br>");
    document.write("Percentage: "+ percentage + "</br>");
    document.write("Grade: Fail </br>");
    document.write("Remarks: Sorry </br>");
}

//question7
var secret_number=4;
var guess=+prompt("Guess The Secret Number: ");
if(guess==secret_number){
    document.write("Bingo! Correct Answer </br>");
}
if(guess==++secret_number){
    document.write("Close Enough To The Correct Answer. </br>")
}

//question8
var multiple_of_3=+prompt("Enter Your number: ")
if(multiple_of_3 % 3==0){
    document.write("Your Number Is Divisible by 3... </br>")
}
else{
    document.write("Your Number Is Not Divisible By 3... </br>")
}

//question9
var number=+prompt("Input The Number Of Your Choice: ");
if (number%2==0){
    document.write("Your Given Number Is Even! </br>");
}
if (number%2!=0){
    document.write("Your Given Number Is Odd! </br>")
}

//question10
var temp= +prompt("Input The Temperature of Your Surroundings: ");
if(temp>40){
    document.write("It's Too Hot Outside </br>");
}
else if(temp>30){
    document.write("The weather Today Is Normal </br>");
}
else if(temp>20){
    document.write("Today's Weather Is Cool </br>");
}
else if(temp>10){
    document.write("OMG! Today's Weather Is So Cool </br>");
}

//qeustion11
var num_1= +prompt("Enter Your First Number: ");
var num_2= +prompt("Enter Your Second Number: ");
var operand= prompt("Select The Operand Of Your Choice: PRESS(a. for '+' b. for '-' c. for '*' d. for '/' e. for '%')")
if(operand=="a"){
    document.write("The sum of "+ num_1 + " & " + num_2 + " is: " + (num_1+num_2) + "</br>");
}
if(operand=="b"){
    document.write("The difference of "+ num_1 + " & " + num_2 + " is: " + (num_1-num_2) + "</br>");
}
if(operand=="c"){
    document.write("The product of "+ num_1 + " & " + num_2 + " is: " + num_1*num_2 + "</br>");
}
if(operand=="d"){
    document.write("The division of "+ num_1 + " & " + num_2 + " is: " + num_1/num_2 + "</br>");
}
if(operand=="e"){
    document.write("The modulus of "+ num_1 + " & " + num_2 + " is: " + num_1%num_2 + "</br>");
}