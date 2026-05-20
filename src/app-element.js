import { LitElement, css, html } from 'lit'
import { Router } from '@lit-labs/router';
import './dialog/dialog-page.js';
import './accordion/accordion-page.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppElement extends LitElement {
  _routes = new Router(this, [
    {path: '/', render: () => html`<h1>Home</h1>`},    
    {path: '/dialog', render: () => html`<dialog-page></dialog-page>`},
    {path: '/accordion', render: () => html`<accordion-page></accordion-page>`}
  ]);

  render() {
    return html`
      <header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dialog">Dialog</a></li>
          <li><a href="/accordion">Accordion</a></li>
        </ul>
      </header>
      <main>${this._routes.outlet()}</main>
      <footer>...</footer>
    `;
  }
}

window.customElements.define('app-element', AppElement)
