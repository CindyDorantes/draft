let newBook;
let btnRemove;
const btnAdd = document.getElementById('button');

// dataBase is the collection for all the books info
let dataBase = [];

// this function adds new input information to the dataBase and the HTML table

function Remove(parentBtn) {
  const currentAuthor = parentBtn.previousSibling.innerHTML;
  const currentTitle = parentBtn.previousSibling.previousSibling.innerHTML;
  dataBase = dataBase.filter((x) => (x.author !== currentAuthor) || (x.title !== currentTitle));
  parentBtn.parentElement.remove();
  localStorage.setItem('baseData', JSON.stringify(dataBase));
}

function add() {
  dataBase.push(newBook);
  console.log(dataBase);
  const table = document.getElementById('tbody');
  const row = document.createElement('tr');
  table.appendChild(row);
  const dataTitle = document.createElement('td');
  dataTitle.textContent = newBook.title;
  row.appendChild(dataTitle);
  const dataAuthor = document.createElement('td');
  dataAuthor.textContent = newBook.author;
  row.appendChild(dataAuthor);
  const dataRemove = document.createElement('td');
  row.appendChild(dataRemove);
  btnRemove = document.createElement('button');
  btnRemove.textContent = 'Remove';
  dataRemove.appendChild(btnRemove);

  // remove action
  btnRemove.addEventListener('click', (e) => {
    const parentBtn = e.target.parentNode;
    Remove(parentBtn);
  });
}

btnAdd.addEventListener('click', () => {
  function Store(title, author) {
    this.title = title;
    this.author = author;
  }

  const nameTitle = document.getElementById('book').value;
  const nameAuthor = document.getElementById('author').value;

  newBook = new Store(nameTitle, nameAuthor);
  add();

  localStorage.setItem('baseData', JSON.stringify(dataBase));
});

if (localStorage.getItem('baseData')) {
  dataBase = JSON.parse(localStorage.getItem('baseData'));
  for (let i = 0; i < dataBase.length; i += 1) {
    const table = document.getElementById('tbody');
    const row = document.createElement('tr');
    table.appendChild(row);
    const dataTitle = document.createElement('td');
    dataTitle.textContent = dataBase[i].title;
    row.appendChild(dataTitle);
    const dataAuthor = document.createElement('td');
    dataAuthor.textContent = dataBase[i].author;
    row.appendChild(dataAuthor);
    const dataRemove = document.createElement('td');
    row.appendChild(dataRemove);
    btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    dataRemove.appendChild(btnRemove);

    btnRemove.addEventListener('click', (e) => {
      const parentBtn = e.target.parentNode;
      Remove(parentBtn);
    });
  }
}