// import of services
import Store from "./services/Store.js";
import API from "./services/API.js"
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

//import of custom components
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import ProductItem from "./components/ProductItem.js";

//setting Store and Router as a global variable
window.app = {
  store: Store,
  router: Router
}

//wait for the DOM to be loaded befor manipulating it
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
