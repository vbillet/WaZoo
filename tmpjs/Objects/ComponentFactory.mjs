import Component from "../Components/Component.mjs"
import Border from "../Components/Border.mjs"
import BoxShadow from "../Components/BoxShadow.mjs"
import RectTransform from "../Components/RectTransform.mjs"
import Text from "../Components/Text.mjs"

export default class ComponenentFactory {
    static createComponent(comp, json=undefined) {
        if (comp=="Border") { return new Border(json) } else
        if (comp=="BoxShadow") { return new BoxShadow(json) } else
        if (comp=="Component") { return new Component(json) } else
        if (comp=="RectTransform") { return new RectTransform(json) } else
        if (comp=="Text") { return new Text(json) } else
        return undefined
    }
}