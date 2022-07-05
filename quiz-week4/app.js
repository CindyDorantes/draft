const xButton = document.querySelector('#btn');

function displayMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.add('show');
}

xButton.addEventListener('click', displayMenu);
