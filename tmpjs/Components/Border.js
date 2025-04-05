class Border extends Component {
    width = "1" 
    unit = "px"
    kind = "solid"
    color = "#000000"

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this.width = data.width } catch(e) { console.warn("No border Width") }
        try{ this.unit = data.unit }   catch(e) { console.warn("No border Unit") }
        try{ this.kind = data.kind }   catch(e) { console.warn("No border Kind") }
        try{ this.color = data.color } catch(e) { console.warn("No border Color") }
    }
    getCSS(){ return "border:" + this.width + this.unit + ' ' + this.kind + ' ' + this.color + ';' }
}

console.log("Border Component Loaded")
