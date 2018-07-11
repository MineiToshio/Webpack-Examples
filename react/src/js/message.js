import renderToDom from "./render-to-dom.js";
import makeMessage from "./make-message.js";

const waitTime = new Promise((todoOk, todoMal) => {
  setTimeout(() => {
    todoOk("Han pasado 3 segundos!");
  }, 3000);
});

module.exports = {
  firstMessage: "hola mundo desde un módulo",
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message);
    renderToDom(makeMessage(message));
  }
}