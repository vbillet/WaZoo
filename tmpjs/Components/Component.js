class Component {
    componentClass = ''
    #parentSimObject = undefined

    constructor(data=undefined) {
        this.componentClass = this.constructor.name
        if (data!=undefined){
            if (data.componentClass !== this.constructor.name) { throw 'componentClass error :' + this.componentClass }
            this.load(data)
        } 
    }

    load(data){ }

    setSimObject(obj) {
        if (!(obj instanceof SimObject)) { throw "Try to set SimObject, but parameter is not a SimObject !" }
        if (this.#parentSimObject !== undefined) { throw "Parent SimObject is already defined !" }
        this.#parentSimObject = obj
    }

    getSimObject(){ return this.#parentSimObject }

    toString(){ return JSON.stringify(this) }
}

console.log("Componenent class Loaded")