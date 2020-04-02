const contactLoad = () => {
  const element = document.getElementById('tab-content');
  element.innerHTML = `
  <form>
    <input type='tel' id='phone' name='phone'>
  </form>
  `;
}

export default contactLoad;