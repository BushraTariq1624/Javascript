//question 1
function power(a, b) {
    if (b === 0) {
        return 1
    }
    var result = a
    for (var i = 1; i < b; i++) {
        result *= a
    }
    return result
}
a=+prompt("Enter Base: ");
b=+prompt("Enter Power: ");
document.write("The Answer of ",a," to the Power ",b," is:",power(a,b),"</br>");
document.write("</br>");

//question 2
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.write(year + ' is a leap year </br>');
    } else {
        document.write(year + ' is not a leap year </br>');
    }
}
const year = +prompt('Enter a year:');

checkLeapYear(year);
document.write("</br>");

//question 3
function s(x,y,z){
    var s= (x+y+z)/2;
    return s;
}
function areaoftriangle(x,y,z){
    var S=s(x,y,z)
    area=S*(S-x)*(S-y)*(S-z);
    return area;
}
document.write(areaoftriangle(2,6,9),"</br>");
document.write("</br>")

//question 4
var eng=+prompt("Enter Your English Marks:");
var urdu=+prompt("Enter Your Urdu Marks:");
var maths=+prompt("Enter Your Maths Marks");
function average(eng,urdu,maths){
    var avg= (eng+urdu+maths)/3;
    return avg;
}
function percentage(eng,urdu,maths){
    var percent =(eng+urdu+maths)*100/300;
    return percent;
}
function mainfunc(){
    document.write("Your Average Marks Are: ",average(eng,urdu,maths).toFixed(2),"</br>");
    document.write("Your Percentage Is: ",percentage(eng,urdu,maths).toFixed(2),"</br>");
}
mainfunc()
document.write("</br>");

//question 5
function customIndexOf(string, letter) {
    var i = 0
    while (i < string.length) {
        if (string[i] === letter) {
            return i
        }
        i++
    }
    return -1
}
var str= prompt("Enter a string: ")
var ltr= prompt("Enter a letter: ")
alert(customIndexOf(str, ltr));

//question 6
function deleteVowel(str){
var vowel = "aeiouAEIOU"
var result = ""

var i =0;
while(i<str.length){
if(vowel.indexOf(str[i])===-1){
    result += str[i]
}
    i++
}
return result
}
alert(deleteVowel("the quick brown fox jumps over the lazy dog"));

//question 7
function countVowelPairs(text){
    var count = 0;
    var i = 0;
    while(i<text.length-1){
        var char1 = text[i].toLowerCase()
        var char2 = text[i+1].toLowerCase()
        var vowelPairs = []

        switch(true){
            case (char1==="a" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
            case (char1==="e" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
            case (char1==="i" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):  
            case (char1==="o" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):  
            case (char1==="u" && (char2 ==="a"|| char2==="e"|| char2 ==="i"|| char2 ==="o" || char2=== "u")):
                count++
                vowelPairs.push(char1+char2)
                console.log(vowelPairs)
                break
        }
        i++
    }
    return count;
}
alert(countVowelPairs("Please read this application and give me gratuity"));

//question 8
var distance=+prompt("Enter The distance Between Two Cities in km:");
function meter(distance){
    var meter=distance*1000;
    return meter;
}
function feet(distance){
    var feet=distance*3280.84;
    return feet;
}
function inches(distance){
    var inches= distance*39370.079;
    return inches;
}
function cm(distance){
    var centimeter=distance*100000;
    return centimeter;
}
document.write(distance," km is equal to ",meter(distance),"m</br>");
document.write(distance," km is equal to ",feet(distance),"ft</br>");
document.write(distance," km is equal to ",inches(distance),"inches</br>");
document.write(distance," km is equal to ",cm(distance),"cm</br>");
document.write("</br>");

//question 9
var ammountPerHour=12
var hrs= 40;
var ammount= ammountPerHour*40
document.write("The total overtime pay of employee is: ",ammount,"Rs</br>");
document.write("</br>");

//question 10
function currencyNoteCalculator(amount){//470
var note100 = Math.floor(amount/100) //4
var remainingAmount = amount%100 //70

var note50 = Math.floor(remainingAmount/50) //1
remainingAmount = remainingAmount %50 //20

var note10 = Math.floor(remainingAmount/10) //2


return[note100, note50, note10]
}
var am = +prompt("Enter your amount:")
var result = currencyNoteCalculator(am)
document.write("Note of 100: "+ result[0],"</br>");
document.write("Note of 50: "+ result[1],"</br>");
document.write("Note of 10: "+ result[2],"</br>");















