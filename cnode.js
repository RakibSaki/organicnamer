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
        this.chains = []
        if (!bondWith) {
            this.bondsWith.push(bondWith)
            bondWith.bondsWith.push(this)
            for (let i = 0; i < bondWith.chains.length; i++) {
                // if bondWith was a terminal node, then add this new node to the chain
                if (bondWith == bondWith.chians[i][0]) {
                    bondWith.chains[i].unshift(this)
                    this.chains.push(bondWith.chains[i])
                } else if (bondWith == bondWith.chains[i][-1]) {
                    bondWith.chains[i].push(this)
                    this.chains.push(bondWith.chains[i])
                }
            }
            for (let chain)
        }
    }
}