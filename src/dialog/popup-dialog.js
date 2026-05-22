import { LitElement, html, css } from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';

export class PopupDialog extends LitElement {

    dialogRef = createRef();

    static properties = {
        open: { type: Boolean, reflect: true },
    }

    static styles = css`
        `;


    updated(changedProperties) {
        if (changedProperties.has('open')) {
            if (this.open) {
                this.dialogRef.value.showModal();
            } else {
                this.dialogRef.value.close();
            }
        }
    }

    render() {
        console.debug('rendering dialog component');
        return html`
        <dialog ${ref(this.dialogRef)}>
            <slot></slot>
            <button @click=${() => this.open = false}>Close</button>
        </dialog>
            `;
    }

    firstUpdated() {

    }
}
window.customElements.define('popup-dialog', PopupDialog)