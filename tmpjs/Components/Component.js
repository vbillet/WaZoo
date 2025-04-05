class Component {
    componentClass = ''
    testvalue = '2'
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
    load(data){
        try{ this.testValue = data.testValue } catch(error) { console.warn("TestValue not set in data.") }
    }
    toString(){ return JSON.stringify(this) }
}