import pageLoad from './page-load.js';
import homeLoad from './home-tab.js';
import menuLoad from './menu-tab.js';
import contactLoad from './contact-tab.js';
import './style.css';

const homeTab = () => {
  return document.getElementById('home');
}

const menuTab = () => {
  return document.getElementById('menu');
}

const contactTab = () => {
  return document.getElementById('contact');
}

const loadHomeContent = () => {
  homeLoad();
  homeTab().classList.add('selected');
  menuTab().classList.remove('selected');
  contactTab().classList.remove('selected');
}

const loadMenuContent = () => {
  menuLoad();
  menuTab().classList.add('selected');
  homeTab().classList.remove('selected');
  contactTab().classList.remove('selected');
}

const loadContactContent = () => {
  contactLoad();
  contactTab().classList.add('selected');
  menuTab().classList.remove('selected');
  homeTab().classList.remove('selected');
}

window.onload = () => {
  pageLoad();
  const tabs = {
    home: document.getElementById('home'),
    menu: document.getElementById('menu'),
    contact: document.getElementById('contact'),
  }

  tabs.home.addEventListener('click', loadHomeContent, false);
  tabs.menu.addEventListener('click', loadMenuContent, false);
  tabs.contact.addEventListener('click', loadContactContent, false);
  loadHomeContent();
}