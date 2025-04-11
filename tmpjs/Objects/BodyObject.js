//TODO: Should be a singleton
class BodyObject extends DomObject{
    render(){
        this.update()
        document.body.style = 'anchor-name: --'+this.guid;
        this.postUpdate()
    }
}

console.log("BodyObject Loaded")