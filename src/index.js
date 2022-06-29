import "./styles.css";

var output = document.getElementById("ttext");
var button = document.getElementsByClassName("bt");

var operation1 = 0,
  operation2 = 0,
  operand = null,
  ans1 = false;

function work() {
  var value = this.getAttribute("data-value");
  if (value == "+") {
    operand = "+";
    operation1 += parseFloat(output.textContent);
    output.innerText = " ";
  } else if (value == "-") {
    operand = "-";
    operation1 -= parseFloat(output.textContent);
    output.innerText = "0";
  } else if (value == "*") {
    operand = "*";
    operation1 = parseFloat(output.textContent);
    output.innerText = " ";
  } else if (value == "/") {
    operand = "/";
    operation1 = parseFloat(output.textContent);
    output.innerText = " ";
  } else if (value == "%") {
    operand = "%";
    operation1 = parseFloat(output.textContent);
    output.innerText = " ";
  } else if (value == "=") {
    operation2 += parseFloat(output.textContent);
    var ans = eval(operation1 + operand + operation2);
    output.innerText = ans;
  } else if (value == "?") {
    operation1 = 0;
    operand = null;
    operation2 = 0;
    output.innerText = " ";
  } else if (value == "!") {
    ans1 = ture;
  } else {
    output.innerText += value;
  }
}

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", work);
}
