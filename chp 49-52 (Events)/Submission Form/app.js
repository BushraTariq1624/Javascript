document.getElementById("signUp").addEventListener("submit",function(e){
    e.preventDefault()
    var name=document.getElementById("name").value
    var age=document.getElementById("age").value
    var city=document.getElementById("city").value
    var depart=document.getElementById("depart").value
    var uni=document.getElementById("uni").value

    var formData=document.getElementById("formData")
    formData.innerHTML= name + " is " + age + " year old, form " + city +"</br> study in " + depart+" department at " +uni;
    document.getElementById("signUp").reset()
})