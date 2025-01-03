let attempts = 9;
let randomNumbers = [];

function initializeGame() {
  attempts = 9;
  document.getElementById("attempts").textContent = attempts;
  randomNumbers = generateRandomNumbers();
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("number3").value = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("game-result-img").src = "";
  document.querySelector(".submit-button").disabled = false;
}

function generateRandomNumbers() {
  const numbers = new Set();
  while (numbers.size < 3) {
    const random = Math.floor(Math.random() * 10);
    numbers.add(random);
  }
  return Array.from(numbers);
}

function check_numbers() {
  const input1 = document.getElementById("number1").value;
  const input2 = document.getElementById("number2").value;
  const input3 = document.getElementById("number3").value;

  if (!input1 || !input2 || !input3) {
    alert("모든 칸에 숫자를 입력하세요!");
    return;
  }

  if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
    alert("숫자만 입력하세요!");
    clearInputs();
    return;
  }

  const userNumbers = [parseInt(input1), parseInt(input2), parseInt(input3)];

  if (new Set(userNumbers).size !== 3) {
    alert("중복된 숫자는 입력할 수 없습니다!");
    clearInputs();
    return;
  }

  const result = calculateResult(userNumbers);
  displayResult(userNumbers, result);

  attempts--;
  document.getElementById("attempts").textContent = attempts;

  if (result === "👌3S ⚾0B") {
    endGame(true);
  } else if (attempts === 0) {
    endGame(false);
  }

  clearInputs();
}

function displayResult(userNumbers, result) {
  const resultsDiv = document.getElementById("results");
  const resultRow = document.createElement("div");
  resultRow.textContent = `${userNumbers.join("")} : ${result}`;
  resultsDiv.appendChild(resultRow);
}

function calculateResult(userNumbers) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (userNumbers[i] === randomNumbers[i]) {
      strikes++;
    } else if (randomNumbers.includes(userNumbers[i])) {
      balls++;
    }
  }

  return `👌${strikes}S ⚾${balls}B`;
}

function clearInputs() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  document.getElementById("number3").value = "";
  document.getElementById("number1").focus();
}

function endGame(isWin) {
  const resultImg = document.getElementById("game-result-img");

  if (isWin) {
    resultImg.src = "success.png";
    alert("축하합니다! 모든 숫자를 맞췄습니다.");
  } else {
    resultImg.src = "fail.png";
    alert(`게임 오버! 정답은 ${randomNumbers.join("")}입니다.`);
  }

  document.querySelector(".submit-button").disabled = true;
}

document.getElementById("reset-button").addEventListener("click", initializeGame);

initializeGame();