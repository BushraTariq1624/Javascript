//queation 1
var date=new Date()
document.write(date,"</br>");
document.write("</br>");

//question 2
var months=["January","February","March","April","May","June","July","August","September","Octuber","November","December"];
document.write("Current Month: ",months[date.getMonth()],"</br>");
document.write("</br>");

//question 3
var days=["sum","Mon","Tue","Wed","Thu","Fri","Sat"];
document.write("Today is ",days[date.getDay()],"</br>");
document.write("</br>");

//question 4
if (date.getDay()==0 || date.getDay()==6){
    document.write("It's Fun day </br>");
}
else{
    document.write("It's Working Day </br>");
}
document.write("</br>");

//question 5
if (date.getDate()<=15){
    document.write("First Fifteen Days Of The Months. </br>");
}
else{
    document.write("Last Fifteen Days Of The Month. </br>")
}
document.write("</br>");

//question 6
document.write("Current Date ",date,"</br>");
var midnight=date.getTime()
document.write("Elapsed milliseconds since january 1, 1970: ",midnight,"</br>");
document.write("Elapsed minutes since january 1, 1970: ",midnight/(1000*60),"</br>");
document.write("</br>");

//question 7
var hour= date.getHours();
if (hour<=11){
    document.write("It's AM </br>");
}
else{
    document.write("It's PM </br>");
}
document.write("</br>");

//question 8
var later_date= new Date("12 31 2020");
document.write("Later Date: ",later_date,"</br>");
document.write("</br>");

//question 9
var ramadan=new Date("june 8 2015");
var passed= date.getTime()-ramadan.getTime()
var been_passed=passed/(1000*60*60*24);
document.write(been_passed," days have passed since 1st Ramadan, 2015 </br>");
document.write("</br>");

//question 10
var begin=new Date("1 1 2015");
var pass=date.getTime()- begin.getTime()
var ref_pass= pass/1000;
document.write("On reference Date ",date,",</br>",Math.round(ref_pass)," seconds has passed since begining of 2015.</br>");
document.write("</br>");

//question 11
var new_date=date.toString()
document.write("Current Date: ",new_date,"</br>");
var new_hour=date.getHours()-1;
document.write("1 hour ago, It was ",new_date.replace(date.getHours(),new_hour,"</br>"));
document.write("</br>");
document.write("</br>");

//question 12
document.write("current date: ",date,"</br>");
date.setFullYear(1915);
document.write("100 year back, it was ",date,"</br>");
document.write("</br>");

//question 13
date=new Date();
var birthday = new Date("11 16 2004");
var age =date.getTime() - birthday.getTime();
document.write("Your age is : ",Math.round(age/(1000*60*60*24*365)),"</br>");
var years = date.getFullYear() - birthday.getFullYear()
document.write("Your birth year is: ",birthday.getFullYear(),"</br>");
document.write("</br>");

//question 14
document.write("<h1>K-Electric Bill </h1></br>");
var custumer_name="ABC Custumer";
var Month="February";
var units=410;
var charges=16;
var net_ammount=units*charges;
var late=350;
var gross=net_ammount+late;
document.write("Custumer name : ",custumer_name,"</br>","Month : ",Month,"</br>","Number of units : ",units.toFixed(2),"</br>","Charges pe unit : ",charges.toFixed(2),"</br></br>","Net Ammount Payable( within due date) : ",net_ammount.toFixed(2),"</br>","Lste Payment Surchase : ",late.toFixed(2),"</br>","Gross Amount payable after due date : ",gross.toFixed(2),"</br>");