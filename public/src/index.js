import { HeaderOne } from "./components/export.js";

class appContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`<header-one></header-one>`
    }

}

customElements.define("app-container", appContainer);