const BlendNormal      = "normal"
const BlendMultiply    = "multiply"
const BlendScreen      = "screen"
const BlendOverlay     = "overlay"
const BlendDarken      = "darken"
const BlendLighten     = "lighten"
const BlendColorDodge  = "color-dodge"
const BlendColorBurn   = "color-burn" 
const BlendHardLight   = "hard-light"
const BlendSoftLight   = "soft-light"
const BlendDifference  = "difference"
const BlendExclusion   = "exclusion"
const BlendHue         = "hue"
const BlendSaturation  = "saturation"
const BlendColor       = "color"
const BlendLuminosity  = "luminosity"

const ClipBorderBox    = "border-box"
const ClipPaddingBox   = "padding-box"
const ClipContentBox   = "content-box"
const ClipText         = "text"
const ClipVorderArea   = "border-area"

const OriginBorderBox  = "border-box"
const OriginPaddingBox = "padding-box"
const OriginContentBox = "content-box"

const RepeatRepeatX = "repeat-x"
const RepeatRepeatY = "repeat-y"
const RepeatRepeat = "repeat"
const RepeatSpace = "space"
const RepeatRound = "round"
const RepeatNoRepeat = "no-repeat"

const AttachScroll = "scroll"
const AttachFixed = "fixed"
const AttachLocal = "local"

class Background extends Component {
    image = ""
    color = new Color(255,0,0,1)
    position = new Point2D(0,0)
    size = new Point2D(256,256)
    repeat = "repeat"
    blendMode = "normal"
    clip = "content-box"
    origin = "content-box"
    positionAnchorX = "left"
    positionAnchorY = "top"
    attachment = "local"

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this.image = data.image }                     catch(e) { console.warn("No image property in data") }
        try{ this.color.r = data.color.r }                 catch(e) { console.warn("Bad color in Background") }
        try{ this.color.g = data.color.g }                 catch(e) { console.warn("Bad color in Background") }
        try{ this.color.b = data.color.b }                 catch(e) { console.warn("Bad color in Background") }
        try{ this.color.a = data.color.a }                 catch(e) { console.warn("Bad color in Background") }
        try{ this.position.x = data.position.x }           catch(e) { console.warn("Bad Background position") }
        try{ this.position.y = data.position.y }           catch(e) { console.warn("Bad Background position") }
        try{ this.size.x = data.size.x }                   catch(e) { console.warn("Bad Background size") }
        try{ this.size.y = data.size.y }                   catch(e) { console.warn("Bad Background size") }
        try{ this.repeat = data.repeat }                   catch(e) { console.warn("Bad Background repeat") }
        try{ this.blendMode = data.blendMode }             catch(e) { console.warn("Bad Background blendMode") }
        try{ this.clip = data.clip }                       catch(e) { console.warn("Bad Background clip") }
        try{ this.origin = data.origin }                   catch(e) { console.warn("Bad Background origin") }
        try{ this.positionAnchorX = data.positionAnchorX } catch(e) { console.warn("Bad Background positionAnchorX") }
        try{ this.positionAnchorY = data.positionAnchorY } catch(e) { console.warn("Bad Background positionAnchorY") }
        try{ this.attachment = data.attachment }           catch(e) { console.warn("Bad Background attachment") }
    }

    getCSS(){ 
        result = ""
        if (this.image != "") {
            result = result + "background-image:url(\"" + this.image + "\");"
        }
        result = result + "background-color:" + this.color.getCSS() + ";"
        result = result + "background-position:" + this.position.x + "px " + this.position.y + "px;"
        result = result + "background-size:" +this.size.x + "px" + this.size.y + "px;"
        result = result + "background-repeat:" + this.repeat + ";"
        result = result + "background-blend-mode:" + this.blendMode + ";"
        result = result + "background-clip:" + this.clip + ";"
        result = result + "background-origin:" + this.origin + ";"
        result = result + "background-attachment:" + this.attachment + ";"
        result = result + "background-position-x:" + this.positionAnchorX + ";"
        result = result + "background-position-y:" + this.positionAnchorY + ";"
        return result
    }
}