import "./styles.css";
import observer from "./Observer";

const btn = document.querySelector("button");
const input = document.querySelector("input");
function logEvent(data) {
  console.log("the event was triggered at", new Date().getTime(), data);
}

observer.subscribe(logEvent);

btn.addEventListener("click", () => {
  observer.notify("button");
});

input.addEventListener("click", () => {
  observer.notify("input");
});
