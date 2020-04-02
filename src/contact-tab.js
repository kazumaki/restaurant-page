const contactLoad = () => {
  const element = document.getElementById('tab-content');
  element.innerHTML = `
  <form>
    <input type='text' name='name' id='name'>
    <input type='textarea' name='message' id='message'>
    <input type='submit' id='submit' value='Send Message'>
  </form>
  `;
}

export default contactLoad;