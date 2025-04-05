class RectTransform extends Component {
    width = "100"
    widthUnit = "px"
    height = "50"
    heightUnit = "px"
    top = "0"
    left = "0"
    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
    }
    getCSS(){ return "width:" + this.width + this.widthUnit + ';' +
                     "height:" + this.height + this.heightUnit + ';' +
                     "top:" + this.height +'px;' +
                     "left:" + this.height +'px;'
    }
}
console.log("RectTransform Component Loaded")
