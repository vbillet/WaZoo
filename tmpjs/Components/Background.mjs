import DomInterface from "../Objects/DomInterface.mjs"
import { Color,Point2D } from "../Objects/types.mjs"

export const BlendNormal      = "normal"
export const BlendMultiply    = "multiply"
export const BlendScreen      = "screen"
export const BlendOverlay     = "overlay"
export const BlendDarken      = "darken"
export const BlendLighten     = "lighten"
export const BlendColorDodge  = "color-dodge"
export const BlendColorBurn   = "color-burn" 
export const BlendHardLight   = "hard-light"
export const BlendSoftLight   = "soft-light"
export const BlendDifference  = "difference"
export const BlendExclusion   = "exclusion"
export const BlendHue         = "hue"
export const BlendSaturation  = "saturation"
export const BlendColor       = "color"
export const BlendLuminosity  = "luminosity"

export const ClipBorderBox    = "border-box"
export const ClipPaddingBox   = "padding-box"
export const ClipContentBox   = "content-box"
export const ClipText         = "text"
export const ClipVorderArea   = "border-area"

export const OriginBorderBox  = "border-box"
export const OriginPaddingBox = "padding-box"
export const OriginContentBox = "content-box"

export const RepeatRepeatX  = "repeat-x"
export const RepeatRepeatY  = "repeat-y"
export const RepeatRepeat   = "repeat"
export const RepeatSpace    = "space"
export const RepeatRound    = "round"
export const RepeatNoRepeat = "no-repeat"

export const AttachScroll = "scroll"
export const AttachFixed = "fixed"
export const AttachLocal = "local"

export const BLENDINGS = [BlendNormal,BlendMultiply,BlendScreen,BlendOverlay,BlendDarken,BlendLighten,BlendColorDodge,BlendColorBurn,BlendHardLight,BlendSoftLight,BlendDifference,BlendExclusion,BlendHue,BlendSaturation,BlendColor,BlendLuminosity]
export const CLIPS     = [ClipBorderBox,ClipPaddingBox,ClipContentBox,ClipText,ClipVorderArea]
export const ORIGINS   = [OriginBorderBox,OriginPaddingBox,OriginContentBox]
export const REPEATS   = [RepeatRepeatX,RepeatRepeatY,RepeatRepeat,RepeatSpace,RepeatRound,RepeatNoRepeat]
export const ATTACHS   = [AttachScroll,AttachFixed,AttachLocal]

export default class Background extends Component {
    _image = ""
    _color = new Color(255,0,0,1)
    _position = new Point2D(0,0)
    _size = new Point2D(256,256)
    _repeat = "repeat"
    _blendMode = "normal"
    _clip = "content-box"
    _origin = "content-box"
    _positionAnchorX = "left"
    _positionAnchorY = "top"
    _attachment = "local"

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this._image = data._image }                     catch(e) { console.warn("No image property in data") }
        try{ this._color.r = data._color.r }                 catch(e) { console.warn("Bad color in Background") }
        try{ this._color.g = data._color.g }                 catch(e) { console.warn("Bad color in Background") }
        try{ this._color.b = data._color.b }                 catch(e) { console.warn("Bad color in Background") }
        try{ this._color.a = data._color.a }                 catch(e) { console.warn("Bad color in Background") }
        try{ this._position.x = data._position.x }           catch(e) { console.warn("Bad Background position") }
        try{ this._position.y = data._position.y }           catch(e) { console.warn("Bad Background position") }
        try{ this._size.x = data._size.x }                   catch(e) { console.warn("Bad Background size") }
        try{ this._size.y = data._size.y }                   catch(e) { console.warn("Bad Background size") }
        try{ this._repeat = data._repeat }                   catch(e) { console.warn("Bad Background repeat") }
        try{ this._blendMode = data._blendMode }             catch(e) { console.warn("Bad Background blendMode") }
        try{ this._clip = data._clip }                       catch(e) { console.warn("Bad Background clip") }
        try{ this._origin = data._origin }                   catch(e) { console.warn("Bad Background origin") }
        try{ this._positionAnchorX = data._positionAnchorX } catch(e) { console.warn("Bad Background positionAnchorX") }
        try{ this._positionAnchorY = data._positionAnchorY } catch(e) { console.warn("Bad Background positionAnchorY") }
        try{ this._attachment = data._attachment }           catch(e) { console.warn("Bad Background attachment") }
    }

    get image() { return this._image }
    get color() { return this._color }
    get position() { return this._position }
    get size() { return this._size }
    get repeat() { return this._repeat }
    get blendMode() { return this._blendMode }
    get clip() { return this._clip }
    get origin() { return this._origin }
    get positionAnchorX() { return this._positionAnchorX }
    get positionAnchorY() { return this._positionAnchorY }
    get attachment() { return this._attachment }

    #check(val,arr) {
        let cnt = arr.length
        for (let ii=0; ii<cnt; ii++){
            if (arr[ii] == val) { return true }
        }
        return false
    }

    set image(val) {
        this._image = val
        this.getSimObject().setDirty()
    }

    set color(val) {
        if (typeof val === "Color"){
            this._color = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background color.")
        }
    }

    set position(val) {
        if (typeof val === "Point2D"){
            this._position = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background position.")
        }
    }

    set size(val) {
        if (typeof val === "Point2D"){
            this._size = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background size.")
        }
    }

    set repeat(val) {
        if (this.#check(val,REPEATS)){
            this._repeat = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background repeat.")
        }
    }

    set blendMode(val) {
        if (this.#check(val,BLENDINGS)){
            this._blendMode = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background blending mode.")
        }
    }

    set clip(val) {
        if (this.#check(val,CLIPS)){
            this._clip = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background clip mode.")
        }
    }

    set origin(val) {
        if (this.#check(val,ORIGINS)){
            this._origin = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background origin.")
        }
    }

    set positionAnchorX(val) {
        this._positionAnchorX = val
        this.getSimObject().setDirty()
    }

    set positionAnchorY(val) {
        this._positionAnchorY = val
        this.getSimObject().setDirty()
    }

    set attachment(val) {
        ATTACHS
        if (this.#check(val,ATTACHS)){
            this._attachment = val
            this.getSimObject().setDirty()
        } else {
            DomInterface.warn("Invalid background attachment.")
        }
    }


    getCSS(){ 
        result = ""
        if (this.image != "") {
            result = result + "background-image:url(\"" + this.image + "\");"
        }
        result = result + "background-color:" + this.color.getCSS() + ";"
        result = result + "background-position:" + this.position.x + "px " + this.position.y + "px;"
        result = result + "background-size:" + this.size.x + "px" + this.size.y + "px;"
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
console.log("Background Component Loaded")