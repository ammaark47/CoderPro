let lastOperator = null;

function calculate(operator) {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const result = document.getElementById("result");
  const history = document.getElementById("historyList");

  if (isNaN(number1) || isNaN(number2)) {
    result.textContent = "Please enter a valid number";
    return;
  }

  let number3 = 0;

  switch (operator) {
    case '+':
      number3 = number1 + number2;
      break;
    case '-':
      number3 = number1 - number2;
      break;
    case '*':
      number3 = number1 * number2;
      break;
    case '/':
      if (number2 === 0) {
        result.textContent = "Cannot divide by zero";
        return;
      }
      number3 = number1 / number2;
      break;
    default:
      result.textContent = "Unknown operator";
      return;
  }


  result.textContent = number3;

  const historyItem = document.createElement('li');

  historyItem.textContent = `${number1} ${operator} ${number2} = ${number3}`;
  history.appendChild(historyItem);
  
  lastOperator = operator;
}
