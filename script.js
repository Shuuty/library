const openModal = document.querySelector(`#plus`);
const dialog = document.querySelector(`dialog`);
const closeModal = document.querySelector(`#close`);
// Events

openModal.addEventListener(`click`, () => {
    dialog.showModal()
})

closeModal.addEventListener(`click`, ()=> {
    dialog.close();
})


