class SimObject {
    className = ''
    name = ''
    components = []
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
                if (_data.className !== this.className) 
                {
                    console.error('ClassName error :' + this.className)
                    return
                }
            } catch(error) {
                console.log("Wrong data !!! "+error)
                return
            }
            this.load(_data)
        }
        this.start()
    }

    clone() { return new this.constructor(this.toString()) }

    // Ajoute un composant
    addComponent(component) { 
        if (!(component instanceof Component)) { 
            console.warn("This is not a component : " + component)
            return false
        }
        this.components.push(component)
        return true
    }
    createElement(tag){
        return document.createElementNS("http://www.w3.org/1999/xhtml", tag)
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

    toString(){ return JSON.stringify(this) }

    //******************************************************************************************
    // MUTO
    //******************************************************************************************
    load(data){
        try{ this.name = data.name } catch(error) { console.warn("Name not set in datas !") }
    }

    setName(pName){
        this.name = pName
    }
}
