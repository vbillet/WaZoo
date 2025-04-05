class DomObject extends SimObject{
    render(){
        this.update()
        let css = ''
        let cnt = this.components.length
        for (var ii = 0; ii<cnt; ii++){
            let comp = this.components[ii]
            if (typeof comp.getCSS !== undefined)
                css = css + comp.getCSS()
        }
        this.elt.style = css;
        this.postUpdate()
    }

    start(){
        this.elt = document.createElementNS("http://www.w3.org/1999/xhtml", "div")
        document.body.appendChild(this.elt)

        this.addComponent(new Border())
        this.render()
    }

    update() {}
}

console.log("DomObject Loaded")