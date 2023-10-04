const Store = {
  menu: null,
  cart: []
};

const handler = {
  // target is the object
  set(target, property, value) {
    target[property] = value;

    if (property === 'menu') {
      //sends a signal through the window so you can listen to it and react
      window.dispatchEvent(new Event('storeMenuUpdate'))
    }
    if (property === 'cart') {
      window.dispatchEvent(new Event('storeCartUpdate'))
    }
    // we need to return true to accept the changes
    return true
  }
}

const proxyStore = new Proxy(Store, handler)

export default proxyStore;
