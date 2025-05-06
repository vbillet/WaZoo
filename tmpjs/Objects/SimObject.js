class SimObject {
    #parent = undefined
    className = ''
    guid = ''
    name = ''
    components = []
    children = []
    #dirty = true
    //******************************************************************************************
    // CREO
    //******************************************************************************************
    // Crée un Objet
    // param : 
    //    data : JSON String qui contient la description de l'objet
    constructor(data=undefined) {
        if (data!=undefined){
            try{
                //var _data = JSON.parse(data)
                var _data = data
                if (_data.className !== this.constructor.name) { throw 'ClassName error :' + this.constructor.name } 
            } catch(error) {
                throw "Wrong data !!! "+error
            }
            this.load(_data)
        } else {
            this.guid = uuidv4()
        }
        this.className = this.constructor.name
        //this.start()
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

    removeChild(guid) {
        let cnt = this.children.length
        for(var ii=0;ii<cnt;ii++){
            if (this.children[ii].guid === guid) {
                this.children.splice(ii,1)
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
        let cnt = this.children.length
        if ((idx>cnt) || (idx<0)) {
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
        return this.children.length
    }

    toString(){ return JSON.stringify(this) }

    //******************************************************************************************
    // MUTO
    //******************************************************************************************
    load(data){
        try{ this.name = data.name } catch(e) { console.warn("Name not set in datas !") }
        try{ this.guid = data.guid } catch(e) { console.warn("GUID not set in datas !") }
        console.log(JSON.stringify(data.children[0]))
        let json = ""
        let obj = undefined
        let comp = undefined
        let cnt = data.children.length
        for (let ii=0; ii<cnt; ii++) {
            json = data.children[ii]
            console.log(this.guid + "==>" + json.guid)
            eval("obj = new " + data.children[ii].className + "(json);")
            this.addChild(obj)
        }

        cnt = data.components.length
        for (let ii=0; ii<cnt; ii++) {
            //json = JSON.stringify(data.components[ii])
            json = data.components[ii]
            console.log(json)
            eval("comp = new " + data.components[ii].componentClass + "(json);")
            this.addComponent(comp)
        }
        //this.render()
    }

    setName(pName){
        this.name = pName
    }

    clearParent(){
        if (this.#parent != undefined) {
            this.#parent.removeChild(this.guid)
        }
        this.#parent = undefined
    }

    setParent(simObj) {
        if (!(simObj instanceof SimObject)) { 
            console.error("This is not a SimObject : " + simObj)
            return false
        }
        this.clearParent()
        this.#parent = simObj
        simObj.children.push(this)
    }
}
console.log("SimObject Class Loaded")