export class MenuPage extends HTMLElement {
  constructor() {
    super();

    // create shadow dom
    this.root = this.attachShadow({ mode: 'open' }) //open mode allows the main dom to access the shadow dom

    //create style component to add css and a attach it to the shadow dom
    const styles = document.createElement('style');
    this.root.appendChild(styles)

    //fetch the css from an external page
    async function loadCSS() {
      const request = await fetch('components/MenuPage.css');
      const css = await request.text()
      styles.textContent = css
    };

    //call the function
    loadCSS();
  }

  //when element is attached to the dom
  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content) // attach to the shadow dom
  }
}

customElements.define('menu-page', MenuPage)
