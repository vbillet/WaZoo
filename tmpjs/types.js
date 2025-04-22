class Color{
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

class Point2D{
    constructor(px = 0,py = 0){
        this.x = px
        this.y = py
    }
}

class Rect{
    constructor(pTop = 0, pLeft = 0, pBottom = 0, pRight = 0){
        this.Top = pTop
        this.Left = pLeft
        this.Bottom = pBottom
        this.Right = pRight
    }
    setWidth(w=25)  { this.Right = this.Left + w }
    setHeight(h=25) { this.Bottom = this.Top + h }
    width()  { return this.Right - this.Left }
    height() { return this.Bottom - this.Top }
    setTop(t=0) { 
        let h = this.Bottom-this.Top
        this.Top = t
        this.Bottom = t + h
    }
    setLeft(l=0) { 
        let w = this.Right-this.Left
        this.Left = l
        this.Right = l + w
    }
    setBottom(b=0){
        let h = this.Bottom-this.Top
        this.Top = b - h
        this.Bottom = b
    }
    setRight(r=0) { 
        let w = this.Right-this.Left
        this.Left = r - w
        this.Right = r
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