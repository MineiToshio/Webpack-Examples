import '../css/estilos.css';
import { firstMessage, delayedMessage } from "./message.js";
import logoImg from "../images/logo.png";

document.write(firstMessage);
delayedMessage();

const img = document.createElement("img");
img.setAttribute("src", logoImg);
img.setAttribute("width", 50);
img.setAttribute("height", 50);
document.body.append(img);

console.log("Hola mundo desde webpack.config");