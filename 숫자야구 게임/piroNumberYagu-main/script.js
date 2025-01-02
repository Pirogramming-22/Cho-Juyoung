let attempts = 9;
const answer = [];
while (answer.length < 3) {
    const num = Math.floor(Math.random() * 10);
    if (!answer.includes(num)) answer.push(num);
}

document.getElementById('attempts').textContent = attempts;

function checkNumbers() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const num3 = document.getElementById('number3').value;

    if (!num1 || !num2 || !num3) {
        alert('모든 숫자를 입력하세요.');
        clearInputs();
        return;
    }

    const userGuess = [parseInt(num1), parseInt(num2), parseInt(num3)];
    if (new Set(userGuess).size !== 3) {
        alert('중복된 숫자는 입력할 수 없습니다.');
        clearInputs();
        return;
    }

    let strikes = 0, balls = 0;
    userGuess.forEach((num, idx) => {
        if (num === answer[idx]) strikes++;
        else if (answer.includes(num)) balls++;
    });

    displayResult(userGuess, strikes, balls);
    attempts--;
    document.getElementById('attempts').textContent = attempts;

    if (strikes === 3 || attempts === 0) endGame(strikes === 3);
}

function displayResult(guess, strikes, balls) {
    const resultDiv = document.createElement('div');
    if (strikes === 0 && balls === 0) {
        resultDiv.textContent = `${guess.join('')} : O`;
    } else {
        resultDiv.textContent = `${guess.join('')} : ${strikes}S ${balls}B`;
    }
    document.getElementById('results').appendChild(resultDiv);
    clearInputs();
}

function clearInputs() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('number3').value = '';
    document.getElementById('number1').focus();
}

function endGame(isWin) {
    alert(isWin ? '정답입니다!' : `게임 오버! 정답은 ${answer.join('')}입니다.`);
    document.getElementById('game-result-img').src = isWin ? 'success.png' : 'fail.png';
    document.querySelector('.submit-button').disabled = true;
}