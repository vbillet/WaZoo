class BodyObject extends DomObject{
    render(){
        this.update()
        document.body.style = 'anchor-name: --'+this.guid;
        this.postUpdate()
    }
    start(){ super.start() }
}

console.log("BodyObject Loaded")