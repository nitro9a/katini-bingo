const template = document.createElement('template');
template.innerHTML = "It works!";

class FormField extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            'mode' = 'open'
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('db-form-field', FormField);


