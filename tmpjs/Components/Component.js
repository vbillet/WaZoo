class Component {
    componentClass = ''
    #parentSimObject = undefined

    constructor(data=undefined) {
        this.componentClass = this.constructor.name
        if (data!=undefined){
            try{
                if (data.componentClass !== this.className) 
                {
                    console.error('componentClass error :' + this.componentClass)
                    return
                }
            } catch(error) {
                console.log("Wrong data !!! "+error)
                return
            }
            this.load(data)
        } 
    }

    load(data){ }

    setSimObject(obj) {
        if (!(obj instanceof SimObject)) {
            console.error("Try to set SimObject, but parameter is not a SimObject !")
            return
        }
        if (this.#parentSimObject !== undefined) {
            console.error("Parent SimObject is already defined !")
            return
        }
        this.#parentSimObject = obj
    }

    getSimObject(){ return this.#parentSimObject }

    toString(){ return JSON.stringify(this) }
}

console.log("Componenent class Loaded")