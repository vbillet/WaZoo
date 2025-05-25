export class Color{
    constructor(pr = 0, pg = 0, pb = 0,pa = 1){
        if (!(between(pr,0,255))) { throw "Invalid Red Componennt, must be between 0 and 255." }
        if (!(between(pg,0,255))) { throw "Invalid Green Componennt, must be between 0 and 255." }
        if (!(between(pb,0,255))) { throw "Invalid Blue Componennt, must be between 0 and 255." }
        if (!(between(pa,0,1)))   { throw "Invalid Alpha Componennt, must be between 0 and 1." }
        this.r = pr
        this.g = pg
        this.b = pb
        this.a = pa
    }
    getCSS(){ return 'rgba('+this.r+','+this.g+','+this.b+','+this.a+')' }
}

export class Point2D{
    constructor(px = 0,py = 0){
        this.x = px
        this.y = py
    }
}

export class Rect{
    constructor(pTop = 0, pLeft = 0, pBottom = 0, pRight = 0){
        this.top = pTop
        this.left = pLeft
        this.bottom = pBottom
        this.right = pRight
    }
    setWidth(w=25)  { this.right = this.left + w }
    setHeight(h=25) { this.bottom = this.top + h }
    width()  { return this.right - this.left }
    height() { return this.bottom - this.top }
    setTop(t=0) { 
        let h = this.bottom-this.top
        this.top = t
        this.bottom = t + h
    }
    setLeft(l=0) { 
        let w = this.right-this.left
        this.left = l
        this.right = l + w
    }
    setBottom(b=0){
        let h = this.bottom-this.top
        this.top = b - h
        this.bottom = b
    }
    setRight(r=0) { 
        let w = this.right-this.left
        this.left = r - w
        this.right = r
    }
    setTopLeft(p=new Point2D()) {
        this.setLeft(p.x)
        this.setTop(p.y)
    }
    setBottomRight(p=new Point2D()) {
        this.setRight(p.x)
        this.setBottom(p.y)
    }
}

console.log("Basic dataTypes loaded.")