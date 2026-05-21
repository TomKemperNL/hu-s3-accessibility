import { LitElement, html, css } from "lit";

export class ToggleButton extends LitElement {
    static formAssociated = true;
    
    static styles = css`
        :host {
            cursor: default;
            display: inline-block;
            border: 1px solid #ccc;
            color: #fff;
            background-color: #ff0000;
            
            :hover {
                background-color: #fc4d4d;
            }
        }

        :host(.pressed) {
            background-color: #00ff08;
            color: #000000;

            :hover {
                background-color: #83f987;
            }
        }
    `;

    static properties = {
        pressed: { type: Boolean, reflect: true }
    };

    constructor() {
        super();
        this.pressed = false;
        this.role = 'button';
        this.tabIndex = 0;
        this.internals = this.attachInternals();
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', () => {
            this.pressed = !this.pressed;
        });
        this.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this.pressed = !this.pressed;
            }
        });
    }

    render() {
        this.classList.toggle('pressed', this.pressed);
        this.ariaPressed = this.pressed ? 'true' : 'false';
        return html`           
                ${this.pressed ? html`<span>ON</span>` : html`<span>OFF</span>`}
        `;
    }
}

window.customElements.define('toggle-button', ToggleButton);