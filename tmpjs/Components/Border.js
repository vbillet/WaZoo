class Border extends Component {
    width = 1 
    kind = "solid"
    color = new Color(255,0,0,1)

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this.width = data.width } catch(e) { console.warn("No border Width") }
        try{ this.kind = data.kind }   catch(e) { console.warn("No border Kind") }
        try{ this.color = data.color } catch(e) { console.warn("No border Color") }
    }
    getCSS(){ return "border:" + this.width + 'px ' + this.kind + ' ' + this.color.getCSS() + ';' }
}

console.log("Border Component Loaded")
