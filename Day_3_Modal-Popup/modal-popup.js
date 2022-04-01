let openModal = document.querySelector('button');
let modal__inner = document.querySelector('.modal__inner');
let modal = document.querySelector('.modal__inner');
let btnClose = document.querySelector('.modal__footer button');
let iconClose = document.querySelector('.modal__header i');

function toggleModal(e){
    if(e.target === e.currentTarget){
        modal.classList.toggle('hide')
    }
}
modal__inner.addEventListener('click',toggleModal);
modal.addEventListener('click',toggleModal);
openModal.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
iconClose.addEventListener('click',toggleModal);



