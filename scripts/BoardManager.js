class BoardManager {

    cardManager; 

    node; 

    numImgs; 
    curNumCards; 

    constructor(id, numImgs, cardManager) {
        this.node = document.getElementById(id);
        this.numImgs = numImgs;
        this.cardManager = cardManager;
    }

    clear() {
        this.node.innerHTML = "";
    }

    fill(numberCards) {
        if (numberCards > 2 * this.numImgs) {
            console.error(`Error: Not enough images for ${numberCards} cards.`);
            numberCards = 2 * this.numImgs;
        }

        numberCards = parseInt(numberCards);
        this.curNumCards = numberCards;

        this.clear(); 

        this.genRandomList(numberCards).forEach((number) => {
            this.addCard(this.cardManager.gen(number));
        });

        this.adjustCss();
    }

    adjustCss() {
        let cols = Math.sqrt(this.curNumCards);
        let size = (100 / cols - 1);
        size += 'vmin';

        document.documentElement.style.setProperty("--numCols", cols);
        document.documentElement.style.setProperty("--size", size);
    }

    addCard(card) {
        this.node.appendChild(card); 
    }

    genRandomList(size) {
        let list = Array(size / 2).fill().map((_, i) => i + 1);
        list = [...list, ...list].sort(() => Math.random() - 0.5);
        return list;
    }

    check() {
        let flipped = document.getElementsByClassName('matched');
        return flipped.length >= this.curNumCards;
    }
}
