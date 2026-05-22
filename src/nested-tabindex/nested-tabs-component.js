import { LitElement, html, css } from 'lit';

export class NestedTabsComponent extends LitElement {

    static styles = css`
    `;

    render() {
        return html`
            <h2>Nested Tabs</h2>
            <input type="text" placeholder="Input 1" tabindex="1">
            <input type="text" placeholder="Input 2 springt gek" tabindex="3">
            <input type="text" placeholder="Input 3" tabindex="2">
            
            
        `;
    }
}
window.customElements.define('nested-tabs-component', NestedTabsComponent);