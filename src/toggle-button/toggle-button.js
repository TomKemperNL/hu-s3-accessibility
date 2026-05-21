import { LitElement, html, css } from "lit";

export class ToggleButton extends LitElement {

    static styles = css`
        div {
            display: inline-block;
            border: 1px solid #ccc;
            color: #fff;
            background-color: #ff0000;
        }

        div.pressed {
            background-color: #00ff08;
            color: #000000;
        }
    `;

    static properties = {
        pressed: { type: Boolean, reflect: true }
    };

    constructor() {
        super();
        this.pressed = false;
    }

    render() {
        return html`
            <div 
                @click="${() => this.pressed = !this.pressed}" class="${this.pressed ? 'pressed' : ''}">
                ${this.pressed ? html`<span>ON</span>` : html`<span>OFF</span>`}
            </div>
        `;
    }
}

window.customElements.define('toggle-button', ToggleButton);