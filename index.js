let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let allPA = document.getElementById("all_pa")

let count = 0
let allpasenger = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    allpasenger += count
    allPA.innerText = "all pasengers: " + allpasenger
    countEl.textContent = 0
    count = 0
}
