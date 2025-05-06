class Text extends Component {
    fontFile = ""
    fontFamily = "Arial"
    fontSize = 14
    fontStyle = "normal"
    fontVariant = "normal"
    fontWeight = 400
    lineHeight = 14
    _text = "Text"
    
    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
    }

    get text(){
        return this._text
    }

    set text(txt){
        this._text = txt
        this.getSimObject().getDomElement().innerHTML = txt
    }

    getCSS(){ 
        let result = ""
        result = result + "font-family:" + this.fontFamily + ";"
        result = result + "font-size:" + this.fontSize + "px;"
        result = result + "font-style:" + this.fontStyle + ";"
        result = result + "font-variant:" + this.fontVariant + ";"
        result = result + "font-weight:" + this.fontWeight + ";"
        result = result + "line-height:" + this.lineHeight + "px;"
        if (this.fontFile !=""){
            result = "@font-face { " + result + "src:url(\"" + this.fontFile+ "\"); }"
        }
        return result
    }
}
console.log("Text Component Loaded")