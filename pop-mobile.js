const seeProject = document.querySelector(".see-project");
const mobilePopup = document.querySelector(".popup-mb");

seeProject.addEventListener('click', () => {
    mobilePopup.classList.add('active');
});

const closingPop = document.querySelector(".img-pop");

closingPop.addEventListener('click', () => {
    mobilePopup.classList.remove('active');
});