
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
const YAXIS = 240

const TOPLEFT = APY.TOP+APX.LEFT
const TOP = APY.TOP+APX.STRETCHX
const TOPRIGHT = APY.TOP+APX.RIGHT
const TOPSTRETCH = APY.TOP+APX.STRETCHX

const CENTERLEFT = APY.CENTERY+APX.LEFT
const CENTER = APY.CENTERY+APX.STRETCHX
const CENTERRIGHT = APY.CENTERY+APX.RIGHT
const CENTERSTRETCHX = APY.CENTERY+APX.STRETCHX

const BOTTOMLEFT = APY.BOTTOM+APX.LEFT
const BOTTOM = APY.BOTTOM+APX.STRETCHX
const BOTTOMRIGHT = APY.BOTTOM+APX.RIGHT
const BOTTOMSTRETCH = APY.BOTTOM+APX.STRETCHX

const STRETCHLEFT = APY.STRETCHY+APX.LEFT
const CENTERSTRETCHY = APY.STRETCHY+APX.STRETCHX
const STRETCHRIGHT = APY.STRETCHY+APX.RIGHT
const STRETCH = APY.STRETCHY+APX.STRETCHX

class RectTransform extends Component {
    anchorPreset =  APY.TOP + APX.LEFT
    rect = new Rect(0,0,250,30)
    //size = new Point2D(250,30)
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

        pos = pos + "inset-inline-start: calc(anchor("+(this.horizontalAnchor.x*100)+"%)"
        if (this.rect.Left < 0){
            pos = pos+" - "+(this.rect.Left*-1)+"px);"
        } else {
            pos = pos+" + "+this.rect.Left+"px);"
        }

        pos = pos + "inset-inline-end: calc(anchor("+(this.horizontalAnchor.y*100)+"%)"
        if (this.rect.Right<0){ 
            pos = pos+" - "+(this.rect.Right*-1)+"px);"
        } else {
            pos = pos+" + "+this.rect.Right+"px);"
        }

        pos = pos + "inset-block-start: calc(anchor("+(this.verticalAnchor.x*100)+"%)"
        if (this.rect.Top<0){ //TODO: Vérifier le signe sur l'ancgrafe à droite
            pos = pos+" - "+(this.rect.Top*-1)+"px);"
        } else {
            pos = pos+" + "+this.rect.Top+"px);"
        }

        pos = pos + "inset-block-end: calc(anchor("+(this.verticalAnchor.y*100)+"%)"
        if (this.rect.Bottom<0){ //TODO: Vérifier le signe sur l'ancgrafe à droite
            pos = pos+" - "+(this.rect.Bottom*-1)+"px);"
        } else {
            pos = pos+" + "+this.rect.Bottom+"px);"
        }

        if (this.verticalAnchor.x == this.verticalAnchor.y) {
            pos = pos + "width:" + this.rect.width()
        }
        if (this.horizontalAnchor.x == this.horizontalAnchor.y) {
            pos = pos + "height:" + this.rect.height()
        }
        /*
        // La largeur est définie seulement si on est pas en mode stretch <>3
        if ((this.anchorPreset & XAXIS) != APX.STRETCHX) { 
            pos = pos + "width:"+this.size.x+"px;" 
            posDebug = posDebug + "I,"
        }
        
        // Ancré à gauche, au centre, et stretch <> 2
        if ((this.anchorPreset & XAXIS) != APX.RIGHT) { 
            pos = pos + "inset-inline-start: calc(anchor("+(this.horizontalAnchor.x*100)+"%)"
            if (this.position.x<0){
                pos = pos+" - "+(this.position.x*-1)+"px);"
            } else {
                pos = pos+" + "+this.position.x+"px);"
            }
            posDebug = posDebug + "II,"
        }
        
        // Ancré à droite, au centre, et stretch <> 1
        if ((this.anchorPreset & XAXIS) != APX.LEFT) { 
            pos = pos + "inset-inline-end: calc(anchor("+(this.horizontalAnchor.y*100)+"%)"
            if (this.position.x<0){ 
                pos = pos+" - "+(this.position.x*-1)+"px);"
            } else {
                pos = pos+" + "+this.position.x+"px);"
            }
            posDebug = posDebug + "III,"
        }

        // La hauteur est définie seulement si on est pas en mode stretch <> 24
        if ((this.anchorPreset & YAXIS) != APY.STRETCHY) { 
            pos = pos + 'height:'+this.size.y+"px;"
            posDebug = posDebug + "A"
        }

        // Ancré en haut, au centre, et stretch <> 16
        if ((this.anchorPreset & YAXIS) != APY.BOTTOM) { 
            pos = pos + "inset-block-start: calc(anchor("+(this.verticalAnchor.x*100)+"%)"
            if (this.position.y<0){ //TODO: Vérifier le signe sur l'ancgrafe à droite
                pos = pos+" - "+(this.position.y*-1)+"px);"
            } else {
                pos = pos+" + "+this.position.y+"px);"
            }
            posDebug = posDebug + "B"
        }

        // Ancré en bas, au centre, et stretch <> 8
        if ((this.anchorPreset & YAXIS) != APY.TOP) { 
            pos = pos + "inset-block-end: calc(anchor("+(this.verticalAnchor.y*100)+"%)"
            if (this.position.y<0){ //TODO: Vérifier le signe sur l'ancgrafe à droite
                pos = pos+" - "+(this.position.y*-1)+"px);"
            } else {
                pos = pos+" + "+this.position.y+"px);"
            }
            posDebug = posDebug + "C"
        }
        */
        // La rotation seulement sur Z, on va rester simple
        pos = pos + "transform:rotate("+this.rotation+"deg);"
        
        // Le pivot de rotation
        pos = pos + "transform-origin:"+(this.pivot.x*100)+"% "+(this.pivot.y*100)+"%;"
        
        // l'échelle du composant
        pos = pos + "scale:"+this.scale.x+" "+this.scale.y+";"
        console.warn(posDebug)
        return pos
    }

    setTopLeft(){
        this.anchorPreset = TOPLEFT
        this.verticalAnchor = new Point2D(0,0)
        this.horizontalAnchor = new Point2D(0,0)
    }

    setTopRight(){
        this.anchorPreset = TOPRIGHT
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }

    setTopStretch(){
        this.anchorPreset = TOPSTRETCH
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }

    setTop(){
        this.anchorPreset = TOP
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0.5,0.5)
        this.position.x = -this.size.x/2
        console.log(this.position)
    }

    setCenterLeft(){
        this.anchorPreset = CENTERLEFT
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(0,1)
        this.position.y = -this.size.y/2
    }

    setCenter(){
        this.anchorPreset = CENTER
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(0.5,0.5)
        this.position = new Point2D(-this.size.x/2, -this.size.y/2)
    }

    setCenterRight(){
        this.anchorPreset = CENTERRIGHT
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(1,1)
        this.position.y -this.size.y/2
    }

    setBottomLeft(){
        this.anchorPreset = BOTTOMLEFT
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }

    setBottomRight(){
        this.anchorPreset = BOTTOMRIGHT
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }

    setBottom(){
        this.anchorPreset = BOTTOM
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0.5,0.5)
        this.position.x = -this.size.x/2
    }

    setStretchLeft() {
        this.anchorPreset = STRETCHLEFT
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }
    setCenterStretchY() { 
        this.anchorPreset = CENTERSTRETCHY
        this.verticalAnchor = new Point2D(0.5,0.5)
        this.horizontalAnchor = new Point2D(0,1)
        this.position.y -this.size.y/2
    }
    setStretchRight() {
        this.anchorPreset = STRETCHRIGHT
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }
    setStretch() { 
        this.anchorPreset = STRETCH
        this.verticalAnchor = new Point2D(0,1)
        this.horizontalAnchor = new Point2D(0,1)
    }
}
console.log("RectTransform Component Loaded")
