import { LitElement, html, css } from "lit";

export class SrOnly extends LitElement {

    // https://github.com/tailwindlabs/tailwindcss/blob/d03edefd19b5500d3d83af37c3e80c9bfff4b2d9/packages/tailwindcss/src/utilities.ts#L582
    static styles = css`
        :host {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip-path: inset(50%);
            white-space: nowrap;
            border: 0;
        }
    `



    render() {
        return html`
            <slot></slot>
        `;
    }
}

window.customElements.define('sr-only', SrOnly)