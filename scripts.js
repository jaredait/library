// Variables and constants
let library = [];
const libraryContent = document.getElementById('library-content');
const bookInputField = document.querySelector('#book-input');
const bookInputDisplay = document.querySelector('#book-input-display');

// BOOK OBJECT
// Book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// "to string" method for the book objects
Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`;
}

// FUNCTIONS
// function that creates a book object and adds it to the library array, then, prints the library updated.
function addBookToLibrary(){
    const title = document.querySelector('#input-title').value || 'Empty book';
    const author = document.querySelector('#input-author').value || 'empty author';
    const pages = document.querySelector('#input-pages').value || 'empty pages';
    const read = document.querySelector('#input-read').value;

    const newBook = new Book(title, author, pages, read);

    library.push(newBook);
    displayLibrary();
}

// function that displays the books contained in the library array
function displayLibrary(){
    libraryContent.textContent = ''
    for (let i = 0; i < library.length; i++) {
        book = library[i];
        
        // create the book card
        const newBookCard = document.createElement('div');
        newBookCard.dataset.key = `index-${i}`;
        newBookCard.textContent = book.info();
        newBookCard.style.cssText = "display: flex; flex-direction: row; align-items: center;";

        
        // add remove button to the card
        const removeBookButton = document.createElement('div');
        removeBookButton.textContent = 'Remove';
        removeBookButton.classList = "rounded-button-small";
        removeBookButton.dataset.index = i;

        // add event listener to the remove button
        removeBookButton.addEventListener('click', removeBook);

        newBookCard.appendChild(removeBookButton);
        libraryContent.appendChild(newBookCard);
    }
}

// Function that removes the book from the library array
function removeBook(e){
    index = e.target.dataset.index;
    console.log(e.target);
    library.splice(index, 1);
    displayLibrary();
}

// Function that generateS the input fields for the new book
function generateForm(){
    // create title field
    const titleField = document.createElement('input');
    titleField.type = 'text';
    titleField.classList = 'user-input';
    titleField.id = 'input-title';
    titleField.dataset.field = 'book-title';
    titleField.placeholder = 'Title'

    // create author field
    const authorField = document.createElement('input');
    authorField.type = 'text';
    authorField.classList = 'user-input';
    authorField.id = 'input-author';
    authorField.dataset.field = 'book-author';
    authorField.placeholder = 'Author'

    // create pages field
    const pagesField = document.createElement('input');
    pagesField.type = 'text';
    pagesField.classList = 'user-input';
    pagesField.id = 'input-pages';
    pagesField.dataset.field = 'book-pages';
    pagesField.placeholder = 'Pages'
 
    // create pages field
    const readField = document.createElement('input');
    readField.type = 'text';
    readField.classList = 'user-input';
    readField.id = 'input-read';
    readField.dataset.field = 'book-read';
    readField.placeholder = 'Read'

    // create add book button
    const buttonAddBook = document.createElement('div');
    buttonAddBook.textContent = 'Add book';
    buttonAddBook.classList = 'rounded-button';

    // Add event listener to the add-book-button
    buttonAddBook.addEventListener('click', addBookToLibrary);

    // append fields to the form div
    bookInputField.appendChild(titleField);
    bookInputField.appendChild(authorField);
    bookInputField.appendChild(pagesField);
    bookInputField.appendChild(readField);
    bookInputField.appendChild(buttonAddBook);
}

// Add event listener to the book-input-display button
bookInputDisplay.addEventListener('click', generateForm);


