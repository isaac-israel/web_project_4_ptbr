// Modal edit
const edit = document.querySelector(".profile__button");
const closeButton = document.querySelector(".edit__close");
const modal = document.querySelector(".edit__modal");
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

// Coloca post
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


initialCards.forEach((item)=>{
  putPost(item);
});

function putPost(item) {
  const posts = document.querySelector('.posts');
  const postTemplate = document.querySelector('.post__template').content;
  const postElement = postTemplate.querySelector('.post').cloneNode(true);

  postElement.querySelector('.post__title').textContent = item.name;
  postElement.querySelector('.post__image').style.backgroundImage = `url(${item.link})`;
  posts.appendChild(postElement);
}

// Abre e fecha o modal de adicionar post
const buttonAdd = document.querySelector('.button__add');
const modalAdd = document.querySelector('.add__modal');
const addClose = document.querySelector('.add__close');

function addPost(){
  modalAdd.classList.remove('popup_closed');
  fade.classList.remove('fade_closed');
}

function closePost(){
  modalAdd.classList.add('popup_closed');
  fade.classList.add('fade_closed');
}

buttonAdd.addEventListener('click', addPost);
addClose.addEventListener('click', closePost);

// Form do modal de adicionar post
const formAdd = document.querySelector('.form__add');

function formAddSubmit(e){
  e.preventDefault();

  const addTitle = document.querySelector('.form__title');
  const addLink = document.querySelector('.form__link');
  const addTitleValue = addTitle.value;
  const addLinkValue = addLink.value;
  console.log(addTitle)

  const arrayAux=[
    {
      name: `${addTitleValue}`,
      link: `${addLinkValue}`,
      likes: 0
    }
  ];

  initialCards.push(arrayAux);

  const posts = document.querySelector('.posts');
  const postTemplate = document.querySelector('.post__template').content;
  const postElement = postTemplate.querySelector('.post').cloneNode(true);

  postElement.querySelector('.post__title').textContent=addTitleValue;
  postElement.querySelector('.post__image').style.backgroundImage=`url(${addLinkValue})`;
  posts.appendChild(postElement);

  closePost();
}

formAdd.addEventListener('submit', formAddSubmit);

// Evento clique no Like

const like = document.querySelectorAll('.button__image');
let aux = 0;

like.forEach((element)=>{
  function getLike(e){
    manageLikes();
    e.target.classList.toggle('.post__button_active');
    addLike(e);
  }

  element.addEventListener('click', getLike);
});

//Gerencia Likes
function manageLikes() {
  aux += 1;
  aux === 1 ? (addLike(), aux += 1) : (removeLike(), aux -= 3);
}

//Adiciona Likes no array
function addLike(e) {
  initialCards.forEach((item) => {
    if (e === item)
      item.likes += 1;
  });
}

//Remove Likes do array
function removeLike(e){
  initialCards.forEach((item) => {
    if (e === item)
      item.likes -= 1;
  });
}

// Delete Post
const deletePost = document.querySelectorAll('.post__delete');

deletePost.forEach((element)=>{
  function delPost(e){
    e.target.parentElement.parentElement.parentElement.remove();
  }

  element.addEventListener('click', delPost);
});

// Popup Image
const postImage = document.querySelectorAll('.post__image');
const imageModal = document.querySelector('.image__modal');

postImage.forEach((element)=>{
  function popupImageOpen(e){
  }

  element.addEventListener('click', popupImage());
});
