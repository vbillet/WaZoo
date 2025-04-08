# Objects

WaZoo gère plusieurs types d'objets de base. Ces objets servent à construire l'application. L'objet ancêtre commun est le **SimObject**.

## SimObject

### Propriétés :
 * **Name** : Le nom de l'objet. Peut être une chaine de caractère vide.
 * **Tag** : Une chaine de caractère qui permet de stocker des informations sur l'objet.
 * **Components** : Un tableau de composants qui vont servir à déterminer les propriétés de l'objet.

### Méthodes :
 * **clone()** : Retourne un nouveau SimObject qui possède les même composants et propriétés que celui-ci
 * **addComponent(component)** : Ajoute un composant au SimObject. Le component ajouté doit être descendant de la classe **Component**. Si l'ajout a bien été effectué, **addComponent** retourn **true**, sinon, une erreur est logguée et **addComponent** retourne **false**. Exemple :
 ```js
 o = new SimObject()
 o.addComponent(new Border())
 ```
 * **createElement(tag)** : Crée un élément dans le DOM avec le tag donné en paramètre. Exemple : 
 ```js
 o = new SimObject()
 let elt = o.createElement("div")
 document.body.appendChild(elt)
 ```
 * **removeComponent(componentClass)** : retire de la liste des composants le premier Composant de la classe spécifiée en paramètre. Si le **SimObject** n'a pas de composant de cette classe la méthode **removeComponent** retourne **false** sinon, elle retourne **true**. Exemple : 
```js
 o = new SimObject()
 o.addComponent(new Border())
 o.removeComponent('Border')
 ```
 * **start()** : Cette méthode est appelée à la création du **SimObject**. Elle doit être définie dans les objets descendant de **SimObject**.
 * **update()** : Cette méthode est appelée à la mise à jour du **SimObject**. Elle doit être définie dans les objets descendant de **SimObject**.
 * **postUpdate()** : Cette méthode est appelée après la phase de rendu. Elle doit être définie dans les objets descendant de **SimObject**.
 * **stop()** : Cette méthode est appelée à la destruction du **SimObject**. Elle doit être définie dans les objets descendant de **SimObject**.

## DomObject