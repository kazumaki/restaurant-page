const homeLoad = () => {
  const element = document.getElementById('tab-content');
  element.innerHTML = `<h1>The greatest restaurant</h1>
  <img src='../src/restaurant-chocolat.jpg'>
  <span>Welcome to the greatest restaurant in the world. Enjoy your meal and take care, it's addicting.</span>`;
};

export default homeLoad;