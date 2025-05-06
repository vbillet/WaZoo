const BS_None = "none"
const BS_Hidden = "hidden"
const BS_Dotted = "dotted"
const BS_Dashed = "dashed"
const BS_Solid = "solid"
const BS_Double = "double"
const BS_Groove = "groove"
const BS_Ridge = "ridge"
const BS_Inset = "inset"
const BS_Outset = "outset"

const BS_Styles = [BS_None,BS_Hidden,BS_Dotted,BS_Dashed,BS_Solid,BS_Double,BS_Groove,BS_Ridge,BS_Inset,BS_Outset]

class Border extends Component {
    width = new Rect(1,1,1,1)
    topStyle = "solid"
    leftStyle = "solid"
    rightStyle = "solid"
    bottomStyle = "solid"
    topColor = new Color(255,0,0,1)
    leftColor = new Color(255,0,0,1)
    rightColor = new Color(255,0,0,1)
    bottomColor = new Color(255,0,0,1)
    topLeftRadius = 0
    topRightRadius = 0
    bottomLeftRadius = 0
    bottomRightRadius = 0


    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        this.width = new Rect(1,1,1,1)
        this.topColor = new Color(255,0,0,1)
        this.leftColor = new Color(255,0,0,1)
        this.rightColor = new Color(255,0,0,1)
        this.bottomColor = new Color(255,0,0,1)
        try{ this.width.top = data.width.top }                 catch(e) { console.warn("Bad border Top Width") }
        try{ this.width.left = data.width.left }               catch(e) { console.warn("Bad border Left Width") }
        try{ this.width.right = data.width.right }             catch(e) { console.warn("Bad border Right Width") }
        try{ this.width.bottom = data.width.bottom }           catch(e) { console.warn("Bad border Bottom Width") }
        try{ this.topStyle = data.topStyle }                   catch(e) { console.warn("Bad border topStyle") }
        try{ this.leftStyle = data.leftStyle }                 catch(e) { console.warn("Bad border leftStyle") }
        try{ this.rightStyle = data.rightStyle }               catch(e) { console.warn("Bad border rightStyle") }
        try{ this.bottomStyle = data.bottomStyle }             catch(e) { console.warn("Bad border bottomStyle") }
        try{ this.topColor.r = data.topColor.r }               catch(e) { console.warn("Bad border Top Color") }
        try{ this.topColor.g = data.topColor.g }               catch(e) { console.warn("Bad border Top Color") }
        try{ this.topColor.b = data.topColor.b }               catch(e) { console.warn("Bad border Top Color") }
        try{ this.topColor.a = data.topColor.a }               catch(e) { console.warn("Bad border Top Color") }
        try{ this.leftColor.r = data.leftColor.r }             catch(e) { console.warn("Bad border Left Color") }
        try{ this.leftColor.g = data.leftColor.g }             catch(e) { console.warn("Bad border Left Color") }
        try{ this.leftColor.b = data.leftColor.b }             catch(e) { console.warn("Bad border Left Color") }
        try{ this.leftColor.a = data.leftColor.a }             catch(e) { console.warn("Bad border Left Color") }
        try{ this.rightColor.r = data.rightColor.r }           catch(e) { console.warn("Bad border Right Color") }
        try{ this.rightColor.g = data.rightColor.g }           catch(e) { console.warn("Bad border Right Color") }
        try{ this.rightColor.b = data.rightColor.b }           catch(e) { console.warn("Bad border Right Color") }
        try{ this.rightColor.a = data.rightColor.a }           catch(e) { console.warn("Bad border Right Color") }
        try{ this.bottomColor.r = data.bottomColor.r }         catch(e) { console.warn("Bad border Bottom Color") }
        try{ this.bottomColor.g = data.bottomColor.g }         catch(e) { console.warn("Bad border Bottom Color") }
        try{ this.bottomColor.b = data.bottomColor.b }         catch(e) { console.warn("Bad border Bottom Color") }
        try{ this.bottomColor.a = data.bottomColor.a }         catch(e) { console.warn("Bad border Bottom Color") }
        try{ this.topLeftRadius = data.topLeftRadius }         catch(e) { console.warn("Bad Top Left radius") }
        try{ this.topRightRadius = data.topRightRadius }       catch(e) { console.warn("Bad Top Right radius") }
        try{ this.bottomLeftRadius = data.bottomLeftRadius }   catch(e) { console.warn("Bad Bottom Left radius") }
        try{ this.bottomRightRadius = data.bottomRightRadius } catch(e) { console.warn("Bad bottom Right radius") }
    }

    getCSS(){ 
        let result = "border-top:"
        result = result + this.width.top + "px "
        result = result + this.topStyle + " "
        result = result + this.topColor.getCSS() + ";"

        result = result + "border-left:"
        result = result + this.width.left + "px "
        result = result + this.leftStyle + " "
        result = result + this.leftColor.getCSS() + ";"

        result = result + "border-right:"
        result = result + this.width.right + "px "
        result = result + this.rightStyle + " "
        result = result + this.rightColor.getCSS() + ";"

        result = result + "border-bottom:"
        result = result + this.width.bottom + "px "
        result = result + this.bottomStyle + " "
        result = result + this.bottomColor.getCSS() + ";"

        result = result + "border-radius:" + this.topLeftRadius + "px " + this.topRightRadius + "px " + this.bottomRightRadius + "px " + this.bottomLeftRadius + "px;"

        return result + ';box-sizing: border-box;' 
    }

    #checkBorderStyles(style){
        let ok = false
        let cnt = BS_Styles.length
        for(ii=0; ii<cnt; ii++){
            if (BS_Styles[ii] == style) {
                ok = true
                break
            }
        }
        return ok
    }

    setColor(color) {
        if (!(color instanceof Color)){
            console.error("Invalid border color")
            return
        }
        this.topColor = color
        this.leftColor = color
        this.rightColor = color
        this.bottomColor = color
        this.getSimObject().setDirty()
    }

    setWidth(width) {
        this.width = new Rect(width,width,width,width)
        this.getSimObject().setDirty()
    }

    setStyle(style) {
        if (!this.#checkBorderStyles()) {
            console.error("Wrong style applied to this border")
            return
        }
        this.topStyle = style
        this.leftStyle = style
        this.rightStyle = style
        this.bottomStyle = style
        this.getSimObject().setDirty()
    }
}

console.log("Border Component Loaded")
