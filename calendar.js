const clickableDiv = document.querySelector('.clickable-div');
const buttonContainer = document.querySelector('.button-container');

clickableDiv.addEventListener('click', () => {
  buttonContainer.style.display = buttonContainer.style.display === 'none' ? 'flex' : 'none';
});
