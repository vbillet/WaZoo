let DomInterfaceInstance=undefined
const ERR_DOM_CREATION = -1

export default class DomInterface {
    
    elts=[]
    constructor() {
        if (DomInterfaceInstance != undefined) { throw new Error("Cannot create another instance of DomInterface.") }
        DomInterfaceInstance=this
    }

    static get(){
        if (DomInterfaceInstance==undefined){
            new DomInterface()
        }
        return DomInterfaceInstance
    }

    static log(msg)   { console.log(msg) }
    static warn(msg)  { console.warn(msg) }
    static error(msg) { console.error(msg) }

    static addElement(elt){
        e = DomInterface.get().elts
        e.push(elt)
        return e.length-1
    }

    static createElement(guid,tag, anchor){
        try{
            let elt = document.createElementNS("http://www.w3.org/1999/xhtml", tag) 
            elt.setAttribute('id',guid)
            if (anchor) {
                elt.innerHTML = "<div style=\"anchor-name: --" + this.guid + "; width:100%; height:100%\"></div>" 
            }
        } catch (e) {
            DomInterface.warn("Unable to create " + tag + " with guid:" + guid)
            return ERR_DOM_CREATION
        }
        return DomInterface.addElement(elt)
    }

    static getElement(elt){
        return DomInterface.get().elts[elt]
    }


    static setInnerHTML(elt,HTML) {
        try{
            DomInterface.get().elts[elt].innerHTML = HTML;
        } catch (e) {
            DomInterface.warn("Unable to set innerHTML of element #"+elt+":"+e)
        }
    }
    static setCSS(elt,CSS) {
        try{
            DomInterface.get().elts[elt].style = CSS;
        } catch (e) {
            DomInterface.warn("Unable to set CSS of element #"+elt+":"+e)
        }
    }
}

new DomInterface()
console.log("DomInterface Created")
