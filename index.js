//import Utils from "./tmpjs/Objects/utils.mjs"
import SimObject from "./tmpjs/Objects/SimObject.mjs"
import DomObject from "./tmpjs/Objects/DomObject.mjs"
import RectTransform from "./tmpjs/Components/RectTransform.mjs"

function isServer() { return typeof window === 'undefined' }

if (isServer()) {
    // Node.js
    let server = new SimObject()
    server.name = "Mon Serveur "//+Utils.uuidv4()
    console.log("server : "+ server.toString())
} else {
    // Client
    let serverConnection = new DomObject()
    serverConnection.addComponent(new RectTransform())
    let rect = serverConnection.getComponent("RectTransform")
    rect.width = 250
    rect.height = 48
    rect.setTopLeft()
    serverConnection.name = "Client : "// + Utils.uuidv4()
    console.log("client : "+ serverConnection.toString())
}