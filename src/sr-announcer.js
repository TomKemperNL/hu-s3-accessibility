import { LitElement, html, css } from "lit";
import { ref, createRef } from 'lit/directives/ref.js';
import './sr-only.js';

export class SrAnnouncer extends LitElement {
    srOnlyRef = createRef();

    render() {
        return html`
            <sr-only ${ref(this.srOnlyRef)} aria-live="assertive" aria-atomic="true">
                
            </sr-only>
            <slot></slot>            
        `;
    }
    
    firstUpdated() {
        setTimeout(() => {
            let headerText = ''
            for (let child of this.children) {
                console.debug('checking child', child);
                for(let tagName of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']){
                    let header = child.querySelector(tagName) || child.shadowRoot?.querySelector(tagName);
                    console.debug('checking for header', tagName, header);
                    if(header){
                        headerText = header.textContent;
                        break;
                    }
                }
                if(headerText) break;
            }

            this.srOnlyRef.value.textContent = "Navigated to " + headerText;
        }, 0);
    }
}

window.customElements.define('sr-announcer', SrAnnouncer)