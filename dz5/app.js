
const numbers = [1,3,5,7]
function Number(value){
    const div = document.createElement("div")
    div.className = "array-item"
    div.textContent = value
    return div
}

const updatedContainer = document.querySelector("#updated")

const buttons = document.querySelector("#btn")

buttons.onclick = (event) => {
    const  element = event.target

    if(element.tagName !== "BUTTON") return
    updatedContainer.innerHTML = ""

    const updated = numbers.map((item) => {
        const randomIndex = Math.floor(Math.random() * numbers.length)
        return  numbers[randomIndex]
    })
    const randNum = updated.map(Number);
    updatedContainer.append(...randNum);
}