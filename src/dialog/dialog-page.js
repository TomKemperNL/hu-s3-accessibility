import { LitElement, html } from 'lit'
import {ref, createRef} from 'lit/directives/ref.js';
import './popup-dialog.js';


export class DialogPage extends LitElement {

    formRef = createRef();

    #onSubmit(e) {
        e.preventDefault();
        alert('Form submitted for ' + this.formRef.value?.name?.value);
    }

    #onDialogToggle() {
        const dialog = this.renderRoot.querySelector('popup-dialog');
        dialog.open = !dialog.open;
    }

    render() {
        console.debug('rendering dialog page');
        return html`
            
            <section>
                <h1 aria-relevant="all">Dialog</h1>
                <p tabindex="0">Dit is de dialog demo pagina, en deze paragraaf is tab-baar</p>
                <p>Het is belangrijk dat als de dialog opent, dat de focus verandert, en dat je er niet uit kan tabben, of op andere wijze de controls op deze pagina kan gebruiken, totdat je de dialog sluit.</p>
                <p>Details kun je vinden op: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/</a></p>
                <popup-dialog>
                    Dit is de popup
                    <p tabindex="0">En dit is een paragraaf in de popup dialog, en deze is ook tab-baar</p>                
                </popup-dialog>
                <form ${ref(this.formRef)} @submit=${this.#onSubmit} >
                    <button type="button" @click=${this.#onDialogToggle}>Toggle Dialog</button>
                    <label for="name">Naam:</label>
                    <input type="text" id="name" name="name">
                    <button type="submit">Submit</button>
                </form>
                <p tabindex="0">En dit is nog iets waar op getabt kan worden na het form.</p>
            </section>`;
            
            
    }
}
window.customElements.define('dialog-page', DialogPage)