// //question 1
// var multiarray= [[],[],[],[]];

// //question2
// var array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(var i=0;i<array.length;i++){
//     for(var j=0;j<array[i].length;j++){
//         document.write(array[i][j]);
//     }
//     document.write("</br>")
// }
// document.write("</br>")

// //question 3
// for (var i=1;i<=10;i++){
//     document.write(i,"</br>")
// }
// document.write("</br>")

// //question 4
// var table=+prompt("Enter a number to show its multiplication table:");
// var table_lgth=+prompt("Enter length of ultiplication table:");
// document.write("Multiplication Table Of ",table,"</br>");
// document.write("Length ",table_lgth,"</br>");
// for(var i=1;i<=table_lgth;i++){
//     document.write(table," x ",i," = ",table*i,"</br>");
// }
// document.write("</br>")

//question 5
var fruits = ["apple", "banana","mamgo","orange","strawberry"];
for (var i=0;i<fruits.length;i++){
    document.write(fruits[i],"</br>")
}
for (var i=0;i<fruits.length;i++){
    document.write("Element at index ",i," is ",fruits[i],"</br>")
}
document.write("</br>");

//question 6
document.write("Counting:</br>");
for(var i=1;i<=15;i++){
    document.write(i,",");
}
document.write("</br>");
document.write("Reverse Counting:</br>");
for (var i=10;i>=1;i--){
    document.write(i,",");
}
document.write("</br>")
document.write('Even:</br>');
for(var i=0;i<=20;i++){
    if(i%2==0){
        document.write(i,",");
    }
}
document.write("</br>");
document.write('Odd:</br>');
for(var i=0;i<=20;i++){
    if(i%2!=0){
        document.write(i,",");
    }
}
document.write("</br>");
document.write('Series:</br>');
for(var i=1;i<=20;i++){
    if(i%2==0){
        document.write(i,"k,");
    }
}
document.write("</br>");
document.write("</br>");

//question 7
var A=["cake","apple pie","cookie","chips","patties"];
var user_needs=prompt("Welcome toABC Bakery. What do you want to order sir/ma'am:");
var avail=0
for(var i=0;i<A.length;i++){
    if(A[i]==user_needs){
        avail=1
        document.write(user_needs," is available at index ",i," in our Bakery </br>");
    }
}
if(avail!=1){
    document.write("We are sorry.",user_needs," is not available in our Bakery </br>")
}
document.write("</br>");

//question 8
var arr=[24,53,78,91,12];
arr.sort()
for(var i=0;i<arr.length;i++){
    if(i==arr.length-1){
        document.write("the greatest number in array is:",arr[i])
    }
}






