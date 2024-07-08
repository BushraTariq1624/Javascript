//qeustion1
var std_names=[];

//question2
var objNot= new std_names();

//question3
var clothing_brands= ["Zara" , "Gucci" , "Asim Jofa" , "Sana Safinaz"];

//question4
var numbers= [10,20,30,40,50,60,70,80,90,100];

//question5
var boolean = [true, false];

//question6
var mixed_array = ["Bushra", 16, True, "Tariq", false, 24,"BSCS"];

//question7
var qualify=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("Qualifications: ");
document.write("1) "+qualify[0]+"</br>"+ "2) "+qualify[1]+"</br>"+" 3) "+qualify[2]+"</br>"+ "4) "+qualify[3]+"</br>"+ "5) "+qualify[4]+"</br>"+ "6) "+qualify[5]+"</br>"+ "7) "+qualify[6]+"</br>"+ "8) "+qualify[7]+"</br></br>");

//question8
var student_names= ["Michael", "John", "Tony"];
var scores=[320,230,480];
total=500;
document.write("Score of ",student_names[0]," is ", scores[0], ". Percentage: ",(scores[0]/total)*100,"%</br>");
document.write("Score of ",student_names[1]," is ", scores[1], ". Percentage: ",(scores[1]/total)*100,"%</br>");
document.write("Score of ",student_names[2]," is ", scores[2], ". Percentage: ",(scores[2]/total)*100,"%</br></br>");

//queston9
var colors=["red","blue","green","orange","black"]
document.write(colors,"</br>");
colors.unshift(prompt("Enter the Color You Want To Add In The Starting Of The List:"));
document.write(colors,"</br>");
colors.push(prompt("Enter the Color You Want To Add In The End Of The List:"));
document.write(colors,"</br>");
colors.unshift("gray","white");
document.write(colors,"</br>");
colors.shift();
document.write(colors,"</br>");
colors.pop();
document.write(colors,"</br>");
colors.splice(prompt("Enter The Index You Want to Add Silver:"),0);
document.write(colors,"</br>");
colors.splice(prompt("Enter The Index From Which The Deletion Starts"),prompt("Enter The Index From Which The Deletion Ends"));
document.write(colors,"</br></br>");

//question10
var student_scores=[320,230,480,120];
document.write("Scores of Students: ",student_scores,"</br>");
student_scores.sort();
document.write("Ordered Scores of Students:",student_scores,"</br></br>");

//question11
var cities=["Karachi","Lahore","Islamabad","Peshawar","Quetta","Multan"];
document.write("Cities List: </br>",cities,"</br>");
var selected_list=cities.slice(1,4);
document.write("Selected Cities List: </br>",selected_list,"</br></br>");

//question12
var pet=["This","is","my","cat"];
document.write("Array: </br>",pet,"</br>");
var join = pet.join(" ");
document.write("String: </br>", join,"</br></br>");

//question13
var devices=["Keyboard","Mouse","Printer","Monitor"];
document.write("Devices: </br>",devices,"</br>");
document.write("Out </br>",devices[0],"</br>");
document.write("Out </br>",devices[1],"</br>");
document.write("Out </br>",devices[2],"</br>");
document.write("Out </br>",devices[3],"</br></br>");

//question14
var devices=["Keyboard","Mouse","Printer","Monitor"];
document.write("Devices: </br>",devices,"</br>");
document.write("Out </br>",devices[3],"</br>");
document.write("Out </br>",devices[2],"</br>");
document.write("Out </br>",devices[1],"</br>");
document.write("Out </br>",devices[0],"</br></br>");

//question15
var manufacturers=["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];
document.write("<select>",
'<option value=',manufacturers[0],'>',manufacturers[0],'</option>',
'<option value=',manufacturers[1],'>',manufacturers[1],'</option>',
'<option value=',manufacturers[2],'>',manufacturers[2],'</option>',
'<option value=',manufacturers[3],'>',manufacturers[3],'</option>',
'<option value=',manufacturers[4],'>',manufacturers[4],'</option>',
'<option value=',manufacturers[5],'>',manufacturers[5],'</option>',
"</select>");