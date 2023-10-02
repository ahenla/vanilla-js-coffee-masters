import Store from "./services/API.js";
import API from "./services/Store.js"
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

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
