import { useState } from 'react';
import './App.css';


function App() {

  const [input, setinput] = useState("0")

  const result = (input) => {
    try {
      const operators = ["+", "-", "*", "/", "%"];
      let operator = null;
      for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (operators.includes(element)) { // checking if any of the above mantioned operators is present in input on every index.
          operator = element// storing the operator in operator on which every number it is present in the array
          break;
        }
      }
      if (!operator) {
        setinput(parseFloat(input).toString())
        return;
      }
      const [operand1, operand2] = input.split(operator).map(parseFloat);
      let result;

      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;

        default:
          throw new console.error('Invalid Operator');
      }
      setinput(result.toString());

    } catch (error) {
      setinput('Error')

    }
  }
  const handleButtonClick = (value) => {
    if (value === "C") {
      setinput('')
    } else if (value === "<") {
      setinput(input.slice(0, -1))
    } else if (value === "=") {
      result(input)
    }
    else {
      setinput((preValue) => preValue + value)
    }

  }
  return (
    <div className="container">
      <div className="calculator">
        <h1 id="input">{input}</h1>
        <div className="btn-row">
          <button className="btn" onClick={() => handleButtonClick("C")}>C</button>
          <button className="btn" onClick={() => handleButtonClick("<")}>&lt;</button>
          <button className="btn" onClick={() => handleButtonClick("%")}>%</button>
          <button className="btn" onClick={() => handleButtonClick("/")}>/</button>
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => handleButtonClick("7")}>7</button>
          <button className="btn" onClick={() => handleButtonClick("8")}>8</button>
          <button className="btn" onClick={() => handleButtonClick("9")}>9</button>
          <button className="btn" onClick={() => handleButtonClick("+")}>+</button>
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => handleButtonClick("4")}>4</button>
          <button className="btn" onClick={() => handleButtonClick("5")}>5</button>
          <button className="btn" onClick={() => handleButtonClick("6")}>6</button>
          <button className="btn" onClick={() => handleButtonClick("-")}>-</button>
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => handleButtonClick("1")}>1</button>
          <button className="btn" onClick={() => handleButtonClick("2")}>2</button>
          <button className="btn" onClick={() => handleButtonClick("3")}>3</button>
          <button className="btn" onClick={() => handleButtonClick("*")}>*</button>
        </div>

        <div className="btn-row">
          <button className="btn" onClick={() => handleButtonClick("0")}>0</button>
          <button className="btn" onClick={() => handleButtonClick("00")}>00</button>
          <button className="btn" onClick={() => handleButtonClick(".")}>.</button>
          <button className="btn" onClick={() => handleButtonClick("=")}>=</button>
        </div>

      </div>

    </div>
  );
}

export default App;
