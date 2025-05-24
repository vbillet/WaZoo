//import Utils from "./tmpjs/Objects/utils.mjs"
import SimObject from "./tmpjs/Objects/SimObject.mjs"

function isServer() { return typeof window === 'undefined' }

if (isServer()) {
    // Node.js
    let server = new SimObject()
    server.name = "Mon Serveur "//+Utils.uuidv4()
    console.log("server : "+ server.toString())
} else {
    // Client
    let serverConnection = new SimObject()
    serverConnection.name = "Client : "// + Utils.uuidv4()
    console.log("client : "+ serverConnection.toString())
}