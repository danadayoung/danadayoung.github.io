const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    todo = document.querySelector(".js-todo");

const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    HIDING_CN = "hiding";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.replace(SHOWING_CN, HIDING_CN);
    todo.classList.add(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Welcome, <strong>${text}</strong>`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        form.classList.add(HIDING_CN);
        todo.classList.replace(HIDING_CN, SHOWING_CN);
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();