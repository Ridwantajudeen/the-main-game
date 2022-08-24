
let summ = []

let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el")
let playerName = []
let playerToken= 150   
let namePusher = document.getElementById("entBtn")
let inputSpace = document.getElementById("rName")

namePusher.addEventListener("click", function() {
    playerName.push(inputSpace.value)
    console.log(playerName)
     playerTip = document.getElementById("name")
     playerTip = document.getElementById("name")
     playerTip.textContent = playerName + ": $" + playerToken
    

})



let sumV = document.getElementById("sum-el")
let theCards = document.getElementById("cards-el")
function getRandom(){
    let randomNumber = Math.floor(Math.random() * 14) +1
    if ( randomNumber > 10){
        return 10
    } else if( randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
   
     
}
function startGame() {
    let firstCard = getRandom()
let secondCard = getRandom()
 sum =  firstCard + secondCard
 summ = [
    firstCard,
     secondCard
]
let isAlive = true 
    renderGame()
}

function renderGame() {
    if (sum <= 20)  {
        message=("Do you want to draw a new card? ")
        isAlive = true
       

     } else if (sum === 21){
         message= "Congratulations,"+ " " + playerName
         hasBlackJack = true
     } else {
        message=("You're out of the game! ")
         isAlive = false
     }
    
     //message=(hasBlackJack)
    // message=(isAlive)
    //  console.log(message)
    //theCards.textContent = ("Cards: " + firstCard + " " + secondCard)
    //theCards.textContent = ("Cards: " + summ)
    // the above is the best i would like to use but ill be using below just to go with what im being thought
    
    theCards.textContent = "Cards: "  
    for (let i=0; i<summ.length; i++)
    theCards.textContent += summ[i] + " "

    messageEl.textContent = message
     sumV.textContent = 'Sum:' + sum
     
      

}
function newCard(){
    if (isAlive === true && hasBlackJack === false ){
        
        console.log("Drawing a new card from the deck!")
        let thirdCard = getRandom()
        summ.push(thirdCard)
        sum +=  thirdCard
        renderGame()
    }
  
    if (sum <= 20)  {
        playerToken = -10
       

     } else if (sum === 21){
        
         playerToken = + 10
     } else {
       playerToken = - 10
     }
}

// let age = 21
//      if (age <= 20){
//          message=("You can not enter the club!")
//      }else {
//          message=("you're welcome")
//      }
// else if (age < 20){
//    console.log("You can not enter the club!")
//}

// let bAge = 101

// if (bAge < 100){
//     console.log("Not elegible")
// } else if (bAge === 100){
// console.log( "Here is your birthday card from the King!")
// } else if (bAge > 100){
//     console.log("Not elegible, you have already gotten one")
// }