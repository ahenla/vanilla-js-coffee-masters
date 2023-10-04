const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach(a => {
      a.addEventListener('click', event => {
        event.preventDefault();
        //const url = a.href
        const url = a.getAttribute('href');
        // const url = event.target.href
        Router.go(url);
      })
    })
    //add eventhandler for url changes
    window.addEventListener('popstate', event => {
      Router.go(event.state.route, false) //history API -> history.pushState({ route }, null, route)
    })

    //check the initial url
    Router.go(location.pathname)
  },

  go: (route, addToHistory = true) => {
    console.log(`route to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route)
    }

    let pageElement = '';

    switch (route) {
      case '/':
        pageElement = document.createElement('menu-page');
        break;
      case '/order':
        pageElement = document.createElement('order-Page');
        break;
      default:
        if (route.startsWith("product-")) {
          pageElement = document.createElement('details-page');
          const paramsId = route.substring(route.lastIndexOf('-') + 1);
          pageElement.dataset.id = paramsId;
        }
    }

    if (pageElement) {
      const cache = document.querySelector('main');

      //document.querySelector('main').innerHTML = '';
      if (cache.children[0]) cache.children[0].remove();

      cache.appendChild(pageElement);

      window.scrollX = 0;
      window.scrollY = 0;
    } else pageElement = pageElement

  }
}

export default Router
