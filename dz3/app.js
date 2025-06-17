
let monthsContainer = document.getElementById('monthsContainer')
let winter = document.getElementById("winterBtn")
let spring = document.getElementById("springBtn")
let summer = document.getElementById("summerBtn")
let autumn = document.getElementById("autumnBtn")


function MonthButtons(months) {
    monthsContainer.innerHTML = ''
    for (let i = 0; i < months.length; i++) {
       let monthBtn = document.createElement('button')
        monthBtn.textContent = months[i]
        if (['Декабрь', 'Январь', 'Февраль'].includes(months[i])) {
            monthBtn.style.backgroundColor = '#5acbcb'
            monthBtn.style.borderRadius = "10px"
            monthBtn.style.border = "#5acbcb"
        }

        if (['Март', 'Апрель', 'Май'].includes(months[i])) {
            monthBtn.style.backgroundColor = '#d56515'
            monthBtn.style.borderRadius = "10px"
            monthBtn.style.border = "#d56515"
        }

        if (['Июнь', 'Июль', 'Август'].includes(months[i])) {
            monthBtn.style.backgroundColor = '#29cc49'
            monthBtn.style.borderRadius = "10px"
            monthBtn.style.border = "#29cc49"
        }

        if (['Сентябрь', 'Октябрь', 'Ноябрь'].includes(months[i])) {
            monthBtn.style.backgroundColor = '#e1c130'
            monthBtn.style.borderRadius = "10px"
            monthBtn.style.border = "#e1c130"
        }
        monthsContainer.append(monthBtn)
    }
}


winter.addEventListener('click', function() {
    MonthButtons(['Декабрь', 'Январь', 'Февраль'])
    document.body.style.backgroundColor = "#5acbcb"

    //MonthButtons.style.backgroundColor = "#5acbcb"
})
spring.addEventListener('click', function() {
    MonthButtons(['Март', 'Апрель', 'Май'])
    document.body.style.backgroundColor = "#d56515"
    // document.body.style.backgroundColor = "#d56515"
})

summer.addEventListener('click', function() {
    MonthButtons(['Июнь', 'Июль', 'Август'])
    document.body.style.backgroundColor = "#29cc49"
    // document.body.style.backgroundColor = "#29cc49"
})

autumn.addEventListener('click', function() {
    MonthButtons(['Сентябрь', 'Октябрь', 'Ноябрь'])
    document.body.style.backgroundColor = "#e1c130"
    // document.body.style.backgroundColor = "#e1c130"
})