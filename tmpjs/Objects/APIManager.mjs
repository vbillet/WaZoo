class APIManager extends SimObject {
    baseURL = 'http://localhost:21060'
    #http = undefined

    constructor(data=undefined) { super(data); }

    load(data){
        try {this.baseURL = data.baseURL } catch(e) { console.warn("Base URL is not defined, using localhost:21060.") }
    }

    start(){
        this.#http = new XMLHttpRequest()
        this.#http.onreadystatechange = this.onreadystatechange();
        this.#http.onabort = this.onabort();
        this.#http.onerror = this.onerror();
        this.#http.onload = this.onload();
        this.#http.onloadend = this.onloadend();
        this.#http.onloadstart = this.onloadstart();
        this.#http.onprogress = this.onprogress();
        this.#http.ontimeout = this.ontimeout();
    }

    GET(URL,params,body,cookies){
        this.#http.send('GET',URL)
    }

    POST(URL,params,body,cookies){

    }

    PUT(URL,params,body,cookies){

    }

    DELETE(URL,params,body,cookies){

    }

    SENDFILE(URL,params,body,cookies){

    }

    onabort(e) {

    }
    onerror(e) {

    }
    onload(e) {

    }
    onloadend(e) {

    }
    onloadstart(e) {

    }
    onprogress(e) {

    }
    ontimeout(e) {

    }
}