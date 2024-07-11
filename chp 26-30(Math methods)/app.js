//question 1
var  num=+prompt("Enter a Number:");
document.write("Number: ",num,"</br>");
document.write("Round Off Value: ",Math.round(num),"</br>");
document.write("Florr Value: ",Math.floor(num),"</br>");
document.write("Ceil Value: ",Math.ceil(num),"</br>");
document.write("</br>");

//question 2
var  num1=+prompt("Enter a Number:");
document.write("Number: ",num1,"</br>");
document.write("Round Off Value: ",Math.round(num1),"</br>");
document.write("Florr Value: ",Math.floor(num1),"</br>");
document.write("Ceil Value: ",Math.ceil(num1),"</br>");
document.write("</br>");

//question 3
var abs=-4;
document.write("The Absolute Value of ",abs," is: ",Math.abs(abs),"</br>");
document.write("</br>");

// //question 4
document.write("Random Dice Value: ",Math.ceil(Math.random()*6),"</br>");
document.write("</br>");

//question 5
var coin=Math.ceil(Math.random()*2);
document.write(coin,"</br>");
if (coin==1){
    document.write("Random Coin Value is: Tails</br.");
}
else{
    document.write("Random Coin Value is: Head </br>");
}
document.write("</br>");

//question 6
var rand=Math.ceil(Math.random()*100);
document.write("Random Value Between 1 & 100: ",rand,"</br>");
document.write("</br>");

//question 7
var weight=prompt("Emter your weight in kilograms: ");
document.write("The weight of is ",weight," Kilograms </br>");
document.write("</br>");

//question 8
var secret_number=Math.ceil(Math.random()*10);
var user_number=+prompt("Enter a number between 1 to 10");
if(secret_number==user_number){
    document.write("Congratulations!");
}
else{
    document.write("Try Again.")
}
document.write("</br>");