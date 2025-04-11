class Color{
    r=0
    g=0
    b=0
    a=1
    constructor(pr=0,pg=0,pb=0,pa=1){
        this.r=pr
        this.g=pg
        this.b=pb
        this.a=pa
    }
    getCSS(){ return 'rgba('+this.r+','+this.g+','+this.b+','+this.a+')' }
}

class Point2D{
    x=0
    y=0
    constructor(px=0,py=0){
        this.x = px
        this.y = py
    }
}



console.log("Basic dataTypes loaded.")