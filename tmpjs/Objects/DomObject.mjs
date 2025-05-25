/*
MIT License

Copyright (c) 2025 BILLET Vincent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
import SimObject from "./SimObject.mjs"
import DomInterface from "./DomInterface.mjs"

export default class DomObject extends SimObject{
    #elt = -1
    #dirty = true

    constructor(data=undefined) { super(data); }

    render(){
        this.update()

        /*let cnt = this.children.length
        for (let ii = 0; ii<cnt; ii++) {
            this.getChildByIndex(ii).render()
        }*/

        if (!this.#dirty) { return }
        
        let css = ''
        let cnt = this.components.length
        for (var ii = 0; ii<cnt; ii++){
            let comp = this.components[ii]
            if (typeof(comp.getInnerHTML) !== "undefined")
                DomInterface.setInnerHTML(this.#elt, comp.getInnerHTML())
                //this.getDomElement().innerHTML = comp.getInnerHTML()

            if (typeof(comp.getCSS) !== "undefined")
                css = css + comp.getCSS()
        }
        this.clearDirty()
        //console.log(css)
        //this.getDomElement().style = css;
        DomInterface.setCSS(this.#elt, css)
        this.postUpdate()
    }

    /*_addToDomInterface(elt){
        this.#elt = DomInterface.get().addElement(elt)
    }*/

/*    #createAnchor(){
        if (this.getChildCount() != 0) { 
            return "<div style=\"anchor-name: --" + this.guid + "; width:100%; height:100%\"></div>" 
        } else {
            return ""
        }
    }*/

    setDirty()   { try {this.#dirty = true } catch(e){} }
    isDirty()    { return this.#dirty }
    clearDirty() { try {this.#dirty = false } catch(e){} }

    createElement(tag) { 
        this.#elt = DomInterface.createElement(this.guid, tag, this.getChildCount() != 0)
        /*console.log(this.getParent())
        this.getParent().getDomElement().appendChild(elt)*/
        return elt
    }

    start() { 
        //console.log(":::: " +this.getParent())
        let cnt = this.getChildCount()
        for(let ii=0; ii<cnt; ii++) {
            this.getChildByIndex(ii).start()
        }
        this.render()
    }

    getDomElement() { 
        //return document.getElementById(this.guid) 
        //console.log(this.#elt)
        return DomInterface.getElement(this.#elt)
    }

    addComponent(component) {
        if (super.addComponent(component)) { this.setDirty() }
    }
}

console.log("DomObject Loaded")