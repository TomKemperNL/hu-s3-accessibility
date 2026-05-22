import { LitElement, html, css } from 'lit';
import './nested-tabs-component.js';

export class NestedTabsPage extends LitElement {

    static styles = css`
    `;

    render() {
        return html`
            <h1>Positieve TabIndex en Web Components</h1>
            <p>Dit is een demo van nested tabIndex in web components, waarbij er een aantal elementen zijn met een positieve tabIndex waarde.</p>

            <input type="text" placeholder="Input 1" tabindex="1">
            <input type="text" placeholder="Input 2 springt gek" tabindex="3">
            <input type="text" placeholder="Input 3" tabindex="2">
            <nested-tabs-component tabindex="4"></nested-tabs-component>
            <p>En hier weer een gekke sprong</p>
            <nested-tabs-component tabindex="6"></nested-tabs-component>
            <nested-tabs-component tabindex="5"></nested-tabs-component>
            
        `;
    }
}
window.customElements.define('nested-tabs-page', NestedTabsPage);