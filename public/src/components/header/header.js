class HeaderOne extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href"./src/components/header/header.css>
            <section>
            <h1>${this.name}</h1>
            </section>`;
        }
    }
}

customElements.define(`header-one`, HeaderOne);
export default HeaderOne; 