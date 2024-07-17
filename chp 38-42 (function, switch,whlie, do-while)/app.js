// //question 1
// function power(a, b) {
//     if (b === 0) {
//         return 1
//     }
//     var result = a
//     for (var i = 1; i < b; i++) {
//         result *= a
//     }
//     return result
// }
// a=+prompt("Enter Base: ");
// b=+prompt("Enter Power: ");
// document.write("The Answer of ",a," to the Power ",b," is:",power(a,b),"</br>");
// document.write("</br>");

// //question 2
// function checkLeapYear(year) {
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         document.write(year + ' is a leap year </br>');
//     } else {
//         document.write(year + ' is not a leap year </br>');
//     }
// }
// const year = +prompt('Enter a year:');

// checkLeapYear(year);
// document.write("</br>");

//question 3
function areaoftriangle(x,y,z){
    var s=(x+y+z)/2;
    area=s*(s-x)*(s-y)*(s-z);
    return area;
}
document.write(areaoftriangle(x,y,z))