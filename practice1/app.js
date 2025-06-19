const countNum = document.getElementById("countNum")
const inc = document.getElementById("inc")
const dec = document.getElementById("dec")
const reset = document.getElementById("reset")


 let counterIndex = 0
countNum.textContent = counterIndex
countNum.style.color = "#ffbb00"

function changeColor(){
    if (counterIndex > 0) {
        countNum.style.color = "#24ff4b";
    } else if (counterIndex < 0) {
        countNum.style.color = "#be0707";
    } else{
        countNum.style.color = "#ffbb00";
    }
}


inc.addEventListener("click" , function (){
    counterIndex++
    countNum.textContent= counterIndex
    changeColor()
})

dec.addEventListener("click" , function (){
    counterIndex--
    countNum.textContent= counterIndex
   changeColor()
})

reset.addEventListener("click" , function (){
    counterIndex = 0
    countNum.textContent = counterIndex
    changeColor()
})

