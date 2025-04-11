class SimObject {
    #parent = undefined
    className = ''
    guid = ''
    name = ''
    components = []
    children = []
    //******************************************************************************************
    // CREO
    //******************************************************************************************
    // Crée un Objet
    // param : 
    //    data : JSON String qui contient la description de l'objet
    constructor(data=undefined) {
        this.className = this.constructor.name
        if (data!=undefined){
            try{
                var _data = JSON.parse(data)
                if (_data.className !== this.className) { throw 'ClassName error :' + this.constructor.name } 
            } catch(error) {
                throw "Wrong data !!! "+error
            }
            this.load(_data)
        } else {
            this.guid = uuidv4()
        }
        this.start()
    }

    // Clone le SimObject
    clone() { return new this.constructor(this.toString()) }

    // Ajoute un composant à l'objet
    addComponent(component) { 
        if (!(component instanceof Component)) { 
            console.error("This is not a component : " + component)
            return false
        }
        this.components.push(component)
        component.setSimObject(this)
        return true
    }

    addChild(simObj) {
        if (!(simObj instanceof SimObject)) { 
            console.error("This is not a SimObject : " + simObj)
            return undefined
        }
        this.children.push(simObj)
        simObj.setParent(this)
        return simObj
    }

    //******************************************************************************************
    // PERDO
    //******************************************************************************************
    removeComponent(componentClass) { 
        let cnt = this.components.length
        for(var ii=0;ii<cnt;ii++){
            if (this.components[ii].componentClass === componentClass) {
                this.components.splice(ii,1)
                return true
            }
        }
        return false
    }

    //******************************************************************************************
    // REGO
    //******************************************************************************************
    // Démarre l'objet - Lance l'objet - => CREO
    start(){}
    // Met à jour l'objet => MUTO
    update(){}
    // Après la mise à jour des objets => INTELLEGO
    postUpdate(){}
    // Destruction de l'objet => PERDO
    stop(){}
    //******************************************************************************************
    // INTELLEGO
    //******************************************************************************************
    getParent() { return this.#parent }

    hasComponent(componentClass){
        for(var ii=0;ii<this.components.length;ii++) 
            if (this.components[ii].componentClass === componentClass) 
                return true
        return false
    }

    getComponent(componentClass){
        let cnt = this.components.length
        for(var ii=0;ii<cnt;ii++){
            if (this.components[ii].componentClass === componentClass) {
                return this.components[ii]
            }
        }
        return undefined
    }

    getChildByIndex(idx){
        if ((idx>=length(this.children)) || (idx<0)) {
            console.error("invalid child index")
            return undefined
        }
        return this.children[idx]
    }

    getChildByGUID(guid){
        let cnt = this.children.length
        for(var ii=0;ii<cnt;ii++){
            if (this.children[ii].guid === guid) {
                return this.children[ii]
            }
        }
        return undefined
    }

    getChildCount(){
        return length(this.children)
    }

    toString(){ return JSON.stringify(this) }

    //******************************************************************************************
    // MUTO
    //******************************************************************************************
    load(data){
        try{ this.name = data.name } catch(e) { console.warn("Name not set in datas !") }
        try{ this.guid = data.guid } catch(e) { console.warn("GUID not set in datas !") }
    }

    setName(pName){
        this.name = pName
    }

    setParent(simObj) {
        if (!(simObj instanceof SimObject)) { 
            console.error("This is not a SimObject : " + simObj)
            return false
        }
        this.#parent =  simObj
    }
}
console.log("SimObject Class Loaded")