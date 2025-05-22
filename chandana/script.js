var input = "";
var storedValue = 0;

function press(value) {
  if (value === "C") {
    input = "";
  } else {
    input = input + value;
  }
  updateDisplay();
}

function calculate() {
  var operator = "";
  var num1 = "";
  var num2 = "";
  var foundOperator = false;

  // Find operator manually
  for (var i = 0; i < input.length; i++) {
    var ch = input.charAt(i);
    if (ch === "+" || ch === "-" || ch === "*" || ch === "/") {
      operator = ch;
      foundOperator = true;
      num1 = input.substring(0, i);
      num2 = input.substring(i + 1);
      break;
    }
  }

  if (foundOperator) {
    var n1 = parseFloat(num1);
    var n2 = parseFloat(num2);
    var result = 0;

    if (operator === "+") {
      result = n1 + n2;
    } else if (operator === "-") {
      result = n1 - n2;
    } else if (operator === "*") {
      result = n1 * n2;
    } else if (operator === "/") {
      if (n2 === 0) {
        result = "Error";
      } else {
        result = n1 / n2;
      }
    }

    if (result !== "Error") {
      storedValue = result;
    }

    input = result.toString();
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = input;
  document.getElementById("stored").innerHTML = "Stored: " + storedValue;
}
