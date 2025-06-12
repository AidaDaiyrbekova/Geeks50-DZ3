const redButton = document.getElementById("red")
const yellowButton = document.getElementById("yellow")
const greenButton =document.querySelector("#green")
const commandText = document.querySelector("#command")

//
function turnRed() {
    // console.log("red!!!")
    commandText.textContent="STOP!"
    commandText.style.color="red"
    redButton.classList.add("active")
    yellowButton.classList.remove("active")
    greenButton.classList.remove("active")
}
function turnYellow() {
    // console.log("red!!!")
    commandText.textContent="WAIT!"
    commandText.style.color="yellow"
    yellowButton.classList.add("active")
    redButton.classList.remove("active")
    greenButton.classList.remove("active")
}
function turnGreen() {
    // console.log("red!!!")
    commandText.textContent="GO!"
    commandText.style.color="green"
    greenButton.classList.add("active")
    redButton.classList.remove("active")
    yellowButton.classList.remove("active")
}
function off() {
    commandText.textContent=" "
    redButton.classList.remove("active")
    yellowButton.classList.remove("active")
    greenButton.classList.remove("active")

}

redButton.addEventListener("mouseover", turnRed)
redButton.addEventListener("mouseleave", off)

yellowButton.addEventListener("mouseover", turnYellow)
yellowButton.addEventListener("mouseleave", off)


greenButton.addEventListener("mouseover", turnGreen)
greenButton.addEventListener("mouseleave", off)