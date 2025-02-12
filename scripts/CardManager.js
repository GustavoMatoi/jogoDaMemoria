class CardManager {

    flippedCards = new Set()
    urlFactory

    constructor(factory){
        this.urlFactory = factory
    }

    gen(heroNumber){
        let template = document.getElementById("cardTemplate")
        let clone = template.content.cloneNode(true)

        clone.children[0].addEventListener('click', event => this.onClick(event))
        return clone
    }
    
    unFlip(cardNode){
        cardNode.children[0].classList.remove('selected')
    }

    flip(cardNode){
        cardNode.children[0].classList.add('selected')
        this.flippedCards.add(cardNode)
    }

    disable(cardNode){
        cardNode.children[0].classList.add("matched")
        this.unFlip(cardNode)
    }

    onClick(event){
        this.flip(event.target)
    }

}


//[1, 1, 2]

//[1,2]