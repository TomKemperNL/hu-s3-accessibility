import { LitElement, html, css } from 'lit';

export class PopupDialog extends LitElement {

    static properties = {
        open: { type: Boolean, reflect: true },
    }

    static styles = css`
        div {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: black;
            border: 1px solid white;
            padding: 1em;
            display: none;
        }
        div.open {
            display: block;
        }
    `;

    render() {
        console.debug('rendering dialog component');
        return html`
        <div class=${this.open ? 'open' : ''} role="dialog" aria-modal="true">
            <h1>Popup Dialog</h1>
            <slot></slot>
            <button @click=${() => this.open = false}>Close</button>
        </div>
            `;
    }

    firstUpdated() {

    }
}
window.customElements.define('popup-dialog', PopupDialog)