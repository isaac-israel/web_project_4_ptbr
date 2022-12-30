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

  modalClose()
}

form.addEventListener('submit', formSubmit);

// Placeholder
const name = document.querySelector(".form__name");
const status = document.querySelector(".form__status");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

name.placeholder = title.textContent;
status.placeholder = subtitle.textContent;

// Coloca post

const posts = document.querySelector('.posts');
const postTemplate = document.querySelector('.post__template').content;
const postElement = postTemplate.querySelector('.post').cloneNode(true);
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];



initialCards.forEach((item)=>{
  postElement.querySelector('.post__title').textContent=item.name;
  postElement.querySelector('.post__image').style.backgroundImage=`url(${item.link})`;
  posts.appendChild(postElement);
});

