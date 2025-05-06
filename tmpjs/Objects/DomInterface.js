let DomInterfaceInstance=undefined

class DomInterface {
    
    elts=[]
    constructor() {
        if (DomInterfaceInstance != undefined) { throw new Error("Cannot create another instance of DomInterface.") }
        DomInterfaceInstance=this
    }

    addElement(elt){
        this.elts.push(elt)
        return this.elts.length-1
    }
    getElement(elt){
        return this.elts[elt]
    }

    static get(){
        if (DomInterfaceInstance==undefined){
            new DomInterface()
        }
        return DomInterfaceInstance
    }
}

new DomInterface()
console.log("DomInterface Created")
