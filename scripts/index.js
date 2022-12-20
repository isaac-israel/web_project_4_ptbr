// Modal
let edit = document.querySelector(".profile__button");
let closeButton = document.querySelector(".popup__close");
let modal = document.querySelector(".popup");
let fade = document.querySelector(".fade");



function modalShow(){
    modal.classList.remove('popup_closed');
    fade.classList.remove('fade_closed');
}

function modalClose(){
    modal.classList.add('popup_closed');
    fade.classList.add('fade_closed')
}

edit.addEventListener('click', modalShow);
closeButton.addEventListener('click', modalClose);

// Form
let form = document.querySelector(".form");
function formSubmit(e){
    e.preventDefault();
    
    let name = document.querySelector(".form__name");
    let status = document.querySelector(".form__status");

    let title = document.querySelector(".profile__title");
    let subtitle = document.querySelector(".profile__subtitle");

    title.textContent = name.value; 
    subtitle.textContent = status.value;    

    name.placeholder=title.textContent;
    status.placeholder=subtitle.textContent;
}

form.addEventListener('submit', formSubmit);

// Placeholder
let name = document.querySelector(".form__name");
let status = document.querySelector(".form__status");
let title = document.querySelector(".profile__title");
let subtitle = document.querySelector(".profile__subtitle");

name.placeholder=title.textContent;
status.placeholder=subtitle.textContent;

