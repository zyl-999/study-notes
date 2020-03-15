let btn = document.createElement("input")
btn.type = "button"
btn.value = "点击"

let div = document.createElement("div")
div.id = "did"
div.style.display = "none"


btn.onclick = function () {
    if (div.style.display == "block") {
        div.style.display = "none"
    } else {
        div.style.display = "block"
    }

}
let z = document.body
z.appendChild(div)
z.appendChild(btn);