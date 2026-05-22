import { LitElement, css, html } from 'lit'
import { Router } from '@lit-labs/router';
import './dialog/dialog-page.js';
import './accordion/accordion-page.js';
import './toggle-button/toggle-page.js';
import './nested-tabindex/nested-tabs-page.js';

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
    {path: '/accordion', render: () => html`<accordion-page></accordion-page>`},
    {path: '/toggle', render: () => html`<toggle-page></toggle-page>`},
    {path: '/nested-tabs', render: () => html`<nested-tabs-page></nested-tabs-page>`} 
  ]);

  render() {
    return html`
      <header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/dialog">Dialog</a></li>
          <li><a href="/accordion">Accordion</a></li>
          <li><a href="/toggle">Toggle</a></li>
          <li><a href="/nested-tabs">Nested Tabs</a></li>
        </ul>
      </header>
      <main>${this._routes.outlet()}</main>
      <footer>...</footer>
    `;
  }
}

window.customElements.define('app-element', AppElement)
