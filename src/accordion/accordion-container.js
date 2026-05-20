import { LitElement, html, css } from 'lit';
export class AccordionContainer extends LitElement {
    static get properties() {
        return {
            activeIndex: { type: Number, reflect: true }
        }
    }

    static styles = css`
        ::slotted(accordion-item) {
            cursor: pointer;
        }
    `;

    constructor() {
        super();
        this.activeIndex = 0;
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('accordion-item-clicked', (event) => {
            let children = this.querySelectorAll('accordion-item');
            let index = Array.from(children).indexOf(event.target);
            this.activeIndex = index;
        }); 
    }

    render() {
        console.debug('rendering accordion container');
        let items = this.querySelectorAll('accordion-item');
        items.forEach((item, index) => {
            item.expanded = index === this.activeIndex;
        });

        return html`
            <slot></slot>
        `;
    }
}
window.customElements.define('accordion-container', AccordionContainer);