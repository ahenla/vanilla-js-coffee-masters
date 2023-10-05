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

    window.addEventListener('storeMenuUpdate', (event) => {
      this.render();
    });
    this.render()
  }

  render() {
    if (app.store.menu) {
      //cleaning the menu element
      this.root.querySelector('#menu').innerHTML = '';

      for (let category of app.store.menu) {
        const liCategory = document.createElement('li');
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class="categoy"></ul>
        `;
        this.root.querySelector('#menu').appendChild(liCategory)

        //create the items for the categories
        category.products.forEach(product => {
          //creating a custom html element
          const item = document.createElement('product-item');
          item.dataset.product = JSON.stringify(product)
          liCategory.querySelector('ul').appendChild(item)
        });
      }
    } else {
      this.root.querySelector('#menu').innerHTML = 'Loading...'
    }
  }
}

customElements.define('menu-page', MenuPage)
