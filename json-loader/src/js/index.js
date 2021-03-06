import '../css/estilos.css';
import { firstMessage, delayedMessage } from "./message.js";
import logoImg from "../images/logo.png";
import data from "./teachers.json";
import renderToDom from "./render-to-dom.js";

console.log(data);

data.teachers.forEach(teacher => {
  const element = document.createElement("li");
  element.textContent = teacher.name;
  renderToDom(element);
});

document.write(firstMessage);
delayedMessage();

const img = document.createElement("img");
img.setAttribute("src", logoImg);
img.setAttribute("width", 50);
img.setAttribute("height", 50);
document.body.append(img);

console.log("Hola mundo desde webpack.config");