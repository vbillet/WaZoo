class DivObject extends DomObject{

    start(){
        let elt = this.createElement("div")
        document.body.appendChild(elt)
        this.addComponent(new RectTransform())
        this.addComponent(new Border())

        super.start()
    }

    update(){}

}

console.log("DivObject Loaded")