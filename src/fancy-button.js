import { LitElement, css, html } from 'lit'

export class FancyButton extends LitElement {



    render(){
        return html`
        <button class="fancy-btn">
            <slot></slot>
        </button>
        `
    }

    static get styles(){
        return css`
        .fancy-btn{
           color: red; 
           width: 300px;
        }
        `
    }
}

window.customElements.define('fancy-button', FancyButton)