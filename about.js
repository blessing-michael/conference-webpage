const Navicon = document.querySelector('.bar-div');

const linksContainer = document.querySelector('.links-container');
console.log(linksContainer)
const closeIcon = document.querySelector('.close-icon');

Navicon.addEventListener('click', () => {
    console.log('clicked')
    linksContainer.classList.add('active');
  });
  
  function closeMenu() {
    linksContainer.classList.remove('active');
  }
  closeIcon.addEventListener('click', () => {
    closeMenu();
  });