// //question1
// var a=10;
// document.write("Result:" + "<br/>");
// document.write("The value of a is: " +a + "<br/>");
// document.write("The value of ++a is: "+ ++a + "<br/>");
// document.write("Now the value of a is: "+a + "<br/>");
// document.write("The value of a++ is: "+ a++ + "<br/>");
// document.write("Now the value of a is: "+a + "<br/>");
// document.write("The value of --a is: "+ --a + "<br/>");
// document.write("Now the value of a is: "+a + "<br/>");
// document.write("The value of a-- is: "+ a-- + "<br/>");
// document.write("Now the value of a is: "+a + "<br/>");
// document.write("<br/>");

// //question2
// var a=2;
// var b=1;
// var result= --a - --b + ++b + b--;
// // --a; ===> 1
// // --a - --b; 1 - 0
// // --a - --b + ++b; 1 - 0 + 1 
// // --a - --b + ++b + b--; 1 - 0 + 1 + 1
// document.write("a is " + a + "<br/>");
// document.write("b is " +b + "<br/>");
// document.write('result is: '+ result+ "<br/>");
// document.write("<br/>");

// //question3
// var name= prompt("Tell me your beautiful name: ");
// document.write("Hello "+ name +"!" + "<br/>");
// document.write("<br/>");

// //question4
// table_num= +prompt("Enter the number you want the table of: ");
// var counter= 1;
// var inc=1;
// if(table_num!= 0){
//     document.write(
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" 
//     );
// }
// else{
//     table_num=5;
//     document.write(
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" +
//         table_num + " x " + inc++ + " = " + table_num*counter++ + "<br/>" 
//     );
// }
// document.write("<br/>");

//question6
var sub1 = prompt("Enter Your First Subject: ");
var sub2 = prompt("Enter Your Second Subject: ");
var sub3 = prompt("Enter Your Third Subject: ");
var total = 300;
var per_sub=100;
var obt_sub1 = +prompt("Enter Your " + sub1 + " Marks ");
var obt_sub2 = +prompt("Enter Your " + sub2 + " Marks ");
var obt_sub3 = +prompt("Enter Your " + sub3 + " Marks ");
var obtain = obt_sub1 + obt_sub2 + obt_sub3;
var percentage = (obtain / total) * 100;
document.write(percentage)

document.write(
    "<table border='1px'>" +
    "<tr>" +
    "<th>" + "Subject" + "</th>" +
    "<th>" + "Total Marks" + "</th>" +
    "<th>" + "Obtain Marks" + "</th>" +
    "<th>" + "Percentage" + "</th>"
    + "</tr>" +

    "<tr>" + 
    "<td>"+ sub1 +"</td>" +
    "<td>"+ per_sub + "</td>"+
    "<td>"+ obt_sub1 + "</td>"+
    "<td>"+ (obt_sub1 / per_sub)*100 +"%" + "</td>"
    +"</tr>" +

    "<tr>" + 
    "<td>"+ sub2 +"</td>" +
    "<td>"+ per_sub + "</td>"+
    "<td>"+ obt_sub2 + "</td>"+
    "<td>"+ (obt_sub2 / per_sub)*100 +"%" + "</td>"
    +"</tr>"+

    "<tr>" + 
    "<td>"+ sub3 +"</td>" +
    "<td>"+ per_sub + "</td>"+
    "<td>"+ obt_sub3 + "</td>"+
    "<td>"+ (obt_sub1 / per_sub)*100 +"%" + "</td>"
    +"</tr>"+

    "<tr>"+ 
    "<td>"+"</td>"+
    "<td>"+ total +"</td>"+
    "<td>"+ obtain +"</td>"+
    "<td>"+ percentage +"</td>"
    +"</tr>"

    + "</table>"
)