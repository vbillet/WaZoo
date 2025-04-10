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
        this.getDomElement().style = css;
        this.postUpdate()
    }
    
    createElement(tag) { 
        let elt = document.createElementNS("http://www.w3.org/1999/xhtml", tag) 
        elt.setAttribute('id',this.guid)
        return elt
    }

    start() { this.render() }

    getDomElement() { return document.getElementById(this.guid) }
}

console.log("DomObject Loaded")