class BoardManager {
    cardManager
    node
    numImgs
    curNumCards

    constructor(id, numImgs, cardManager){
        this.node = document.getElementById(id)
        this.numImgs = numImgs
        this.cardManager = cardManager
    }

    clear(){}

    fill(numCards){}

    addCard(card){}
}