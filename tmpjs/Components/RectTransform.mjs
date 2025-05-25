import Component from "./Component.mjs"
import { Rect,Point2D } from "../Objects/types.mjs"

const APX = {
    CENTERX: 0,
    LEFT: 1,
    RIGHT: 2,
    STRETCHX: 4
}
const APY = {
    CENTERY: 8,
    TOP: 16,
    BOTTOM: 32,
    STRETCHY: 64
}
const XAXIS = 7
const YAXIS = 120

const TOPLEFT = APY.TOP+APX.LEFT
const TOP = APY.TOP+APX.CENTERX
const TOPRIGHT = APY.TOP+APX.RIGHT
const TOPSTRETCH = APY.TOP+APX.STRETCHX

const CENTERLEFT = APY.CENTERY+APX.LEFT
const CENTER = APY.CENTERY+APX.CENTERX
const CENTERRIGHT = APY.CENTERY+APX.RIGHT
const CENTERSTRETCH = APY.CENTERY+APX.STRETCHX

const BOTTOMLEFT = APY.BOTTOM+APX.LEFT
const BOTTOM = APY.BOTTOM+APX.CENTERX
const BOTTOMRIGHT = APY.BOTTOM+APX.RIGHT
const BOTTOMSTRETCH = APY.BOTTOM+APX.STRETCHX

const STRETCHLEFT = APY.STRETCHY+APX.LEFT
const STRETCHCENTER = APY.STRETCHY+APX.CENTERX
const STRETCHRIGHT = APY.STRETCHY+APX.RIGHT
const STRETCH = APY.STRETCHY+APX.STRETCHX

export default class RectTransform extends Component {
    _anchorPreset =  APY.TOP + APX.LEFT
    _rect = new Rect(0,0,250,30)
    _verticalAnchor = new Point2D(0,1)
    _horizontalAnchor = new Point2D(0,1)
    _rotation = 0
    _pivot = new Point2D(0,0)
    _scale = new Point2D(1,1)

    constructor(data=undefined) { 
        super(data); 
        if (data != undefined) { this.load(data) } else { this._anchorPreset = APY.TOP + APX.LEFT }
    }

    load(data) {
        super.load(data)
        this._rect = new Rect(0,0,250,30)
        this._verticalAnchor = new Point2D(0,1)
        this._horizontalAnchor = new Point2D(0,1)
        this.rotation = 0
        this.pivot = new Point2D(0,0)
        this.scale = new Point2D(1,1)
        try{ this._rect.top = data.rect.top }                     catch(e) { console.warn("Bad border Top Width") } // TODO: changer les messages
        try{ this._rect.left = data.rect.left }                   catch(e) { console.warn("Bad border Top Width") }
        try{ this._rect.right = data.rect.right }                 catch(e) { console.warn("Bad border Top Width") }
        try{ this._rect.bottom = data.rect.bottom }               catch(e) { console.warn("Bad border Top Width") }
        try{ this._verticalAnchor.x = data.verticalAnchor.x }     catch(e) { console.warn("Bad border Top Width") }
        try{ this._verticalAnchor.y = data.verticalAnchor.y }     catch(e) { console.warn("Bad border Top Width") }
        try{ this._horizontalAnchor.x = data.horizontalAnchor.x } catch(e) { console.warn("Bad border Top Width") }
        try{ this._horizontalAnchor.y = data.horizontalAnchor.y } catch(e) { console.warn("Bad border Top Width") }
        try{ this._pivot.x = data.pivot.x }                       catch(e) { console.warn("Bad border Top Width") }
        try{ this._pivot.y = data.pivot.y }                       catch(e) { console.warn("Bad border Top Width") }
        try{ this._scale.x = data.scale.x }                       catch(e) { console.warn("Bad border Top Width") }
        try{ this._scale.y = data.scale.y }                       catch(e) { console.warn("Bad border Top Width") }
        try{ this._rotation = data.rotation }                     catch(e) { console.warn("Bad border Top Width") }

    }

    getCSS(){ 
        if (this.getSimObject() === undefined) { return "" }
        if (this.getSimObject().getParent() === undefined) { return "" }
        console.log(this.getSimObject())
        let posDebug = this._anchorPreset + " "
        let pos= "position:fixed;"
        // Le position anchor c'est le guid du parent de l'objet contenant
        pos = pos + "position-anchor:--"+this.getSimObject().getParent().guid+";"
        // le anchor-name c'est le guid de l'objet contenant
        pos = pos + "anchor-name:--"+this.getSimObject().guid+";"
        let posX = ""
        let posY = ""
        // La largeur est définie seulement si on est pas en mode stretch <>3
        if ((this._anchorPreset & XAXIS) != APX.STRETCHX) { 
            posX = posX + "width:"+this._rect.right+"px;" 
            posDebug = posDebug + "I,"
        }
        
        // Ancré à gauche, au centre, et stretch <> 2
        if ((this._anchorPreset & XAXIS) != APX.RIGHT) { 
            posX = posX + "inset-inline-start: calc(anchor("+(this._horizontalAnchor.x*100)+"%)"
            if (this._rect.left<0){
                posX = posX+" - "+(this._rect.left*-1)+"px);"
            } else {
                posX = posX+" + "+this._rect.left+"px);"
            }
            posDebug = posDebug + "II,"
        }
        
        // Ancré à droite, au centre, et stretch <> 1
        if ((this._anchorPreset & XAXIS) != APX.LEFT) { 
            posX = posX + "inset-inline-end: calc(anchor("+(this._horizontalAnchor.y*100)+"%)"
            if (this._rect.left<0){ 
                posX = posX+" - "+(this._rect.left*-1)+"px);"
            } else {
                posX = posX+" + "+this._rect.left+"px);"
            }
            posDebug = posDebug + "III,"
        }

        if ((this._anchorPreset & XAXIS) == APX.STRETCHX) { 
            posX = "inset-inline-start: calc(anchor("+(this._horizontalAnchor.x*100)+"%)"
            if (this._rect.left<0){ 
                posX = posX+" - "+(this._rect.left*-1)+"px);"
            } else {
                posX = posX+" + "+this._rect.left+"px);"
            }
            posX = posX + "inset-inline-end: calc(anchor("+(this._horizontalAnchor.y*100)+"%)"
            if (this._rect.right<0){ 
                posX = posX+" - "+(this._rect.right*-1)+"px);"
            } else {
                posX = posX+" + "+this._rect.right+"px);"
            }
        }

        // La hauteur est définie seulement si on est pas en mode stretch <> 24
        if ((this._anchorPreset & YAXIS) != APY.STRETCHY) { 
            posY = posY + 'height:'+this._rect.bottom+"px;"
            posDebug = posDebug + "A"
        }

        // Ancré en haut, au centre, et stretch <> 16
        if ((this._anchorPreset & YAXIS) != APY.BOTTOM) { 
            posY = posY + "inset-block-start: calc(anchor("+(this._verticalAnchor.x*100)+"%)"
            if (this._rect.top<0){ 
                posY = posY+" - "+(this._rect.top*-1)+"px);"
            } else {
                posY = posY+" + "+this._rect.top+"px);"
            }
            posDebug = posDebug + "B"
        }

        // Ancré en bas, au centre, et stretch <> 8
        if ((this._anchorPreset & YAXIS) != APY.TOP) { 
            posY = posY + "inset-block-end: calc(anchor("+(this._verticalAnchor.y*100)+"%)"
            if (this._rect.top<0){ 
                posY = posY+" - "+(this._rect.top*-1)+"px);"
            } else {
                posY = posY+" + "+this._rect.top+"px);"
            }
            posDebug = posDebug + "C"
        }

        if ((this._anchorPreset & YAXIS) == APY.STRETCHY) { 
            posY = "inset-block-start: calc(anchor("+(this._verticalAnchor.x*100)+"%)"
            if (this._rect.left<0){ 
                posY = posY+" - "+(this._rect.top*-1)+"px);"
            } else {
                posY = posY+" + "+this._rect.top+"px);"
            }
            posY = posY + "inset-block-end: calc(anchor("+(this._verticalAnchor.y*100)+"%)"
            if (this._rect.right<0){ 
                posY = posY+" - "+(this._rect.bottom*-1)+"px);"
            } else {
                posY = posY+" + "+this._rect.bottom+"px);"
            }
        }

        // La rotation seulement sur Z, on va rester simple
        pos = pos + posX + posY + "transform:rotate("+this._rotation+"deg);"
        
        // Le pivot de rotation
        pos = pos + "transform-origin:"+(this._pivot.x*100)+"% "+(this._pivot.y*100)+"%;"
        
        // l'échelle du composant
        pos = pos + "scale:"+this._scale.x+" "+this._scale.y+";"
        //console.warn(posDebug)
        return pos
    }

    #removeCenter() {
        if ((this._anchorPreset & XAXIS) == APX.CENTERX) {
            this._rect.left = parseInt(this._rect.left) + this._rect.right/2
        }
        if ((this._anchorPreset & YAXIS) == APY.CENTERY) {
            this._rect.top = parseInt(this._rect.top) + this._rect.bottom/2
            console.log("ICI !!!!!!"+ this._rect.top)
        }
    }

    setTopLeft() {
        this.#removeCenter()
        this._anchorPreset = TOPLEFT
        this._verticalAnchor = new Point2D(0,0)
        this._horizontalAnchor = new Point2D(0,0)
    }
    setTopRight() {
        this.#removeCenter()
        this._anchorPreset = TOPRIGHT
        this._verticalAnchor = new Point2D(0,0)
        this._horizontalAnchor = new Point2D(1,1)
    }
    setTopStretch() {
        this.#removeCenter()
        this._anchorPreset = TOPSTRETCH
        this._verticalAnchor = new Point2D(0,0)
        this._horizontalAnchor = new Point2D(0,1)
    }
    setTop() {
        this.#removeCenter()
        this._anchorPreset = TOP
        this._verticalAnchor = new Point2D(0,0)
        this._horizontalAnchor = new Point2D(0.5,0.5)
        this._rect.left = this._rect.left - this._rect.right/2
        console.log(this.position)
    }

    setCenterLeft(){
        this.#removeCenter()
        this._anchorPreset = CENTERLEFT
        this._verticalAnchor = new Point2D(0.5,0.5)
        this._horizontalAnchor = new Point2D(0,0)
        this._rect.top = this._rect.top - this._rect.bottom/2
    }

    setCenter(){
        this.#removeCenter()
        this._anchorPreset = CENTER
        this._verticalAnchor = new Point2D(0.5,0.5)
        this._horizontalAnchor = new Point2D(0.5,0.5)
        this._rect.left = this._rect.left - this._rect.right/2
        this._rect.top  = this._rect.top - this._rect.bottom/2
    }

    setCenterRight(){
        this.#removeCenter()
        this._anchorPreset = CENTERRIGHT
        this._verticalAnchor = new Point2D(0.5,0.5)
        this._horizontalAnchor = new Point2D(1,1)
        this._rect.top = this._rect.top - this._rect.bottom/2
    }
    setCenterStretch() { 
        this.#removeCenter()
        this._anchorPreset = CENTERSTRETCH
        this._verticalAnchor = new Point2D(0.5,0.5)
        this._horizontalAnchor = new Point2D(0,1)
        this._rect.left = this._rect.left -this._rect.right/2
    }

    setBottomLeft(){
        this.#removeCenter()
        this._anchorPreset = BOTTOMLEFT
        this._verticalAnchor = new Point2D(1,1)
        this._horizontalAnchor = new Point2D(0,0)
    }

    setBottomRight(){
        this.#removeCenter()
        this._anchorPreset = BOTTOMRIGHT
        this._verticalAnchor = new Point2D(1,1)
        this._horizontalAnchor = new Point2D(1,1)
    }

    setBottom(){
        this.#removeCenter()
        this._anchorPreset = BOTTOM
        this._verticalAnchor = new Point2D(1,1)
        this._horizontalAnchor = new Point2D(0.5,0.5)
        this._rect.left = this._rect.left - this._rect.right/2
    }
    setBottomStretch(){
        this.#removeCenter()
        this._anchorPreset = BOTTOMSTRETCH
        this._verticalAnchor = new Point2D(1,1)
        this._horizontalAnchor = new Point2D(0,1)
    }

    setStretchLeft() {
        this.#removeCenter()
        this._anchorPreset = STRETCHLEFT
        this._verticalAnchor = new Point2D(0,1)
        this._horizontalAnchor = new Point2D(0,0)
    }
    setStretchCenter() { 
        this.#removeCenter()
        this._anchorPreset = STRETCHCENTER
        this._verticalAnchor = new Point2D(0,1)
        this._horizontalAnchor = new Point2D(0.5,0.5)
        this._rect.top = this._rect.top - this._rect.bottom/2
    }
    setStretchRight() {
        this.#removeCenter()
        this._anchorPreset = STRETCHRIGHT
        this._verticalAnchor = new Point2D(0,1)
        this._horizontalAnchor = new Point2D(1,1)
    }
    setStretch() { 
        this.#removeCenter()
        this._anchorPreset = STRETCH
        this._verticalAnchor = new Point2D(0,1)
        this._horizontalAnchor = new Point2D(0,1)
    }
}
console.log("RectTransform Component Loaded")
