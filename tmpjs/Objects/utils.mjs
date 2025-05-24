let __utils=undefined

export default class Utils{

  constructor(){
    if (__utils != undefined) { throw new Error("Cannot create another instance of Utils.") }
    __utils=this
  }

  static uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
  }

  static between(v,min,max){
    return (v >= min) && (v <= max)
  }
}

console.log("WaZoo V0.1 is starting...")

new Utils()
