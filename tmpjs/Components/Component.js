class Component {
    guid = ''
    componentClass = ''
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
        } else {
            this.guid = uuidv4()
        }
    }

    load(data){
        //try{ this.testValue = data.testValue } catch(error) { console.warn("TestValue not set in data.") }
        try{ this.guid = data.guid } catch(e) { console.warn("GUID is not set in data.") }
    }

    toString(){ return JSON.stringify(this) }
}

console.log("Componenent class Loaded")