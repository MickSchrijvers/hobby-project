import { LitElement, css, html } from 'lit'

export class FancyButton extends LitElement {



    render(){
        return html`
        <div class="parent">
            <button class="fancy-btn">
                <slot></slot>
            </button>
            <p>Deze tekst is blauw</p>
        </div>
        `
    }

    static get styles(){
        return css`
        .parent {
            --nice-color: #FF0000;
            color: blue;
        }

        .fancy-btn{
           color: var(--nice-color); 
           width: 300px;
        }
        `
    }
}

window.customElements.define('fancy-button', FancyButton)