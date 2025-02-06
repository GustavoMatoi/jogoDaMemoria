let menu = document.getElementById('menu')
let start = document.getElementById('start')
let select = document.getElementById('numCards')


for (let i = 4; i <= 10; i += 2) {
    let n = i * i
    let op = document.createElement("option")
    op.value = n
    op.innerHTML = n
    select.appendChild(op)
}

//const addPeixe = () => {console.log("Peixe adicionado")}

start.addEventListener('click', ()=> {
    menu.classList.add('hidden')
    board.node.classList.remove('hidden')
})

