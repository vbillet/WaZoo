class DomObject extends SimObject{
    #elt = undefined
    
    render(){
        this.update()
        let css = ''
        let cnt = this.components.length
        for (var ii = 0; ii<cnt; ii++){
            let comp = this.components[ii]
            if (typeof comp.getCSS !== undefined)
                css = css + comp.getCSS()
        }
        this.#elt.style = css;
        this.postUpdate()
    }
    
    // Créer l'élément DOM
    createElement(tag){
        return document.createElementNS("http://www.w3.org/1999/xhtml", tag)
    }

    start(){
        let elt = this.createElement("div")
        this.#elt = elt
        document.body.appendChild(elt)

        this.addComponent(new Border())
        this.render()
    }

    update() {}

    getDomElement() { return this.#elt }
}

console.log("DomObject Loaded")