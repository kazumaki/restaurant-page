const contactLoad = () => {
  const element = document.getElementById('tab-content');
  element.innerHTML = `
  <form>
    <label for='name'>Name</label>
    <input type='text' name='name' id='name'>
    <label for='name'>Message</label>
    <textarea></textarea>
    <input type='submit' id='submit' value='Send Message'>
  </form>
  `;
}

export default contactLoad;