// Function to toggle the visibility of the form
function toggleForm() {
  var form = document.getElementById('book-form');
  var toggleButton = document.getElementById('toggle-form-btn');

  if (form.style.display === 'none') {
      form.style.display = 'block';
      toggleButton.textContent = 'Hide Form';
  } else {
      form.style.display = 'none';
      toggleButton.textContent = 'Add New Book';
  }
}

// Function to add a new book to the library
function addBook() {
  // Get input values
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var read = document.getElementById('read').checked;

  // Create book object
  var book = {
      title: title,
      author: author,
      pages: pages,
      read: read
  };

  // Add book to the library
  addToLibrary(book);

  // Clear the form fields
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;

  // Hide the form after adding a new book
  toggleForm();
}

// Function to add book to the library and display it
function addToLibrary(book) {
  var bookList = document.getElementById('book-list');

  // Create a new div to display the book
  var bookDiv = document.createElement('div');
  bookDiv.className = 'book';
  
  var readStatus = book.read ? 'Read' : 'Not Read';

  bookDiv.innerHTML = `<strong>Title:</strong> ${book.title}<br>
                       <strong>Author:</strong> ${book.author}<br>
                       <strong>Pages:</strong> ${book.pages}<br>
                       <strong>Status:</strong> ${readStatus}`;

  // Append the book div to the book list
  bookList.appendChild(bookDiv);
}


