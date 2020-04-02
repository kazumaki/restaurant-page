const pageLoad = () => {
  const element = document.getElementById('content');
  element.innerHTML = `<div class='tabs'>
    <ul>
      <li id="home">Home</li>
      <li id="menu">Menu</li>
      <li id="contact">Contact</li>
    </ul>
  </div>
  <div id='tab-content'>

  </div>`
}

export default pageLoad;