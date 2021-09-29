let player = {
    name: "Player",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let message_tag = document.getElementById("ask_player")
let sum_tag = document.getElementById("sum_all")
let cards_tag = document.getElementById("cards")
let player_tag = document.getElementById("player")

player_tag.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cards_tag.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cards_tag.textContent += cards[i] + " "
    }
    
    sum_tag.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    message_tag.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

const start_game_btn = document.getElementById("start_game")
const new_card_btn = document.getElementById("new_card")

start_game_btn.addEventListener('click', startGame)
new_card_btn.addEventListener('click', newCard)

