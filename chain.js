class Chain {
    constructor(nodes) {
        this.nodes = nodes
        for (let cnode of this.nodes) {
            cnode.chains.push(this)
        }
    }
}