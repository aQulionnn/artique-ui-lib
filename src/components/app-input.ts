import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-input')
export class AppInput extends LitElement {
    static styles = css`
        label {
            width: 100%;
            display: grid;
            gap: 10px;
            font-size: 0.75rem;
            color: var(--color-white);
        }
        
        input {
            outline: none;
            border: solid var(--color-white);
            border-width: 0 0 1px 0;
            background: var(--color-transparent);
            padding: 5px 0;
            font-size: 1rem;
            color: var(--color-white);
        }
        
        input[type="password"]::-ms-reveal {
            display: none;
        }    
    `

    @property({ type: String }) type = '';
    @property({ type: String }) label = '';
    @property({ type: String }) value = '';

    private onInput(event: Event) {
        const target = event.target as HTMLInputElement;

        this.value = target.value;
        this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
    }

    render() {
        return html`
            <label>
                ${this.label}
                <input type=${this.type} .value=${this.value} @input=${this.onInput} />
            </label>       
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-input': AppInput;
    }
}