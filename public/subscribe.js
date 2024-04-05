"use strict";
(function() {
  // open and close the modal dialogue
  const modalEl = document.querySelector('.main__modal');
  const openEls = document.querySelectorAll('.card__subscribe');
  const cancelEl = document.querySelector('.modal__cancel');
  
  openEls.forEach( openEl => {
    openEl.addEventListener('click', () => {
      modalEl.showModal();
    });
  });

  cancelEl.addEventListener('click', () => {
    modalEl.close();
  });

  // check the email upon input
  const emailInputEl = document.querySelector('.modal__email');
  const emailErrorEl = document.querySelector('.modal__email--error');
  emailInputEl.addEventListener("input", (e) => {
    if(!e.target.value) {
      emailErrorEl.innerText = "This field is required";
      e.target.classList.remove("modal__input--error");
      e.target.classList.toggle("modal__input--error");
    } else if (!e.target.value.includes('@')) {
      emailErrorEl.innerText = "This field be a valid email address including a @";
      e.target.classList.remove("modal__input--error");
      e.target.classList.toggle("modal__input--error");
    } else {
      emailErrorEl.innerText = "";
      e.target.classList.remove("modal__input--error");
    }
  });
  
  // check the email confirmation upon input
  const confirmInputEl = document.querySelector('.modal__confirm');
  const confirmErrorEl = document.querySelector('.modal__confirm--error');
  confirmInputEl.addEventListener("input", (e) => {
    if(e.target.value !== emailInputEl.value) {
      confirmErrorEl.innerText = "This field must match the provided email address";
      e.target.classList.remove("modal__input--error");
      e.target.classList.toggle("modal__input--error");
    } else {
      confirmErrorEl.innerText = "";
      e.target.classList.remove("modal__input--error");
    }
  });

  // check before submission
  const subscribe = document.querySelector('.main__subscribe');
  subscribe.addEventListener('submit', e => {
    e.preventDefault();
    let canSubmit = true;

    if (!emailInputEl.value) {
      emailErrorEl.innerText = "This field is required";
      canSubmit = false;
    } else if (!emailInputEl.value.includes('@')) {
      emailErrorEl.innerText = "This field be a valid email address including a @";
      canSubmit = false;
    } else {
      emailErrorEl.innerText = "";
    }

    if (emailInputEl.value !== confirmInputEl.value) {
      confirmErrorEl.innerText = "This field must match the provided email address";
      canSubmit = false;
    } else {
      confirmErrorEl.innerText = "";
    }

    if (canSubmit) {
      subscribe.submit();
    }

  });
})();