# BoxShadow

Ce composant permet de créer une ombre portée sur un objet **DomObject**.

## Utilisation

Il faut ajouter un composant BoxShadow à un objet descendant de **DomObject**, comme le **DivObject** par exemple. Ce composant permet de définir une ombre qui est soit externe soit interne à l'objet **DomObject**.

**Exemple :**
```js
// Ajout d'un composant boxShadow
UI.getChildByIndex(0).addComponent(new BoxShadow())
// Récupération du composant de l'objet
let bs = UI.getChildByIndex(0).getComponent("BoxShadow")
// Réglage de la couleur
bs.color = new Color(128,0,0,0.8)
// Offset de l'ombre (en bas à droite de 6 pixels)
bs.offset = new Point2D(6,6)
// Réglage du spread
bs.spreadRadius = 2
// Réglage du flou de l'ombre
bs.blurRadius = 15
// L'ombre est située à l'extérieur de l'objet
bs.inset = false
```

## Propriétés

| Properiétés      | Description                                             |
| ----------       | ------------------------------------------------------- |
| **color**        | Couleur de l'ombre                                      |
| **offset**       | Offset de l'ombre                                       |
| **spreadRadius** | Agrandissement ou réduction de l'ombre                  |
| **blurRadius**   | Agrandissement ou réduction de l'ombre                  |
| **inset**        | Si cette propriété est à **true** l'ombre sera à l'intérieur, sinon à l'extérieur|
