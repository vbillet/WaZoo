class Border extends Component {
    size = "1" 
    unit = "px"
    kind = "solid"
    color = "#000000"

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        if (data.size !== undefined) { this.size = data.size }
        try{ this.size = data.size }   catch(error) { console.warn("No border Size") }
        try{ this.unit = data.unit }   catch(error) { console.warn("No border Size") }
        try{ this.kind = data.kind }   catch(error) { console.warn("No border Kind") }
        try{ this.color = data.color } catch(error) { console.warn("No border Color") }
    }
    getCSSString(){ return "border:" + this.size + this.unit + ' ' + this.kind + ' ' + this.color + ';' }
//    toString(){ return JSON.stringify(this) }
}
