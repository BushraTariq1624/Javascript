//question # 1
//i
var mainContent= document.getElementById("main-content")
//ii
mainContent.className= "addClass"
//iii
var render= document.getElementsByClassName("render")
// document.write(render)
for(var i=0;i<render.length;i++){
    document.write(render[i].innerHTML +"</br>")
}
//iv
var formContent=document.getElementById("form-content")
formContent.className= "addClass"
var firstName= document.getElementById("first-name")
firstName.value=render[0].innerHTML
//v
var lastName= document.getElementById("last-name")
lastName.value= render[1].innerHTML
var email = document.getElementById("email")
email.value = render[2].innerHTML

// Question # 2 
// i 
var nodetype = document.getElementById('form-content').nodeType;
// ii 
var childnodetype = document.getElementById('lastName').nodeType;
console.log(childnodetype);
// OR 
var childnodetype = document.getElementById('lastName').childNodes[0].nodeType;
// iii 
var lastName = document.getElementById("lastName").childNodes[0].nodeValue="Zainab"
console.log(lastName);
// iv 
var updatecontent1 = content.firstChild.nextSibling
var updatecontent2 = content.lastChild.previousSibling
console.log(updatecontent2);
// v
console.log(lastName.nextSibling);
console.log(lastName.previousSibling);
// vi 
var email1 = document.getElementById("email").parentNode;
var email2 = document.getElementById("email").nodeType;
console.log(email1)
