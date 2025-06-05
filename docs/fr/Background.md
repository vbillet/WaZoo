# Background

Ce composant permet de définir une le fond d'un objet **DomObject**.

## Utilisation

Il faut ajouter un composant **Background** à un objet descendant de **DomObject**, comme le **DivObject** par exemple. Ce composant permet de définir le fond du **DomObject**.

## Propriétés

| Properiétés      | Description                                             |
| ----------       | ------------------------------------------------------- |
| image            | URL de l'image de fond du composant                     |
| color            | Couleur du fond                                         |
| position         | Positionnement de l'image de fond                       |    
| size             | Taille de l'image de fond telle qu'affichée             |
| repeat           | Mode de répétition de l'image de fond                   |    
| blendMode        | Mode de superposition des couleurs de l'image de fond   |    
| clip             | Clipping mode                                           |
| origin           | Origine de l'image de fond                              |    
| positionAnchorX  | Ancre de positionnement en X                            |            
| positionAnchorY  | Ancer de positionnement en Y                            |            
| attachment       | Mode d'attache du fond                                  |        

### Modes de superposition du fond
La constante **BLENDINGS** est un tableau qui contient tous les modes de répétition.

| Mode de blending | Description                                             |
| ----------       | ------------------------------------------------------- |
| BlendNormal      | normal |
| BlendMultiply    | multiply |
| BlendScreen      | screen |
| BlendOverlay     | overlay |
| BlendDarken      | darken |
| BlendLighten     | lighten |
| BlendColorDodge  | color-dodge |
| BlendColorBurn   | color-burn" |
| BlendHardLight   | hard-light |
| BlendSoftLight   | soft-light |
| BlendDifference  | difference |
| BlendExclusion   | exclusion |
| BlendHue         | hue |
| BlendSaturation  | saturation |
| BlendColor       | color |
| BlendLuminosity  | luminosity |

### Modes de Clipping du fond

La constante **CLIPS** contient tous les modes de clipping du fond.

| Clipping         | Description                                             |
| ----------       | ------------------------------------------------------- |
| ClipBorderBox    | border-box |
| ClipPaddingBox   | padding-box |
| ClipContentBox   | content-box |
| ClipText         | text |
| ClipVorderArea   | border-area |

### Origine du fond

La constante **ORIGINS** est un tableau qui contient toutes les origines possibles.

| Origine          | Description                                             |
| ----------       | ------------------------------------------------------- |
| OriginBorderBox  | border-box |
| OriginPaddingBox | padding-box |
| OriginContentBox | content-box |

### Modes de répétition du fond

La constante **REPEATS** est un tableau qui contient tous les modes de répétition de fond possibles.

| Mode             | Description                                             |
| ----------       | ------------------------------------------------------- |
| RepeatRepeatX    | repeat-x |
| RepeatRepeatY    | repeat-y |
| RepeatRepeat     | repeat |
| RepeatSpace      | space |
| RepeatRound      | round |
| RepeatNoRepeat   | no-repeat |

### Mode d'attachement du fond

La constante **ATTACHS** est un tableau qui contient tous les modes d'attachements possibles.

| Mode             | Description                                             |
| ----------       | ------------------------------------------------------- |
| AttachScroll     | scroll |
| AttachFixed      | fixed |
| AttachLocal      | local |

