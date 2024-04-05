"use strict";
(function(){
  const hamburgerEl = document.querySelector('.header__menu');
  const menuEl = document.querySelector('.menu__list');

  hamburgerEl.addEventListener('click', function(){
    menuEl.classList.toggle('open');
    // also update the menu's aria-expanded attribute
    hamburgerEl.setAttribute('aria-expanded', hamburgerEl.getAttribute('aria-expanded') === 'true'? 'false' : 'true' );
  });

  hamburgerEl.addEventListener('key', e => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      menuEl.classList.toggle('open');
      // also update the menu's aria-expanded attribute
      hamburgerEl.setAttribute('aria-expanded', hamburgerEl.getAttribute('aria-expanded') === 'true'? 'false' : 'true' );
    };
  });
})();