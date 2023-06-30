const Navicon = document.querySelector('.bar-div');

const linksContainer = document.querySelector('.links-container');
const closeIcon = document.querySelector('.close-icon');

Navicon.addEventListener('click', () => {
  linksContainer.classList.add('active');
});

function closeMenu() {
  linksContainer.classList.remove('active');
}
closeIcon.addEventListener('click', () => {
  closeMenu();
});