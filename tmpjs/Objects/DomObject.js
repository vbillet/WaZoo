class DomObject extends SimObject{
    #elt = -1
    constructor(data=undefined) { super(data); this.#elt = -1; }
    render(){
        this.update()
        let css = ''
        let cnt = this.components.length
        for (var ii = 0; ii<cnt; ii++){
            let comp = this.components[ii]
            if (typeof(comp.getInnerHTML) !== "undefined")
                this.getDomElement().innerHTML = comp.getInnerHTML()
            if (typeof(comp.getCSS) !== "undefined")
                css = css + comp.getCSS()
        }
        //console.log(css)
        this.getDomElement().style = css;
        this.postUpdate()
    }

    _addToDomInterface(elt){
        this.#elt = DomInterface.get().addElement(elt)
    }

    #createAnchor(){
        if (this.getChildCount != 0) { 
            return "<div style=\"anchor-name: --" + this.guid + "; width:100%; height:100%\"></div>" 
        } else {
            return ""
        }
    }
    
    /*getInnerHTML(){
        if (this.getChildCount != 0) { return this.#createAnchor() } else { return "" }
    }*/

    createElement(tag) { 
        let elt = document.createElementNS("http://www.w3.org/1999/xhtml", tag) 
        elt.setAttribute('id',this.guid)
        elt.innerHTML = this.#createAnchor()
        this._addToDomInterface(elt)
        /*console.log(this.getParent())
        this.getParent().getDomElement().appendChild(elt)*/
        return elt
    }

    start() { 
        //console.log(":::: " +this.getParent())
        this.render()
        let cnt = this.getChildCount()
        for(let ii=0; ii<cnt; ii++) {
            this.getChildByIndex(ii).start()
        }
    }

    getDomElement() { 
        //return document.getElementById(this.guid) 
        console.log(this.#elt)
        return DomInterface.get().getElement(this.#elt)
    }
}

console.log("DomObject Loaded")