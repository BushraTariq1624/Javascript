//question 1
function date(){
    var date=new Date();
    document.write(date,"</br>");
}
date();
document.write("</br>");

//question 2
function Greetings(first,last){
    document.write("Hello "+first+" "+last+"</br>");
}
Greetings("Bushra","Tariq");
document.write("</br>");

//question 3
function addition(){
    var no1=+prompt("Enter Your First Number:");
    var no2=+prompt("Enter Your Second Number:");
    document.write("The Sum of ",no1," & ",no2," is: ",no1+no2,"</br>");
}
addition();
document.write("</br>");

//question 4
function calculator(){
    var num1=+prompt("Enter Your First Number: ");
    var num2=+prompt("Enter your second number: ");
    var operator=prompt("What You Want To Perform:(+,-,*,/,%)");
    if (operator=="+"){
        document.write("The Sum of ",num1," & ",num2," is: ",num1+num2,"</br>");
    }
    else if (operator=="-"){
        document.write("The Difference of ",num1," & ",num2," is: ",num1-num2,"</br>");
    }
    else if (operator=="*"){
        document.write("The Product of ",num1," & ",num2," is: ",num1*num2,"</br>");
    }
    else if (operator=="/"){
        document.write("The Division of ",num1," & ",num2," is: ",num1/num2,"</br>");
    }
    else if (operator=="%"){
        document.write("The Modulus of ",num1," & ",num2," is: ",num1%num2,"</br>");
    }
    else{
        document.write("Your Operation Is Wrong...");
    }
}
calculator();
document.write("</br>");

//question 5
function square(number){
    document.write("The Square of ",number," is : ",number*number,"</br>");
}
square(8);
document.write("</br>");

//question 6
function factorial(num){
    var factorial=1
    var fact=num
    for (var i=0; i<fact;i++){
        factorial *= num;
        num--;
    }
    document.write("The factorial of ",fact," is :",factorial,"</br>")
}
factorial(5);
document.write("</br>");

//question 7
function counting(start,end){
    for (var i=start;i<=end;i++){
        document.write(i,"</br>")
    }
}
counting(1,10);
document.write("</br>");

//question 8
function calculateHypotenuse(){
   function calculateSquare(x){
    return x * x
   }
   var base = +prompt("Enter the base of a right angle triangle:")
   var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:")

   var hypotenuse = Math.sqrt(calculateSquare(base)+ calculateSquare(perpendicular))

alert("The hypoteneus of right angle triangle with base "+ base+ " and perpendicular " +perpendicular+ " is "+ hypotenuse)
}
calculateHypotenuse()

//question 9(i)
function calculateArea(w, h){
    return w * h
}
alert(calculateArea(20,10))

//question 9(ii)
var width = 20;
var height = 10;

function calculateArea(w, h){
    return w * h
}
alert(calculateArea(width, height))

//question 10
function isPalindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]){//madam 5-1-1
            return str+ " is not a palindrome"
        }else{
              return str+ " is a palindrome"
        }
    }
}
document.write(isPalindrome(prompt("Enter a word:")));
document.write("</br>");

//question 11
function titleCase(str){
    var str=prompt("enter any sentence:");
    var words=str.split(" ");
    var titleCase=" ";
    for(i=0;i<words.length;i++){
        titleCase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ " ";
    }
    return titleCase;
}
document.write(titleCase());
document.write("</br>");

//question 12
function longest(str){
    document.write("Example String: ",str,"</br>");
    var splt=str.split(" ");
    var length=0;
    var longest_word=0;
    for(var i=0;i<splt.length;i++){
        if(splt[i].length>length){
            longest_word=splt[i]
            length=splt[i].length;
        }
    }
    document.write("expected output: ",longest_word,"</br>");
}
longest("we are learning javascript");
document.write("</br>");

//question 13
function counter(str,letter){
    var count=0;
    for (var i=0;i<str.length;i++){
        if (str[i].toLowerCase()==letter.toLowerCase()){
            count++;
        }
    }
    return count;
}
var str=prompt("Enter a String: ");
var ltr=prompt("Enter a String: ")
document.write("String: ",str,"</br>");
document.write("occurence of ",ltr," is: ",counter(str,ltr),"</br>");
document.write("</br>");

//question 14
var radius=+prompt("Enter The Radius: ")
function circumferrence(radius){
    var circumferrence=2*Math.PI*radius;
    document.write("The Circumference of circle is: ",circumferrence.toFixed(2),"</br>");
}
function Area(radius){
    var area=Math.PI*radius*radius;
    document.write("The Area Of circle is: ",area.toFixed(2),"</br>");
}
circumferrence(radius);
Area(radius);