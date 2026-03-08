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

    // Ajoute un élément à l'interface DOM et retourne son index dans le tableau des éléments du DOM
    static addElement(elt){
        let e = DomInterface.get().elts
        console.log(e)
        e.push(elt)
        return e.length-1
    }

    // Crée un élément dans l'interface DOM et retourne son index dans le tableau des éléments du DOM
    static createElement(guid,tag, anchor){
        try{
            let elt = document.createElementNS("http://www.w3.org/1999/xhtml", tag) 
            elt.setAttribute('id',guid)
            if (anchor) {
                elt.innerHTML = "<div style=\"anchor-name: --" + this.guid + "; width:100%; height:100%\"></div>" 
            }
            return DomInterface.addElement(elt)
        } catch (e) {
            DomInterface.warn("Unable to create " + tag + " with guid:" + guid)
            return ERR_DOM_CREATION
        }
        //return DomInterface.addElement(elt)
    }

    // retourne un objet du DOM depuis son index dans le tableau des éléments DOM
    static getElement(elt){
        return DomInterface.get().elts[elt]
    }

    // remplace le innerHTML d'un élément depuis sont index dans le tableau des éléments DOM
    static setInnerHTML(elt,HTML) {
        try{
            DomInterface.get().elts[elt].innerHTML = HTML;
        } catch (e) {
            DomInterface.warn("Unable to set innerHTML of element #"+elt+":"+e)
        }
    }

    // remplace le style CSS d'un élément depuis sont index dans le tableau des éléments DOM
    static setCSS(elt,CSS) {
        try{
            DomInterface.get().elts[elt].style = CSS;
        } catch (e) {
            DomInterface.warn("Unable to set CSS of element #"+elt+":"+e)
        }
    }

    // Place l'élement elt en tant qu'enfant du parent depuis leurs index repsectifs dans le tableau des éléments DOM
    static setParent(elt,parent){
        DomInterface.getElement(parent).appendChild(DomInterface.getElement(elt))
    }
}

new DomInterface()
console.log("DomInterface Created")
