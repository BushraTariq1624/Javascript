//question1
var num1 = +prompt("enter your 1st number:");
var num2 = +prompt("enter your 2nd number:");
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is: " +sum + "<br/>");
document.write("<br/>");

//question2
var sub = num1 - num2;
var product = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("The subtraction of " + num1 + " and " + num2 + " is: " +sub + "<br/>");
document.write("The multiplication of " + num1 + " and " + num2 + " is: " +product + "<br/>");
document.write("The division of " + num1 + " and " + num2 + " is: " +division + "<br/>");
document.write("The modulus of " + num1 + " and " + num2 + " is: " +modulus + "<br/>");
document.write("<br/>");

//question3
var variable;
document.write("Value after variable declaration is: " + variable  + "<br/>");
variable = 5;
document.write("Initial value: " +variable + "<br/>");
++variable;
document.write("Value after increament is: " + variable + "<br/>");
variable = variable+7;
document.write("Value after addition is: "+ variable + "<br/>");
--variable;
document.write("Value after decreament is: " + variable + "<br/>");
variable = variable % 3;
document.write("The remainder is: " + variable + "<br/>");
document.write("<br/>");

//question4
var cost = 600;
cost = cost *5;
document.write("Total cost to buy 5 tickets to a movie is: " + cost + "PKR" + "<br/>");
document.write("<br/>");

//question5
var table_number=4;
var counter=1;
var inc =1;
document.write(
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"+
    table_number + " x " + inc++ + " = "+ table_number*counter++ + "<br/>"
 );
 document.write("<br/>");

//question6
var celsius = 25;
var celsiustofahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is: " + celsiustofahrenheit + "°F" + "<br/>");
var fahrenheit = 70;
var fahrenheittocelsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is: " + fahrenheittocelsius + "°C" + "<br/>");
document.write("<br/>");

//question7
var price_item1= 650;
var price_item2= 100;
var quantity_item1= 3;
var quantity_item2= 7;
var shipping_charges= 100;
var total= (price_item1 * quantity_item1) + (price_item2 * quantity_item2) + shipping_charges;
document.write("Price of item 1 is: " + price_item1 + "<br/>");
document.write("Quantity of item 1 is: " + quantity_item1 + "<br/>");
document.write("Price of item 2 is: " + price_item2 + "<br/>");
document.write("Quantity of item 2 is: " + quantity_item2 + "<br/>");
document.write("Shipping charges: " + shipping_charges + "<br/>");
document.write("Total cost of your order is: " + total + "<br/>");
document.write("<br/>");

//question8
var total_marks= 980;
var obtain_marks= 804;
var percentage=(obtain_marks / total_marks) * 100;
document.write("Total Marks: "+ total_marks + "<br/>");
document.write("Marks Obtained: "+ obtain_marks + "<br/>");
document.write("Percentage: "+ percentage + "<br/>");
document.write("<br/>");

//question9
var currency= (10 * 104.80) + (25 * 28);
document.write("Total currency in PKR:" + currency + "<br/>");
document.write("<br/>");

//question10
var number= 4;
var calculations= ((number+5)*10)/2;
document.write("The Output of Your Calculations is: " + calculations + "<br/>");
document.write("<br/>");

//question11
var current_year= 2024;
var birth_year= 2004;
var age= current_year - birth_year;
var possible_age= age-1;
document.write("Current Year:"+ current_year + "<br/>");
document.write("Birth Year: " + birth_year + "<br/>");
document.write("Your Age: "+ age + "<br/>");
document.write("They Are either "+possible_age+ " or " + age + " years old");
document.write("<br/>");

//question12
var radius= 20;
var circumference= 2 * 3.142 * radius;
var area= 3.142 * (radius * radius);
document.write("The Geometrizer" + "<br/>");
document.write("Radius of a circle: " + radius + "<br/>");
document.write("The circumference is: " + circumference + "<br/>");
document.write("The Area is: "+ area + "<br/>");
document.write("<br/>");

//question13
var snack= "cookies";
var current_age= 20;
var maximum_age= 40;
var estimate_ammount= 5;
var eat= (maximum_age - current_age) * estimate_ammount;
document.write("You will need " + eat + snack + " to last you until the ripe old age of " + maximum_age);
document.write("<br/>");