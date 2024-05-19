const inputbox = document.getElementById('inputbox');
const listcontainer = document.getElementById('list-container');

function addTask() {
  if (inputbox.value === '') {
    alert('Field cannot be empty..Add some task');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '❌';
    li.appendChild(span);
  }
  inputbox.value = '';
  saveToLocalStorage();
}

listcontainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveToLocalStorage();
  }
});

function saveToLocalStorage() {
  localStorage.setItem('data', listcontainer.innerHTML);
}

function displayTask() {
  listcontainer.innerHTML = localStorage.getItem('data');
}

displayTask();
