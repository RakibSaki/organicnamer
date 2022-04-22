class Cnode {
    constructor(x, y, bondWith) {
        this.x = x
        this.y = y
        this.element = document.createElement('div')
        this.element.classList.add('cnode')
        this.element.style.left = `${x}px`
        this.element.style.top = `${y}px`
        document.body.appendChild(this.element)
        this.bondsWith = []
    }
}