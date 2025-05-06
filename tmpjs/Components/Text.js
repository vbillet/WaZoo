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
/*
Documentation [FR] : 
Documentation [EN] :

*/
class Text extends Component {
    fontFile = ""
    fontFamily = "Arial"
    fontSize = 14
    fontStyle = "normal"
    fontVariant = "normal"
    fontWeight = 400
    lineHeight = 14
    color = new Color(255,0,0,1)
    _text = "Text"
    multiLine = false

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this.fontFile = data.fontFile }       catch(e) { console.warn("No fontFile defined, default value will be used. " + e) }
        try{ this.fontFamily = data.fontFamily }   catch(e) { console.warn("No fontFamily defined, default value will be used. " + e) }
        try{ this.fontSize = data.fontSize }       catch(e) { console.warn("No fontSize defined, default value will be used. " + e) }
        try{ this.fontStyle = data.fontStyle }     catch(e) { console.warn("No fontStyle defined, default value will be used. " + e) }
        try{ this.fontVariant = data.fontVariant } catch(e) { console.warn("No fontVariant defined, default value will be used. " + e) }
        try{ this.fontWeight = data.fontWeight }   catch(e) { console.warn("No fontWeight defined, default value will be used. " + e) }
        try{ this.lineHeight = data.lineHeight }   catch(e) { console.warn("No lineHeight defined, default value will be used. " + e) }
        try{ this._text = data._text }             catch(e) { console.warn("No text defined, default value will be used. " + e) }
        try{ this.color = new Color(data.color.r, 
            data.color.g,
            data.color.b,
            data.color.a) }                        catch(e) { console.warn("Invalid color, default color will be used. " + e) }
    }

    get text(){
        return this._text
    }

    set text(txt){
        this._text = txt
        this.getSimObject().getDomElement().innerHTML = txt
    }

    getInnerHTML() { return /*super.getSimObject().getInnerHTML() +*/ this._text }

    getCSS(){ 
        let result = ""
        result = result + "font-family:" + this.fontFamily + ";"
        result = result + "font-size:" + this.fontSize + "px;"
        result = result + "font-style:" + this.fontStyle + ";"
        result = result + "font-variant:" + this.fontVariant + ";"
        result = result + "font-weight:" + this.fontWeight + ";"
        if (this.fontFile !=""){
            result = "@font-face { " + result + "src:url(\"" + this.fontFile+ "\"); }"
        }
        result = result + "line-height:" + this.lineHeight + "px;"
        result = result + "color: " + this.color.getCSS() + ";"
        result = result + "text-overflow:hidden; overflow:hidden;"
        if (this.multiLine == true){
            result = result + "white-space:normal;"
        } else {
            result = result + "white-space:nowrap;"
        }
        return result
    }
}

console.log("Text Component Loaded")
