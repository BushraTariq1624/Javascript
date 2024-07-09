//question 1
var firstname=prompt("Enter your First Name:");
var lastname=prompt("Enter Your Last Name:");
var fullname=firstname+ " " + lastname;
alert("Hello & Welcome "+fullname);
document.write("</br>");

//question 2
var fvrt_Phone= prompt("Enter Your Favouroite Phone Name:");
var phone_length=fvrt_Phone.length;
document.write("Your Favourite phone is: ",fvrt_Phone,"</br>");
document.write("Length of String: ",phone_length,"</br>");
document.write("</br>");

//quetion 3
var str="Pakistani";
var index=str.indexOf('n')
document.write("String:",str,"</br>");
document.write("Index Of 'n':",index,"</br>");
document.write("</br>");

//question 4
var Strg="Hello World"
var ind=Strg.lastIndexOf('l');
document.write("String:",Strg,"</br>");
document.write("Last Index of 'l':",ind,"</br>");
document.write("</br>");

//question 5
var str="Pakistani";
var character=str.charAt(3);
document.write("String:",str,"</br>");
document.write("Character at index 3: ",character,"</br>");
document.write("</br>");

//question 6
var firstname=prompt("Enter your First Name:");
var lastname=prompt("Enter Your Last Name:");
var fullname=firstname.concat(" ",lastname);
alert("Hello & Welcome "+fullname);
document.write("</br>");

//question 7
var city="Hyderabad";
var replace=city.replace("Hyder","Islam")
document.write("City:",city,"</br>");
document.write("After Replacement:",replace,"</br>");
document.write("</br>");


//qestion 8
var message="Ali and Sami are bestfriends. They play cricket and football together.";
var rep=message.replaceAll("and","&")
document.write(rep,"</br>");
document.write("</br>");

//question 9
var x="472";
document.write("Value:",x,"</br>");
document.write("Type:",typeof(x),"</br>");
y=parseInt(x);
document.write("Value:",y,"</br>");
document.write("Type:",typeof(y),"</br>");
document.write("</br>");

//question 10
var user=prompt("Enter Your Words:")
document.write("User Input:",user,"</br>");
document.write("Upper case:",user.toUpperCase(),"</br>");
document.write("</br>");

//question 11
var user_input=prompt("Enter Your Words:")
document.write("User Input:",user_input,"</br>");
var slc=user_input.slice(0,1)
var result=slc.toUpperCase()+user_input.slice(1);
document.write("Upper case:",result,"</br>");
document.write("</br>");

//question 12
var num = 35.36;
var stg = num.toString();
document.write("Number:", num, "</br>");
var res = stg.slice(0, 2) + stg.slice(3);
document.write("Result:", res, "</br>");

//question 13
var userName = prompt("Enter your name:");
for (var i = 0; i < userName.length; i++) {
    if (userName.charCodeAt(i)==33 || userName.charCodeAt(i)==44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64) {
        alert("Please Enter A valid UserName")
    }
}

//question 14
var A=["cake","apple pie","cookie","chips","patties"]
var input=prompt("Welcome to ABC Bakery. What do want to order sir/ma'am:");
var item=input.toLowerCase()
var flg=0;
for (var i=0;i<A.length;i++){
    if(A[i]==item){
        flg=1;
        break;
    }
}
if (flg==1){
    alert(item+" is available at index "+i+" in our bakery");
}
else{
    alert("We are sorry. "+item+" is not available in our bakery.")
}

//question 15
var password=prompt("Enter Your Password:");
for (var i=0;i<password.length;i++){
    var ch=password.charCodeAt(i)
    if((ch>=65 && ch<=90) || (ch>=97 && ch<=122) || (ch>=48 && ch<=57) ){
        if(password.charCodeAt(password.slice(0,1))<=48 && password.charCodeAt(password.slice(0,1))>=57){
            if(password.length==6){
                document.write("You have Generate a correct password");
                break;
            }
            else{
                document.write("Password is too long. It can contain only 6 characters..");
                break;
            }
        }
        else{
            document.write("Password should not start from a number");
            break
        }
    }
    else{
        document.write("Password can only contain alphabets and numbers..");
        break
    }
}


//question 16
var university="University of Karachi"
var arr1=university.split("")
for(var i=0;i<arr1.length;i++){
    document.write(arr1[i],"</br>");
}

//question 17
var inpt = prompt("Enter Your Input:");
document.write("User Input:", inpt, "</br>");
for (var i = 0; i < inpt.length; i++) {
    if (i == inpt.length - 1) {
        document.write("Last character of input:", inpt[i], "</br>")
    }
}
document.write("</br>");

//questiion 18
var sent = "The quick Brown fox jumps over the lazy dog."
var count = sent.split(" ");
var counts=0;
document.write("Text: ",sent,"</br>");
for (var i=0;i<count.length;i++){
    if (count[i][0]=="t" || count[i][0]=="T"){
        counts++;
    }
}
document.write("There are ",counts," occurence of the word 'the' ");
document.write("</br>");


















