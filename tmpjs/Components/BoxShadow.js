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

class BoxShadow extends Component {
    _color = new Color(255,0,0,1)
    _offset = new Point2D(0,0)
    _blurRadius = 10
    _spreadRadius = 10
    _inset = false

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }

    load(data) {
        super.load(data)
        try{ this._color = new Color(data._color.r,
                                    data._color.g,
                                    data._color.b,
                                    data._color.a)
        } catch(e) { console.warn("Bad shadow color" + e) }

        try{ this._offset = new Point2D(data._offset.x,
                                       data._offset.y)
        } catch(e) { console.warn("Bad shadow offset" + e) }

        try{ this._blurRadius = data._blurRadius }      catch(e) { console.warn("Missing blurRadius" + e) }
        try{ this._spreadRadius = data._spreadRadius }  catch(e) { console.warn("Missing spreadRadius" + e) }
        try{ this._inset = data._inset }                catch(e) { console.warn("Missing inset setting" + e) }

    }

    get color() { return this._color }
    get offset() { return this._offset }
    get blurRadius() { return this._blurRadius }
    get spreadRadius() { return this._spreadRadius }
    get inset() { return this._inset }

    set color(_color) {
        this._color = _color
        this.getSimObject().setDirty()
    }
    set offset(_offset) {
        this._offset = _offset
        this.getSimObject().setDirty()
    }
    set blurRadius(_blurRadius) {
        this._blurRadius = _blurRadius
        this.getSimObject().setDirty()
    }
    set spreadRadius(_spreadRadius) {
        this._spreadRadius = _spreadRadius
        this.getSimObject().setDirty()
    }
    set inset(_inset) {
        this._inset = _inset
        this.getSimObject().setDirty()
    }

    getCSS(){ 
        let result = "box-shadow:"
        if (this.inset) { result = result + "inset " }
        result = result + this._offset.x + "px " + this._offset.y + "px "
        result = result + this._blurRadius + "px " + this._spreadRadius + "px "
        result = result + this._color.getCSS()
        result = result + ";"
        return result
    }
}