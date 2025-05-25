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
import DomObject from "./DomObject.mjs"

class BodyObject extends DomObject{
    render(){
        this.update()
        
        let cnt = this.children.length
        for (let ii = 0; ii<cnt; ii++) {
            this.getChildByIndex(ii).render()
        }

        if (!this.isDirty()) { return }

        document.body.style = "anchor-name: --"+this.guid+";min-height:100vh;max-height:100vh;width:100%"
        document.body.id = this.guid
        this.clearDirty()
        this.postUpdate()
    }

    start() { 
        this._addToDomInterface(document.body)
        super.start()
    }
}

console.log("BodyObject Loaded")