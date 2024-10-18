const button = document.querySelector(".button")
const input = document.querySelector(".input")
const result = document.querySelector(".result")

function checkResult() {
    const randomNumber = Math.floor(Math.random() * 10) + 1
    const guess = input.value
    if (randomNumber == guess) {
        result.textContent = "Поздравляю!!!! Вы угодали число!"
    } else {
        result.textContent = "Ксажелению вы не угодали.Загаданое число:" + randomNumber
    }
}

button.addEventListener("click", checkResult)