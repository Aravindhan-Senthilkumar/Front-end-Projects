let cards = []
let sum = 0
let hasblackjack = false
let alive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("messageell")

let player = {
    Name : "Aravindh",
    Tips : 145
}

let playerEl = document.getElementById("playernametips")
playerEl.textContent = player.Name + " : $" + player.Tips 

function getrandomcards() {
let randomNo = Math.floor( Math.random() * 13) + 1

if (randomNo === 2){
    return 11
}
else if (randomNo > 10){
    return 10
}
else{
    return randomNo
}
}



function startgame(){
    alive = true
    let firstcard = getrandomcards()
    let secondcard = getrandomcards()
    cards = [firstcard,secondcard]
    sum = cards[0] + cards[1]
    rendergame()
}
console.log(cards)








function rendergame(){
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum
if (sum <= 20){
    message = "Do you want to draw a new card? "
}
else if(sum === 21){
    message = "Wohoo! you have got Blackjack!"
    hasblackjack = true
}
else{
    message = "Damn ! You're out of game"
    alive = false
}
messageEl.textContent = message
}






function newcardgame(){
if ( alive === true && hasblackjack === false){
let card = getrandomcards()
sum += card
cards.push(card)
console.log(cards)
rendergame() 
}
}