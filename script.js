chains = []

document.addEventListener('DOMContentLoaded', () => {
    let body = document.body
    body.addEventListener('click', event => {
        if (chains.length == 0) {
            chains.push(new Chain([new Cnode(event.offsetX, event.offsetY, null)]))
        }
    })
})