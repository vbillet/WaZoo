import BodyObject from "./BodyObject.mjs";
import SimObject from "./SimObject.mjs"
import DivObject from "./DivObject.mjs"
import RectTransform from "../Components/RectTransform.mjs";
import Border from "../Components/Border.mjs";
import { Color,Point2D,Rect } from "./types.mjs";
import DomInterface from "./DomInterface.mjs";

export default class Application extends SimObject{
    #modules = []

    constructor(data=undefined) { super(data); }

    load(data){
        
    }

    addMicroService(module) {

        this.#modules.push(module)
    }

    removeMicroService(moduleName) {
        let cnt = this.#modules.length
        for(let ii=0; ii<cnt; ii++){
            if (this.#modules[ii].name == moduleName){
                this.#modules.splice(ii,1)
                return
            }
        }
    }

    start(){
        console.log('Starting Application')

        let body = new BodyObject()
        console.log(body)
        console.log(DomInterface.get().elts)
        console.log("------------------------")
        let div = body.addChild(new DivObject())

        let rect = new RectTransform()
        rect.setTopLeft()
        rect._rect.setWidth(100)
        rect._rect.setHeight(30)
        rect._rect.setTop(5)
        rect._rect.setLeft(50)
        rect._rotation = 10
        rect._pivot = new Point2D(0.5,0.5)
        console.log(rect.toString())
        let border = new Border()
        border.color = new Color(255,0,0,1)
        border.width = new Rect(5,1,5,1)
        console.log(border.toString())

        div.addComponent(rect)
        div.addComponent(border)

        body.addChild(div)
        //body.start()
        console.log(body)

        console.log(DomInterface.get().elts)

        super.start()
        body.render()
        console.log(DomInterface.get().elts)
        console.log(body)
        //div.render()
    }
}

console.log("Application class loaded")
