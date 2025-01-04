let timerInterval;
let elapsedTime = 0;

function updateTime() {
    elapsedTime++;
    const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, "0");
    const seconds = String(elapsedTime % 60).padStart(2, "0");
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start").addEventListener("click", () => {
    if (!timerInterval) {
        timerInterval = setInterval(updateTime, 1000);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("time").textContent = "00:00:00";
});

document.getElementById("add-record").addEventListener("click", () => {
    const records = document.getElementById("records");
    const listItem = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const timeText = document.createTextNode(document.getElementById("time").textContent);

    listItem.appendChild(checkBox);
    listItem.appendChild(timeText);
    records.appendChild(listItem);
});

document.getElementById("delete-selected").addEventListener("click", () => {
    const records = document.getElementById("records");
    const items = records.querySelectorAll("li");

    items.forEach(item => {
        if (item.querySelector("input[type='checkbox']").checked) {
            item.remove();
        }
    });
});

document.getElementById("delete-all").addEventListener("click", () => {
    const records = document.getElementById("records");
    records.innerHTML = "";
});