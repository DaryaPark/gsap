
//  МЕню Бургер

const iconMenu = document.querySelector('.burger');
const menuBody = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
if (iconMenu){
    iconMenu.addEventListener("click", function(e) {
        // document.body.classList.toggle('lock');
        iconMenu.classList.add('close');
        menuBody.classList.toggle('menu--open');
    });
}

if (closeMenu){
  closeMenu.addEventListener("click", function(e) {
      closeMenu.classList.add('burger');
      iconMenu .classList.remove('close');
      menuBody.classList.toggle('menu--open');
  });
}

