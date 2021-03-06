const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CL = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreetings(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CL);
  form.addEventListener("submit", handleSubmit);
}

function paintGreetings(text) {
  form.classList.remove(SHOWING_CL);
  greeting.classList.add(SHOWING_CL);
  greeting.innerText = `${text}'s To Do List🦊 `;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreetings(currentUser);
  }
}

function init() {
  loadName();
}

init();
