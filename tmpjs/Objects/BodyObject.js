//TODO: Should be a singleton
class BodyObject extends DomObject{
    render(){
        this.update()
        document.body.style = "anchor-name: --"+this.guid+";min-height:100vh;max-height:100vh;width:100%"
        this.postUpdate()
    }
}

console.log("BodyObject Loaded")