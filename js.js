console.log('linkando')

const edit = document.querySelector(".edit-button");
const closeButton = document.querySelector(".close-button");
const modal = document.querySelector(".popup");

edit.onclick = open();
closeButton.onclick = close();

function open(){
    if(edit.onclick)
    modal.showModal();
}

function close(){
    if(closeButton.onclick)
    modal.close();
}

// edit.onclick = console.log('edit');
// closeButton.onclick = console.log('morango');

// edit.onclick = ()=> modal.showModal();
// closeButton.onclick = ()=>modal.close();

console.log(modal);

