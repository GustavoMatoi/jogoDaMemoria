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

    clear(){
        this.node.innerHTML = ""
    }

    fill(numCards){
        if(numCards > 2 *this.numImgs){
            console.error("Número insuficiente de imagens")
            numCards = 2 * this.numImgs
        }

        this.clear()
        this.addCard(this.cardManager.gen(1))
    }

    addCard(card){
        this.node.appendChild(card)
    }

}