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

console.log("Basic dataTypes loaded.")