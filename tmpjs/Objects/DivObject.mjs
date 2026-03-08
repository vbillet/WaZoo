import DomInterface from "./DomInterface.mjs"
import DomObject from "./DomObject.mjs"

export default class DivObject extends DomObject{
    constructor(data=undefined) { super(data); this.createElement("div") }
    start(){
        console.log("start div")
        //let elt = 
        //console.log(elt)
        //let e = DomInterface.getElement(elt)
        //console.log(elt,e)
        //this.getParent().getDomElement().appendChild(elt)

        super.start()
    }

    render(){
        super.render()
    }

    update(){}

}

console.log("DivObject Loaded")