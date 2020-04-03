const menuLoad = () => {
  const element = document.getElementById('tab-content');
  element.innerHTML = `<h1>Restaurant menu</h1>
  <ul>
    <li>Salmon Pasta - $8</li>
    <li>Fish Chip Cheese - $22</li>
    <li>Kerupuk Udang - $15</li>
    <li>New York Style Pizza - $7</li>
  </ul>`;
}

export default menuLoad;