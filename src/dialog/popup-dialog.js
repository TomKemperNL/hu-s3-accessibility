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

    firstElement = null;
    lastElement = null;
    trapActive = false;
    returnOnClose = null;

    findFocussableElements() {
        let query = 'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])';
        let slottedElements = this.querySelectorAll(query);
        let ownElements = this.renderRoot.querySelectorAll(query);

        return Array.from(slottedElements).concat(Array.from(ownElements)).filter(el => !el.hasAttribute('disabled'));
    }

    startTrap(target, source) {
        this.trapActive = true;
        this.returnOnClose = source;
        const focussableElements = this.findFocussableElements();
        this.firstElement = focussableElements[0];
        this.lastElement = focussableElements[focussableElements.length - 1];

    }


    onFocusOut(e) {
        const focussableElements = this.findFocussableElements();
        console.debug(focussableElements);
        let from = e.target;
        let to = e.relatedTarget;
        console.debug('moving from ', from, 'to', to);
        let isMovingOutFront =
            from === this.firstElement &&
            focussableElements.indexOf(to) === -1;

        let isMovingOutBack =
            from === this.lastElement &&
            focussableElements.indexOf(to) === -1;

        if (this.trapActive) {
            console.debug('trap is active')
            if (isMovingOutFront) {
                console.debug('moving out front');
                this.lastElement.focus();
            } else if (isMovingOutBack) {
                console.debug('moving out back');
                this.firstElement.focus();
            }
        }
    }


    onFocusIn(e) {
        if (!this.trapActive) {
            console.debug('starting trap', e.target, e.relatedTarget);
            this.startTrap(e.target, e.relatedTarget);
        }
    }

    onClose() {
        this.open = false;
        this.trapActive = false;
        this.returnOnClose.focus();
    }

    updated(changedProperties) {
        if (changedProperties.has('open')) {
            if (this.open) {
                const focussableElements = this.findFocussableElements();
                focussableElements[0]?.focus();
            } else {
                this.onClose();
            }
        }
    }

    render() {
        console.debug('rendering dialog component');
        return html`
        <div class=${this.open ? 'open' : ''} 
            role="dialog" 
            aria-modal="true"
            @focusin=${this.onFocusIn}
            @focusout=${this.onFocusOut}
            >
            <h1>Popup Dialog</h1>
            <slot></slot>
            <button @click=${this.onClose} @blur=${this.onCloseBlur}>Close</button>
        </div>
            `;
    }

    firstUpdated() {

    }
}
window.customElements.define('popup-dialog', PopupDialog)