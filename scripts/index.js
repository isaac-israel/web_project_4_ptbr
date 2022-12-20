// Modal
const edit = document.querySelector(".profile__button");
const closeButton = document.querySelector(".popup__close");
const modal = document.querySelector(".popup");
const fade = document.querySelector(".fade");



function modalShow() {
  modal.classList.remove('popup_closed');
  fade.classList.remove('fade_closed');
}

function modalClose() {
  modal.classList.add('popup_closed');
  fade.classList.add('fade_closed')
}

edit.addEventListener('click', modalShow);
closeButton.addEventListener('click', modalClose);

// Form
const form = document.querySelector(".form");
function formSubmit(e) {
  e.preventDefault();

  const name = document.querySelector(".form__name");
  const status = document.querySelector(".form__status");

  const title = document.querySelector(".profile__title");
  const subtitle = document.querySelector(".profile__subtitle");

  title.textContent = name.value;
  subtitle.textContent = status.value;

  name.placeholder = title.textContent;
  status.placeholder = subtitle.textContent;
}

form.addEventListener('submit', formSubmit);

// Placeholder
const name = document.querySelector(".form__name");
const status = document.querySelector(".form__status");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

name.placeholder = title.textContent;
status.placeholder = subtitle.textContent;

