
const slideshowContainer = document.querySelector(".slideshow-container")
const img = document.querySelectorAll(".img")

let indexImg = 4
function updateSlid() {
    const activeSlide = document.querySelector(".img.active")
    if (activeSlide) {
        activeSlide.classList.remove("active")
    }
    const actualSlide = img[indexImg]
    actualSlide.classList.add("active")


}

updateSlid()

slideshowContainer.onclick =  (e) => {
    const  element = e.target
    if(element.tagName !== "IMG") return

    const clickX = e.clientX
    const middle = slideshowContainer.clientWidth / 2

    if (clickX < middle) {
        indexImg--
        if (indexImg < 0) indexImg = img.length - 1
    }
    else {
        indexImg++
        if (indexImg >= img.length) indexImg = 0
    }
    updateSlid()

}

