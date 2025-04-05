# Components

Les components servent à donner des propriétés aux objets.

## La classe Components

La classe **Component** sert d'encêtre à tous les composants d'objets. Elle permet donner les fonctionnalités de chargement et de sauvegarde des propriétés des composants.

### Propriétés : 
 * **componentClass** : Le nom de la classe du composant. Cette propriété est initialisée à l'initialisation de chaque composants.

### Méthodes : 
 * **load**(**data** : JSON) : Prend en entrée une chaine JSON qui contient les données du composant. Permet une initialisation rapide du composant.
 * **toString()** : Cette fonction permet de récupérer une chaine JSON représentant les propriétés du composant.

## La classe Border
Cette classe permet de donner une bordure à un objet DOM.

### Propriétés : 
 * **width** : Permet de définir l'épaisseur de la bordure. Valeur par défaut : "1".
 * **unit** : Permet de définir l'unité dans laquelle l'épaisseur de la bordure est exprimée. Valeur par défaut : "px".
 * **kind** : Permet de définir le type de bordure. Valeur par défaut : "solid"
 * **color** = Permet de définir la couleur de la bordure. Valeur par défaut : "#000000"

## La classe RectTransform

**Ce composant reste à approfondir**