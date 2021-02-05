// Variables and constants
let library = [];
const libraryContent = document.getElementById('library-content');
const buttonAddBook = document.querySelector('#button-add-book');


// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`;
}

function addBookToLibrary(){
    const title = document.querySelector('#input-title').value;
    const author = document.querySelector('#input-author').value;
    const pages = document.querySelector('#input-pages').value;
    const read = document.querySelector('#input-read').value;

    const newBook = new Book(title, author, pages, read);

    library.push(newBook);
    displayLibrary();
}

function displayLibrary(){
    libraryContent.textContent = ''
    for (let i = 0; i < library.length; i++) {
        book = library[i];
        const newBookCard = document.createElement('div');
        newBookCard.dataset.key = `key-${book.title}`;
        newBookCard.textContent = book.info();
        libraryContent.appendChild(newBookCard);
    }
}

// Add event listener to the add-book-button
buttonAddBook.addEventListener('click', addBookToLibrary);

displayLibrary();

