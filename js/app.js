const menu = document.querySelector('.nav--bar--menu--responsive');
const burger = document.querySelector('.nav--bar--menu--responsive--icon');

burger.addEventListener('click', () => {
    menu.classList.toggle('apear');
});