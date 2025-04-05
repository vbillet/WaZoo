# Components

Les components servent à donner des propriétés aux objets.

## La classe Components

La classe **Component** sert d'encêtre à tous les composants d'objets. Elle permet donner les fonctionnalités de chargement et de sauvegarde des propriétés des composants.

### Propriétés : 
 * **componentClass** : Le nom de la classe du composant. Cette propriété est initialisée à l'initialisation de chaque composants.

### Méthodes : 
 * **load**(**data** : JSON) : Prend en entrée une chaine JSON qui contient les données du composant. Permet une initialisation rapide du composant.
 * **toString()** : Cette fonction permet de récupérer une chaine JSON représentant les propriétés du composant.

### Création d'une nouvelle classe dérivé de componenent : 

#### Initalisation du composant : 
 1. Pour Créer un composant il faut créer une classe dérivée de Component : 
```js
class Border extends Component {
} 
```
 2. Ajouter le constructeur. Il devrait être identique à celui ci-dessous : 
```js
class Border extends Component {
    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }
} 
```
 3. Définir les propriétés : 
```js
class Border extends Component {
    width = "1" 
    unit = "px"
    kind = "solid"
    color = "#000000"

    constructor(data=undefined) { super(data); if (data != undefined) { this.load(data) } }
} 
```
 4. Définir le chargement des propriétés :
```js
class Border extends Component {
    
    ...

    load(data) {
        super.load(data)
        try{ this.width = data.width } catch(e) { console.warn("No border Width") }
        try{ this.unit = data.unit }   catch(e) { console.warn("No border Unit") }
        try{ this.kind = data.kind }   catch(e) { console.warn("No border Kind") }
        try{ this.color = data.color } catch(e) { console.warn("No border Color") }
    }
} 
```
 5. Pour les Components qui s'intègrent avec un DOMObject, il est nécessaire de définir la méthode **getCSS()**
```js
class Border extends Component {
    
    ...

    getCSS(){ return "border:" + this.width + this.unit + ' ' + this.kind + ' ' + this.color + ';' }
} 
```

## La classe Border
Cette classe permet de donner une bordure à un objet DOM.

### Propriétés : 
 * **width** : Permet de définir l'épaisseur de la bordure. Valeur par défaut : "1".
 * **unit** : Permet de définir l'unité dans laquelle l'épaisseur de la bordure est exprimée. Valeur par défaut : "px".
 * **kind** : Permet de définir le type de bordure. Valeur par défaut : "solid"
 * **color** = Permet de définir la couleur de la bordure. Valeur par défaut : "#000000"

### Méthodes : 
 * **getCSS()** : Retourne la chaine CSS du composant Bordure.

## La classe RectTransform

**Ce composant reste à approfondir**