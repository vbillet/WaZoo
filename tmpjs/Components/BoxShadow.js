class BoxShadow extends Component {
    color = new Color(255,0,0,1)
    offset = new Point2D(0,0)
    blurRadius = 0
    spreadRadius = 0
    inset = false

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this.color.r = data.color.r }            catch(e) { console.warn("Bad shadow color") }
        try{ this.color.g = data.color.g }            catch(e) { console.warn("Bad shadow color") }
        try{ this.color.b = data.color.b }            catch(e) { console.warn("Bad shadow color") }
        try{ this.color.a = data.color.a }            catch(e) { console.warn("Bad shadow color") }
        try{ this.offset.x = data.offset.x }          catch(e) { console.warn("Bad shadow offset") }
        try{ this.offset.y = data.offset.y }          catch(e) { console.warn("Bad shadow offset") }
        try{ this.blurRadius = data.blurRadius }      catch(e) { console.warn("Bad shadow blurRadius") }
        try{ this.spreadRadius = data.spreadRadius }  catch(e) { console.warn("Bad shadow spreadRadius") }
        try{ this.inset = data.inset }                catch(e) { console.warn("Bad shadow inset setting") }

    }

    getCSS(){ 
        result = "box-shwadow:"
        result = result + this.offset.x + "px " + this.offset.y + "px "
        result = result + this.blurRadius + " " + this.spreadRadius
        if (this.inset) { result = result + " inset" }
        result = result + ";"
        return result
    }
}