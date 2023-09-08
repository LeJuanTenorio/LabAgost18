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
            <img src="https://cdn-cms.apify.com/letterboxd_cd1669e8ec.png"> </img>
            <h1>mamaguevo</h1>
            </section>`;
        }
    }
}

customElements.define(`header-one`, HeaderOne);
export default HeaderOne; 