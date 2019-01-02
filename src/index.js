import "./style.css";

class Calculator {
  add(n1, n2) {
    return n1 + n2;
  }
}

const component = () => {
  let element = document.createElement("div");

  element.innerHTML = "Hello Ronaldo";
  element.classList.add("hello");

  return element;
};

document.body.appendChild(component());
const calculator = new Calculator();
console.log("calc add", calculator.add(1, 2));
