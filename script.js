const libraryContainer = document.querySelector(`.library-container`);
const myLibrary = [];

// Open and close modal

const openModal = document.querySelector(`#plus`);
const dialog = document.querySelector(`dialog`);
const closeModal = document.querySelector(`#close`);


openModal.addEventListener(`click`, () => {
    dialog.showModal();
    clearInput();
})

closeModal.addEventListener(`click`, ()=> {
    dialog.close();
})

// Clear input
function clearInput() {
    const title = document.querySelector(`#get-title`).value = ``;
    const author = document.querySelector(`#get-author`).value = ``;
    const pages = document.querySelector(`#get-pages`).value = ``;
    const read = document.querySelector(`#get-read`).checked = false;
}

// Add a new book
const submit = document.querySelector(`#submit`);

submit.addEventListener(`click`, () => {
    addBook();
})



function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(read === true ) {
        this.read = `read` 
    } else if (read === false) {
        this.read = `unread`
    }
}

function addBook() {
    const title = document.querySelector(`#get-title`).value;
    const author = document.querySelector(`#get-author`).value;
    const pages = document.querySelector(`#get-pages`).value;
    const read = document.querySelector(`#get-read`).checked;
    
    if(title === `` || author === `` || pages === ``) return
    
    
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);

    createBookCard(newBook);

}

function createBookCard(book) {
    // Create a number to identify in the array.
    const arrayPosition = myLibrary.length - 1;
    // Create a book container
    const newBook = document.createElement(`div`);
    newBook.classList.add(`bookContainer`);
    libraryContainer.appendChild(newBook);
    // Add book elements
    const title = document.createElement(`p`);
    title.textContent = book.title;
    title.classList.add(`bookTitle`)
    newBook.appendChild(title);

    const author = document.createElement(`p`);
    author.textContent = `By ${book.author}`;
    author.classList.add(`bookAuthor`);
    newBook.appendChild(author);

    const pages = document.createElement(`p`)
    pages.textContent = `Pages: ${book.pages}`;
    pages.classList.add(`bookPages`)
    newBook.appendChild(pages);
    
    const read = document.createElement(`p`);
    if(book.read === `read`) {
        read.style.backgroundImage = `url(multimedia/icons/eye.svg)`;
    } else if (book.read === `unread`) {
        read.style.backgroundImage = `url(multimedia/icons/eye-slash.svg)`;
    }
    read.addEventListener(`click`, () =>{
        if(book.read === `unread`) {
            read.style.backgroundImage = `url(multimedia/icons/eye.svg)`;
            book.read = `read`
        }   else {
                read.style.backgroundImage = `url(multimedia/icons/eye-slash.svg)`;
                book.read = `unread`
            }
    })
    read.classList.add(`bookRead`, `icon`);
    newBook.appendChild(read);

    const deleteBtn = document.createElement(`button`);
    deleteBtn.classList.add(`deleteBook`);
    newBook.appendChild(deleteBtn)

    deleteBtn.addEventListener(`click`, () => {
        deleteAbook(title);
        newBook.remove();

    })
    
}

function deleteAbook(title) {
    let index = myLibrary.map(myLibrary => myLibrary.title).indexOf(`${title.textContent}`)
    myLibrary.splice(index, 1);
    const container = document.querySelector(`.library-container`);
}





