import "./style.css";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = "Hello Ronaldo";
  element.classList.add("hello");

  return element;
};

document.body.appendChild(component());
