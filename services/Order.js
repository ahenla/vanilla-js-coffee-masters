import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter(
    productInCart => productInCart.product.id == id
  );
  if (results.length == 1) {
    //if the product is already in the cart
    app.store.cart = app.store.cart.map(
      item => item.product.id == id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter(
    item => item.product.id != id
  )
}
