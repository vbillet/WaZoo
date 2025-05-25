class Application extends SimObject{
    #modules = []

    constructor(data=undefined) { super(data); }

    load(data){
        
    }

    addModule(module) {

        this.#modules.push(module)
    }

    removeModule(moduleName) {
        let cnt = this.#modules.length
        for(let ii=0; ii<cnt; ii++){
            if (this.#modules[ii].name == moduleName){
                this.#modules.splice(ii,1)
                return
            }
        }
    }

    start(){

    }
}
