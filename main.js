var input = document.getElementById("user_input");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
function calculator(num) {
  input.value = input.value + num;
  input.style.textAlign = 'top'
}
function result() {
  var result = eval(input.value);
  input.value = result
  input.style.textAlign = 'end'
  
}
function clear(){
    input.value = ' '
}
function removeOne(){
var removeOne = input.value
input.value = removeOne.toString().slice(0,-1)
}
