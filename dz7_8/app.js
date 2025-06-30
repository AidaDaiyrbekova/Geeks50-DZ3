const textArea = document.querySelector("#text");
const total = document.querySelector("#total");
const remainder = document.querySelector("#remainder");

const maxLength = 25;

textArea.addEventListener("input", () => {
    let value = textArea.value;
    if (value.length > maxLength)
    {
        value = value.slice(0, maxLength);
        textArea.value = value;
    }

    total.textContent = value.length;
    remainder.textContent = maxLength - value.length;
});
