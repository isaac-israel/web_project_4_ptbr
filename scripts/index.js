// Modal edit
const edit = document.querySelector(".profile__button");
const closeButton = document.querySelector("#edit__close");
const modal = document.querySelector("#edit__modal");
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

// Form do modal Edit
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

  document.querySelector(".form__name").value = '';
  document.querySelector(".form__status").value = '';

  modalClose()
}

form.addEventListener('submit', formSubmit);

// Placeholder do modal edit
const name = document.querySelector(".form__name");
const status = document.querySelector(".form__status");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");

name.placeholder = title.textContent;
status.placeholder = subtitle.textContent;

// Posta os arrays salvos
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
    likes: 0
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
    likes: 0
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
    likes: 0
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
    likes: 0
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
    likes: 0
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
    likes: 0
  }
];

initialCards.forEach((item) => {
  putPost(item);
});

function putPost(item) {
  const posts = document.querySelector('.posts');
  const postTemplate = document.querySelector('#post__template').content;
  const postElement = postTemplate.querySelector('.post').cloneNode(true);

  postElement.querySelector('.post__title').textContent = item.name;
  postElement.querySelector('.post__image').style.backgroundImage = `url(${item.link})`;
  posts.appendChild(postElement);
}

// Abre e fecha o modal de adicionar post
const buttonAdd = document.querySelector('#button__add');
const modalAdd = document.querySelector('#add__modal');
const addClose = document.querySelector('#add__close');

function addPost() {
  modalAdd.classList.remove('popup_closed');
  fade.classList.remove('fade_closed');
}

function closePost() {
  modalAdd.classList.add('popup_closed');
  fade.classList.add('fade_closed');
}

buttonAdd.addEventListener('click', addPost);
addClose.addEventListener('click', closePost);

// Form do modal de adicionar post
const formAdd = document.querySelector('#form__add');

function formAddSubmit(e) {
  e.preventDefault();
  const addTitle = document.querySelector('.form__title').value;
  const addLink = document.querySelector('.form__link').value;

  const arrayAux = [
    {
      name: `${addTitle}`,
      link: `${addLink}`,
      likes: 0
    }
  ];

  initialCards.push(arrayAux);

  const posts = document.querySelector('.posts');
  const postTemplate = document.querySelector('#post__template').content;
  const postElement = postTemplate.querySelector('.post').cloneNode(true);

  postElement.querySelector('.post__title').textContent = addTitle;
  postElement.querySelector('.post__image').style.backgroundImage = `url(${addLink})`;
  posts.appendChild(postElement);

  addTitle.value = 'batata';
  addTitle.textContent = 'morango';

  document.querySelector('.form__title').value = '';
  document.querySelector('.form__link').value = '';

  closePost();
}

formAdd.addEventListener('submit', formAddSubmit);

// Evento clique no Like
const like = document.querySelectorAll('.button__image');

like.forEach((element) => {
  function getLike(e) {
    e.target.classList.toggle('post__button_active');
  }
  element.addEventListener('click', getLike);
});

// Delete Post
const deletePost = document.querySelectorAll('.post__delete');

deletePost.forEach((element) => {
  function delPost(e) {
    e.stopPropagation()
    e.target.parentElement.parentElement.parentElement.remove();
  }
  element.addEventListener('click', delPost, { capture: true });
});

// Popup Image
const imageModal = document.querySelector('#image__modal');
const postImage = document.querySelectorAll('.post__image');
const imageClose = document.querySelector('#image__close');
const modalImage = document.querySelector('#modal__image');
const modalDescription = document.querySelector('#modal__description');


postImage.forEach((element) => {
  function popupImage(e) {
    popupImageOpen();
    const postTitle = document.querySelector('.post__title').textContent;
    modalDescription.textContent = postTitle;
    const image = e.target.style.backgroundImage;
    const imageAux = image.slice(5, image.length - 2);
    modalImage.src = `${imageAux}`;
    modalImage.setAttribute('alt', postTitle);
    imageWidth();
  }
  element.addEventListener('click', popupImage);
});

imageClose.addEventListener('click', popupImageClose);

// Calcula a largura da imagem
function imageWidth() {
  const buttonImage = document.querySelector('#image__modal_close');
  const imageWidth = modalImage.clientWidth;
  buttonImage.style.width = `${imageWidth + 80}px`;
}

// Fecha o popup da imagem
function popupImageClose() {
  imageModal.classList.add('popup_closed');
  fade.classList.add('fade_closed');
}

// Abre o popup da imagem
function popupImageOpen() {
  imageModal.classList.remove('popup_closed');
  fade.classList.remove('fade_closed');
}