//question # 1
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }];
var total = 0;
var bill=0

for (var key in itemsArray) {
    document.write("The price of " + itemsArray[key].name + " is Rs." + itemsArray[key].price * itemsArray[key].quantity + "</br>")
    total+=itemsArray[key].price * itemsArray[key].quantity
}
document.write("Your total  Amount is Rs."+total+"</br>")

//question # 2
var info= {
    Name:"Bushra Tariq",
    email:"tbushra211@gmail.com",
    password: "abc123",
    age: "20",
    gender: "female",
    city: "karachi",
    country: "pakistan"
}
if (info.age){
    console.log("Age property exist in Object")
}
else{
    console.log("Age property doesn't exist in Object")
}
if (info.country){
    console.log("Country property exist in Object")
}
else{
    console.log("Country property doesn't exist in Object")
}
if (info.First_Name){
    console.log("First_Name property exist in Object")
}
else{
    console.log("First_Name property doesn't exist in Object")
}
if (info.Last_Name){
    console.log("Last_Name property exist in Object")
}
else{
    console.log("Last_Name property doesn't exist in Object")
}