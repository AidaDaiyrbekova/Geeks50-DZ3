const webButtons = document.querySelectorAll("#web-development input[type=radio]")
 const text = document.querySelector("#text")
const img = document.querySelector("#left-side")

for (const webBtn of webButtons) {
    webBtn.addEventListener("change", (event) => {
        const id = event.target.id
        switch (id) {
            case "html":
                text.textContent = "HTML — стандартизированный язык гипертекстовой разметки\n" +
                    "    документов для просмотра веб-страниц в браузере.\n" +
                    "    Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS\n" +
                    "    или открывают с локального диска, далее интерпретируют код в интерфейс\n" +
                    "    который будет отображаться на экране монитора\n" +
                    "\n"
                img.src = "html.png"
                img.alt = "Html"
                break
            case "css":
                text.textContent = "CSS — формальный язык декодирования и описания внешнего вида документа,\n" +
                    "  написанного с использованием языка разметки.\n" +
                    " Также может применяться к любым XML-документам, например, к SVG или XUL."
                img.src = "css3.png"
                img.alt = "Css"
                break
            case "js":
                text.textContent = "JavaScript — мультипарадигменный язык программирования.\n" +
                    "   Поддерживает объектно-ориентированный, императивный и функциональный стили.\n" +
                    "   Является реализацией спецификации ECMAScript.\n" +
                    "   JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.z"
                img.src = "js.jpg"
                img.alt = "HTML"
                break
        }
    });
}

webButtons[0].dispatchEvent(new Event("change"));
webButtons[0].checked = true;