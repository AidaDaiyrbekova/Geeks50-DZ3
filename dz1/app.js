const textCoin = document.getElementById("coin")
const clickerButton = document.getElementById("clicker")
const textEnergy = document.getElementById("energy")

let countCoin = 0
let countEnergy = 100

clickerButton.addEventListener('click', function () {
    if (countEnergy <= 0) {
        return;
    }
    else
        countCoin += 5
        countEnergy -= 5

        textCoin.textContent =countCoin
        textEnergy.textContent = countEnergy

});
