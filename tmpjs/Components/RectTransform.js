
const APX = {
    CENTERX: 0,
    LEFT: 1,
    RIGHT: 2,
    STRETCHX: 3
}
const APY = {
    CENTERY: 4,
    TOP: 8,
    BOTTOM: 16,
    STRETCHY: 24
}

class RectTransform extends Component {
    anchorPreset = "0"
    width = "100"
    height = "50"
    top = "5"
    left = "20"
    right = "0"
    bottom = "0"

    constructor(data=undefined) { 
        super(data); 
        if (data != undefined) { this.load(data) } else { this.anchorPreset = APY.TOP + APX.LEFT }
    }

    load(data) {
        super.load(data)
    }
    getCSS(){ 
        let position = "position:fixed;"
        // le anchor-name c'est le guid de l'objet parent du contenant
        position = position + 'anchor-name:--'+this.getSimObject().guid+';'
        // Le position anchor c'est le guid du parent de l'objet contenant
        // position-anchor: --UI; /* le -- est obligatoire sinon on a pas la réf à l'ancrage */
        
        // Défini dans un autre composant
        // border:1px solid #ff0000;
        
        // La largeur est définie seulement si on est pas en mode stretch <>3
        // width:100px; 
        
        // Ancré à gauche, au centre, et stretch <> 2
        // inset-inline-start: calc(anchor(0%) + 102px);                          
        
        // Ancré à droite, au centre, et stretch <> 1
        // inset-inline-end: calc(anchor(60%));

        // La hauteur est définie seulement si on est pas en mode stretch <> 24
        // height:22px; 

        // Ancré en haut, au centre, et stretch <> 16
        // inset-block-start: calc(anchor(0%) - 12px); /* (height + bordure)/2 */

        // Ancré en bas, au centre, et stretch <> 8
        /*inset-block-end: calc(anchor(90%));*/

        // La rotation seulement sur Z, on va rester simple
        /*transform: rotate(45deg);*/
        
        // Le pivot de rotation
        // transform-origin: 36px 12px;
        
        // l'échelle du composant
        // scale: 0.7 0.7;

        //Défini dans un autre composant
        //background: rgba(255,0,0,0.1);

        if ((this.anchorPreset && APX.LEFT)==APX.LEFT) { 
            position = position + "left: "+this.left 
        }
        if ((this.anchorPreset && APX.RIGHT)==APX.RIGHT) { 
            position = position + "right: "+this.right 
        }
        if ((this.anchorPreset && APX.RIGHT)!=APX.RIGHT) { 
            position = position + "right: "+this.right 
        }

        return "position:fixed;" +
                     "width:" + this.width + 'px;' +
                     "height:" + this.height + 'px;' +
                     "top:" + this.top +'px;' +
                     "left:" + this.left +'px;' + 
                     "width:" + this.width +'px;' + 
                     "height:" + this.height +'px;'
    }
}
console.log("RectTransform Component Loaded")
