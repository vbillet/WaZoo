const APX = {
    CENTERX: 0,
    LEFT: 1,
    RIGHT: 2,
    STRETCHX: 3
}
const APY = {
    CENTERY: 4,
    TOP: 8,
    BOTTOM: 16,
    STRETCHY: 24
}

class RectTransform extends Component {
    anchorPreset = APX.TOP + APY.LEFT 
    width = "100"
    height = "50"
    top = "0"
    left = "0"
    right = "0"
    bottom = "0"

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
    }
    getCSS(){ 
        let position = "position:fixed;"
        if ((this.anchorPreset && APY.LEFT)==APY.LEFT) { 
            position = position + "left: "+this.left 
        }
        if ((this.anchorPreset && APY.RIGHT)==APY.RIGHT) { 
            position = position + "right: "+this.right 
        }
        if ((this.anchorPreset && APY.RIGHT)!=APY.RIGHT) { 
            position = position + "right: "+this.right 
        }

        return "position:fixed;" +
                     "width:" + this.width + this.widthUnit + ';' +
                     "height:" + this.height + this.heightUnit + ';' +
                     "top:" + this.top +'px;' +
                     "left:" + this.left +'px;'
    }
}
console.log("RectTransform Component Loaded")
