import { LitElement, html, css } from 'lit';
import './toggle-button.js';

export class TogglePage extends LitElement {

    static styles = css`
    `;

    render() {
        return html`
            <h1>Toggle Button Page</h1>
            <p>Dit is een demo van een toggle button element, waarbij er een knop is die aan of uit kan staan.</p>
            <p>Details kun je vinden op: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/button/">https://www.w3.org/WAI/ARIA/apg/patterns/button/</a></p>

            <button>Button Before</button>
            <label id="lbl-1" for="btn-1">Some Toggle Button</label>
            <toggle-button id="btn-1"></toggle-button>
            <label for="btn-2">Button After</label>
            <button id="btn-2"></button>
        `;
    }
}
window.customElements.define('toggle-page', TogglePage);