class RectTransform extends Component {
    width = "100"
    widthUnit = "px"
    height = "50"
    heightUnit = "px"

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
    }
    getCSSString(){ return "width:" + this.width + this.widthUnit + ';' +
                           "height:" + this.height + this.heightUnit + ';'
     }
}
console.log("RectTransform Component Loaded")