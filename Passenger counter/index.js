let incrementcount = 0
let saveEl = document.getElementById("save-El")
let countEl = document.getElementById("counter")
function increcount(){
    incrementcount += 1
    countEl.textContent=incrementcount
}
function savecount(){
let saveEl = document.getElementById("save-El")
let dash = incrementcount + " - " 
saveEl.textContent += dash
countEl.textContent = 0
incrementcount = 0
}
