// TODO - Convert text/labels to table
// add registration and login forms
// attach fields to mongodb
// make separate css stylesheet?
// convert to Stencil?

const template = document.createElement('template');
template.innerHTML = `
<div class="form-field">
    <label>Enter name:</label>
    <input type="text" />
 	<span class="error">This field is required.</span>
</div>

<style>:host {
    margin-bottom: 10px;
    display: block;
}

.form-field {
    display: table;
}

label,
input {
    display: table-cell;
}

label {
    padding-right: 20px;
}

.error {
    display: block;
}

.hidden {
    display: none;
}

::sloted(span) {
    color: grey;
    font-style: italic;
    padding-left: 10px;
}

</style>

<span class="error hidden"></span></div>`;


class FormField extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({'mode': 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$label = this.shadowRoot.querySelector('label');
        this.$input = this.shadowRoot.querySelector('input');
        this.$error = this.shadowRoot.querySelector('.error');
    }
    static get observedAttributes() {
        return ['label', 'type', 'error-message', 'invalid'];
    }

    connectedCallback() {
        if (this.$input.isConnected) {
          this.$input.addEventListener("blur", event => {
            if (!event.target.value && this.hasAttribute("required")) {
              this.invalid = true;
              this.$error.innerText = "This field is required.";
            } else {
              this.invalid = false;
              this.value = event.target.value;
            }
          });
        }
      }
    
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case "label":
            this.$label.innerText = `${newValue}:`;
            break;
          case "type":
            this.$input.type = newValue;
            break;
          case "error-message":
            this.$error.innerText = newValue;
            break;
          case "invalid":
            this._handleInvalidState(newValue);
            break;
          default:
            break;
        }
      }

      get invalid() {
        return this.hasAttribute("invalid");
      }
    
      set invalid(value) {
        if (!!value) {
          this.setAttribute("invalid", "");
        } else {
          this.removeAttribute("invalid");
        }
      }
    
      get value() {
        return this.getAttribute("value");
      }
    
      set value(newValue) {
        this.setAttribute("value", newValue);
      }
    
      _handleInvalidState(value) {
        if (value !== null) {
          this.$error.classList.remove("hidden");
          this.$input.classList.add("invalid-field");
        } else {
          this.$error.classList.add("hidden");
          this.$input.classList.remove("invalid-field");
        }
      }
    }
    
    window.customElements.define("db-form-field", FormField);
