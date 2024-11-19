

function display(val) {
  document.getElementById("result").value += val;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function calculate() {
  let   
expression = document.getElementById("result").value;
  let result = eval(expression);
  document.getElementById("result").value = result;
}