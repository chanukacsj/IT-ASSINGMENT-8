var array = ["A", "B", "C", "D", "E", "F"];
var myInterval = null;


function removeElement() {
    let last = array.pop();
    array.unshift(last)
    console.log(array)
    $("#num1").text(array[0])
    $("#num2").text(array[1])
    $("#num3").text(array[2])
    $("#num4").text(array[3])
    $("#num5").text(array[4])
    $("#num6").text(array[5])
}


 $("#btn").click(function(){
     clearInterval(myInterval,1000)
     myInterval = setInterval(removeElement,1000)
 })
 $("#btn1").click(function(){
     clearInterval(myInterval,1000)
 })