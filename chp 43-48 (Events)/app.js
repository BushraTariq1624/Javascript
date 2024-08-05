function del(){
    document.getElementById('tr1').remove()
}
var counter = 0;

function increase(){
    counter++
    // console.log(counter)
    document.getElementById('counter').innerHTML = counter
}
function decrease(){
    counter--
    document.getElementById('counter').innerHTML = counter
}