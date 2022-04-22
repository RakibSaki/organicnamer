path = []

document.addEventListener('DOMContentLoaded', () => {
    let body = document.body
    body.addEventListener('click', event => {
        path.push(new Cnode(event.offsetX, event.offsetY, null))
    })
})