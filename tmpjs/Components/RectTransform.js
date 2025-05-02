
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

class RectTransform extends Component {
    anchorPreset =  APY.TOP + APX.LEFT
    rect = new Rect(0,0,250,30)
    verticalAnchor = new Point2D(0,1)
    horizontalAnchor = new Point2D(0,1)
    rotation = 0
    pivot = new Point2D(0,0)
    scale = new Point2D(1,1)

    constructor(data=undefined) { 
        super(data); 
        if (data != undefined) { this.load(data) } else { this.anchorPreset = APY.TOP + APX.LEFT }
    }

    load(data) {
        super.load(data)
    }
    getCSS(){ 
        if (this.getSimObject() === undefined) { return "" }
        if (this.getSimObject().getParent() === undefined) { return "" }
        console.log(this.getSimObject())
        let posDebug = this.anchorPreset + " "
        let pos= "position:fixed;"
        // Le position anchor c'est le guid du parent de l'objet contenant
        pos = pos + "position-anchor:--"+this.getSimObject().getParent().guid+";"
        // le anchor-name c'est le guid de l'objet contenant
        pos = pos + "anchor-name:--"+this.getSimObject().guid+";"
        let posX = ""
        let posY = ""
        // La largeur est définie seulement si on est pas en mode stretch <>3
        if ((this.anchorPreset & XAXIS) != APX.STRETCHX) { 
            posX = posX + "width:"+this.rect.right+"px;" 
            posDebug = posDebug + "I,"
        }
        
        // Ancré à gauche, au centre, et stretch <> 2
        if ((this.anchorPreset & XAXIS) != APX.RIGHT) { 
            posX = posX + "inset-inline-start: calc(anchor("+(this.horizontalAnchor.x*100)+"%)"
            if (this.rect.left<0){
                posX = posX+" - "+(this.rect.left*-1)+"px);"
            } else {
                posX = posX+" + "+this.rect.left+"px);"
            }
            posDebug = posDebug + "II,"
        }
        
        // Ancré à droite, au centre, et stretch <> 1
        if ((this.anchorPreset & XAXIS) != APX.LEFT) { 
            posX = posX + "inset-inline-end: calc(anchor("+(this.horizontalAnchor.y*100)+"%)"
            if (this.rect.left<0){ 
                posX = posX+" - "+(this.rect.left*-1)+"px);"
            } else {
                posX = posX+" + "+this.rect.left+"px);"
            }
            posDebug = posDebug + "III,"
        }

        if ((this.anchorPreset & XAXIS) == APX.STRETCHX) { 
            posX = "inset-inline-start: calc(anchor("+(this.horizontalAnchor.x*100)+"%)"
            if (this.rect.left<0){ 
                posX = posX+" - "+(this.rect.left*-1)+"px);"
            } else {
                posX = posX+" + "+this.rect.left+"px);"
            }
            posX = posX + "inset-inline-end: calc(anchor("+(this.horizontalAnchor.y*100)+"%)"
            if (this.rect.right<0){ 
                posX = posX+" - "+(this.rect.right*-1)+"px);"
            } else {
                posX = posX+" + "+this.rect.right+"px);"
            }
        }

        // La hauteur est définie seulement si on est pas en mode stretch <> 24
        if ((this.anchorPreset & YAXIS) != APY.STRETCHY) { 
            posY = posY + 'height:'+this.rect.bottom+"px;"
            posDebug = posDebug + "A"
        }

        // Ancré en haut, au centre, et stretch <> 16
        if ((this.anchorPreset & YAXIS) != APY.BOTTOM) { 
            posY = posY + "inset-block-start: calc(anchor("+(this.verticalAnchor.x*100)+"%)"
            if (this.rect.top<0){ 
                posY = posY+" - "+(this.rect.top*-1)+"px);"
            } else {
                posY = posY+" + "+this.rect.top+"px);"
            }
            posDebug = posDebug + "B"
        }

        // Ancré en bas, au centre, et stretch <> 8
        if ((this.anchorPreset & YAXIS) != APY.TOP) { 
            posY = posY + "inset-block-end: calc(anchor("+(this.verticalAnchor.y*100)+"%)"
            if (this.rect.top<0){ 
                posY = posY+" - "+(this.rect.top*-1)+"px);"
            } else {
                posY = posY+" + "+this.rect.top+"px);"
            }
            posDebug = posDebug + "C"
        }

        if ((this.anchorPreset & YAXIS) == APY.STRETCHY) { 
            posY = "inset-block-start: calc(anchor("+(this.verticalAnchor.x*100)+"%)"
            if (this.rect.left<0){ 
                posY = posY+" - "+(this.rect.top*-1)+"px);"
            } else {
                posY = posY+" + "+this.rect.top+"px);"
            }
            posY = posY + "inset-block-end: calc(anchor("+(this.verticalAnchor.y*100)+"%)"
            if (this.rect.right<0){ 
                posY = posY+" - "+(this.rect.bottom*-1)+"px);"
            } else {
                posY = posY+" + "+this.rect.bottom+"px);"
            }
        }

        // La rotation seulement sur Z, on va rester simple
        pos = pos + posX + posY + "transform:rotate("+this.rotation+"deg);"
        
        // Le pivot de rotation
        pos = pos + "transform-origin:"+(this.pivot.x*100)+"% "+(this.pivot.y*100)+"%;"
        
        // l'échelle du composant
        pos = pos + "scale:"+this.scale.x+" "+this.scale.y+";"
        //console.warn(posDebug)
        return pos
    }

    #removeCenter() {
        if ((this.anchorPreset & XAXIS) == APX.CENTERX) {
            this.rect.left = parseInt(this.rect.left) + this.rect.right/2
        }
        if ((this.anchorPreset & YAXIS) == APY.CENTERY) {
            this.rect.top = parseInt(this.rect.top) + this.rect.bottom/2
            console.log("ICI !!!!!!"+ this.rect.top)
        }
    }

    setTopLeft() {
        this.#removeCenter()
        this.anchorPreset = TOPLEFT
        this.verticalAnchor = new Point2D(0,0)
        this.horizontalAnchor = new Point2D(0,0)
    }
    setTopRight() {
        this.#removeCenter()
        this.anchorPreset = TOPRIGHT
        this.verticalAnchor = new Point2D(0,0)
        this.horizontalAnchor = new Point2D(1,1)
    }
    setTopStretch() {
        this.#removeCenter()
        this.anchorPreset = TOPSTRETCH
        this.verticalAnchor = new Point2D(0,0)
        this.horizontalAnchor = new Point2D(0,1)
    }
    setTop() {
        this.#removeCenter()
        this.anchorPreset = TOP
        this.verticalAnchor = new Point2D(0,0)
        this.horizontalAnchor = new Point2D(0.5,0.5)
        this.rect.left = this.rect.left - this.rect.right/2
        console.log(this.position)
    }

    setCenterLeft(){
        this.#removeCenter()
        this.anchorPreset = CENTERLEFT
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(0,0)
        this.rect.top = this.rect.top - this.rect.bottom/2
    }

    setCenter(){
        this.#removeCenter()
        this.anchorPreset = CENTER
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(0.5,0.5)
        this.rect.left = this.rect.left - this.rect.right/2
        this.rect.top  = this.rect.top - this.rect.bottom/2
    }

    setCenterRight(){
        this.#removeCenter()
        this.anchorPreset = CENTERRIGHT
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(1,1)
        this.rect.top = this.rect.top - this.rect.bottom/2
    }
    setCenterStretch() { 
        this.#removeCenter()
        this.anchorPreset = CENTERSTRETCH
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(0,1)
        this.rect.left = this.rect.left -this.rect.right/2
    }

    setBottomLeft(){
        this.#removeCenter()
        this.anchorPreset = BOTTOMLEFT
        this.verticalAnchor = new Point2D(1,1)
        this.horizontalAnchor = new Point2D(0,0)
    }

    setBottomRight(){
        this.#removeCenter()
        this.anchorPreset = BOTTOMRIGHT
        this.verticalAnchor = new Point2D(1,1)
        this.horizontalAnchor = new Point2D(1,1)
    }

    setBottom(){
        this.#removeCenter()
        this.anchorPreset = BOTTOM
        this.verticalAnchor = new Point2D(1,1)
        this.horizontalAnchor = new Point2D(0.5,0.5)
        this.rect.left = this.rect.left - this.rect.right/2
    }
    setBottomStretch(){
        this.#removeCenter()
        this.anchorPreset = BOTTOMSTRETCH
        this.verticalAnchor = new Point2D(1,1)
        this.horizontalAnchor = new Point2D(0,1)
    }

    setStretchLeft() {
        this.#removeCenter()
        this.anchorPreset = STRETCHLEFT
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,0)
    }
    setStretchCenter() { 
        this.#removeCenter()
        this.anchorPreset = STRETCHCENTER
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0.5,0.5)
        this.rect.top = this.rect.top - this.rect.bottom/2
    }
    setStretchRight() {
        this.#removeCenter()
        this.anchorPreset = STRETCHRIGHT
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(1,1)
    }
    setStretch() { 
        this.#removeCenter()
        this.anchorPreset = STRETCH
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }
}
console.log("RectTransform Component Loaded")
