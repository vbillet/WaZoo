/*
MIT License

Copyright (c) 2025 BILLET Vincent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class Text extends Component {
    _fontFile = ""
    _fontFamily = "Arial"
    _fontSize = 14
    _fontStyle = "normal"
    _fontVariant = "normal"
    _fontWeight = 400
    _lineHeight = 14
    _color = new Color(255,255,255,1)
    _text = "Text"
    _multiLine = false

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this._fontFile = data._fontFile }       catch(e) { console.warn("No fontFile defined, default value will be used. " + e) }
        try{ this._fontFamily = data._fontFamily }   catch(e) { console.warn("No fontFamily defined, default value will be used. " + e) }
        try{ this._fontSize = data._fontSize }       catch(e) { console.warn("No fontSize defined, default value will be used. " + e) }
        try{ this._fontStyle = data._fontStyle }     catch(e) { console.warn("No fontStyle defined, default value will be used. " + e) }
        try{ this._fontVariant = data._fontVariant } catch(e) { console.warn("No fontVariant defined, default value will be used. " + e) }
        try{ this._fontWeight = data._fontWeight }   catch(e) { console.warn("No fontWeight defined, default value will be used. " + e) }
        try{ this._lineHeight = data._lineHeight }   catch(e) { console.warn("No lineHeight defined, default value will be used. " + e) }
        try{ this._text = data._text }               catch(e) { console.warn("No text defined, default value will be used. " + e) }
        try{ this._color = new Color(data._color.r, 
            data._color.g,
            data._color.b,
            data._color.a) }                         catch(e) { console.warn("Invalid color, default color will be used. " + e) }
    }

    set text(txt){
        this._text = txt
        let obj = this.getSimObject()
        obj.getDomElement().innerHTML = txt
        obj.setDirty()
    }

    get fontFile() { return this._fontFile }
    get fontFamily() { return this._fontFamily }
    get fontSize() { return this._fontSize }
    get fontStyle() { return this._fontStyle }
    get fontVariant() { return this._fontVariant }
    get fontWeight() { return this._fontWeight }
    get lineHeight() { return this._lineHeight }
    get color() { return this._color }
    get text() { return this._text }
    get multiLine() { return this._multiLine }

    set fontFile(val) {
        this._fontFile = val
        this.getSimObject().setDirty()
    }

    set fontFamily(val) {
        this._fontFamily = val
        this.getSimObject().setDirty()
    }

    set fontSize(val) {
        this._fontSize = val
        this.getSimObject().setDirty()
    }

    set fontStyle(val) {
        this._fontStyle = val
        this.getSimObject().setDirty()
    }

    set fontVariant(val) {
        this._fontVariant = val
        this.getSimObject().setDirty()
    }

    set fontWeight(val) {
        this._fontWeight = val
        this.getSimObject().setDirty()
    }

    set lineHeight(val) {
        this._lineHeight = val
        this.getSimObject().setDirty()
    }

    set color(val) {
        this._color = val
        this.getSimObject().setDirty()
    }

    set multiLine(val) {
        this._multiLine = val
        this.getSimObject().setDirty()
    }

    getInnerHTML() { return this.text }

    getCSS(){ 
        let result = ""
        result = result + "font-family:" + this._fontFamily + ";"
        result = result + "font-size:" + this._fontSize + "px;"
        result = result + "font-style:" + this._fontStyle + ";"
        result = result + "font-variant:" + this._fontVariant + ";"
        result = result + "font-weight:" + this._fontWeight + ";"
        if (this._fontFile !=""){
            result = "@font-face { " + result + "src:url(\"" + this._fontFile+ "\"); }"
        }
        result = result + "line-height:" + this._lineHeight + "px;"
        result = result + "color: " + this._color.getCSS() + ";"
        result = result + "text-overflow:hidden; overflow:hidden;"
        if (this._multiLine == true){
            result = result + "white-space:normal;"
        } else {
            result = result + "white-space:nowrap;"
        }
        return result
    }
}

console.log("Text Component Loaded")
