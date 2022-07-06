const table = document.getElementById('tbody');
const btnAdd = document.getElementById('button');
let dataBase = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    dataBase.push(this);
  }

  displayBook() {
    const row = document.createElement('tr');
    table.appendChild(row);

    const information = document.createElement('td');
    information.textContent = `"${this.title}" by ${this.author}`;
    row.appendChild(information);

    const dataRemove = document.createElement('td');
    row.appendChild(dataRemove);
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    dataRemove.appendChild(btnRemove);

    // Add remove action to the btnRemove that has been created for THIS instance
    btnRemove.addEventListener('click', (e) => {
      const parentBtn = e.target.parentNode;
      dataBase = dataBase.filter((x) => (x.author !== this.author) || (x.title !== this.title));
      parentBtn.parentElement.remove();
      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });
  }
}

btnAdd.addEventListener('click', () => {
  const nameTitle = document.getElementById('book').value;
  const nameAuthor = document.getElementById('author').value;

  const newBook = new Book(nameTitle, nameAuthor);
  newBook.addBook();
  newBook.displayBook();

  localStorage.setItem('baseData', JSON.stringify(dataBase));
});

// RECUPERANDO LA TABLA CUANDO LA PAGINA SE RECARGA //
if (localStorage.getItem('baseData')) {
  dataBase = JSON.parse(localStorage.getItem('baseData'));
  for (let i = 0; i < dataBase.length; i += 1) {
    const newBook = new Book(dataBase[i].title, dataBase[i].author);
    newBook.displayBook();
  }
}
