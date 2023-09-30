import Store from "./services/API.js";
import API from "./services/Store.js"
import { loadData } from "./services/Menu.js";

//setting Store as a global variable
window.app = { store: Store }

//wait for the DOM to be loaded befor manipulating it
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
