let task = document.querySelector('#ipt');
let taskList = document.querySelector('.task-list');
let addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function () {
  let text = task.value;
  task.value = '';
  let deleteBtn = document.createElement('button');
  deleteBtn.id = 'delete-btn';
  deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
  let listElement = document.createElement('li');
  listElement.textContent = text;
  taskList.appendChild(listElement);
  listElement.append(deleteBtn);
  deleteBtn.addEventListener('click', function () {
    let parentElem = this.parentNode;
    parentElem.remove();
  });
  listElement.addEventListener('click', function () {
    listElement.classList.toggle('completed');
  });
});
