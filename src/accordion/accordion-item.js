import { LitElement, html, css } from 'lit';
export class AccordionItem extends LitElement {

    static styles = css`
        .collapsed {
            display: none;
        }
        .expanded {
            display: block;
        }
        .toggle {
            display: inline-block;
            width: 1em;
            border: 1px solid white;
        `;

    static get properties() {
        return {
            header: { type: String },
            expanded: { type: Boolean, reflect: true }
        }
    }

    constructor(){
        super();
        this.header = '';
        this.expanded = false;
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('accordion-item-clicked', {
                bubbles: true,
                composed: true
            }));
        });
    }


    render() {
        return html`
            <h3><span class="toggle">${this.expanded ? '-' : '+'}</span>${this.header}</h3>
            <slot class=${this.expanded ? 'expanded' : 'collapsed'}></slot>
        `;
    }
}
window.customElements.define('accordion-item', AccordionItem);