// Modal
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

// Form do Edit
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
  const posts = document.querySelector('.posts');
  const postTemplate = document.querySelector('.post__template').content;
  const postElement = postTemplate.querySelector('.post').cloneNode(true);

  postElement.querySelector('.post__title').textContent=item.name;
  postElement.querySelector('.post__image').style.backgroundImage=`url(${item.link})`;
  posts.appendChild(postElement);
});

// Add Post
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

// Form do Add
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
      link: `${addLinkValue}`
    }
  ];

  initialCards.push(arrayAux);

  const posts = document.querySelector('.posts');
  const postTemplate = document.querySelector('.post__template').content;
  const postElement = postTemplate.querySelector('.post').cloneNode(true);

  postElement.querySelector('.post__title').textContent=addTitleValue;
  postElement.querySelector('.post__image').style.backgroundImage=`url(${addLinkValue})`;
  posts.appendChild(postElement);

  closePost()
}

formAdd.addEventListener('submit', formAddSubmit)