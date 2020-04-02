import pageLoad from './page-load.js';
import homeLoad from './home-tab.js';
import menuLoad from './menu-tab.js';
import contactLoad from './contact-tab.js';

const loadHomeContent = () => {
  homeLoad();
}

const loadMenuContent = () => {
  menuLoad();
}

const loadContactContent = () => {
  contactLoad();
}

window.onload = () => {
  pageLoad();
  const tabs = {
    home: document.getElementById('home'),
    menu: document.getElementById('menu'),
    contact: document.getElementById('contact'),
  }

  tabs.home.addEventListener('click', homeLoad, false);
  tabs.menu.addEventListener('click', loadMenuContent, false);

  loadHomeContent();
}