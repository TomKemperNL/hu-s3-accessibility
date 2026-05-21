import { LitElement, html, css } from 'lit';
import './accordion-container.js';
import './accordion-item.js';

export class AccordionPage extends LitElement {

    static styles = css`   
    
    `;

    render() {
        return html`
            <h1>Accordion Page</h1>
            <p>Dit is een demo van een accordion element, waarbij er elke keer max. 1 ding is uitgeklapt.</p>
            <p>Details kun je vinden op: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">https://www.w3.org/WAI/ARIA/apg/patterns/accordion/</a></p>
            <accordion-container activeIndex="1">
                <accordion-item header="Section 1">
                    <p>Content for Section 1</p>
                    <button>Een focussable Button Bovenaan</button>
                </accordion-item>
                <accordion-item header="Section 2">
                    <p>Content for Section 2</p>
                </accordion-item>
                <accordion-item header="Section 3">
                    <p>Content for Section 3</p>
                    <button>Een focussable Button onderaan</button>
                </accordion-item>
            </accordion-container>
        `;
    }
}
window.customElements.define('accordion-page', AccordionPage);