class DivObject extends DomObject{

    start(){
        let elt = this.createElement("div")
        this.getParent().getDomElement().appendChild(elt)

        super.start()
    }

    update(){}

}

console.log("DivObject Loaded")