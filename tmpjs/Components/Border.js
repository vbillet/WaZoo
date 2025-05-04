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
        try{ this.topRightRadius = data.topRightRadius }       catch(e) { console.warn("Bad Top Rightradius") }
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

        result = result + "border-radius:" + topLeftRadius + "px "+topRightRadius + "px " + bottomRightRadius + "px " + bottomLeftRadius + "px;"

        return result + ';box-sizing: border-box;' 
    }
}

console.log("Border Component Loaded")
