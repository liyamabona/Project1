const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const item = input.value.trim();

    if(item !== '') {
        addItem(item);
        input.value = '';

    }
});

array = [];
function loadItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach((item) => addItem(item));
}

window.addEventListener('load',loadItems);

function addItem(item) {
    const li = document.createElement('li');
    li.innerHTML = `
    <span class="item">${item}</span>
    <button class="edit" onclick="edit(this)">Edit</button>
    <button class="delete">Remove</button>
    `;
    list.appendChild(li);

    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        li.remove(); 
        saveItems();
    });

    saveItems();
}
function edit(e){

    let i = document.querySelector('.edit');

    let update = prompt("Update task",);
    a = i.previousSibling;
    e.parentElement.childNodes[1].innerHTML = update
    console.log(e.parentElement.childNodes[0].innerHTML = update);

    localStorage.setItem('items',JSON.stringify(update));

    saveItems();

}

function saveItems() {
    const items = Array.from(list.children).map((li) => li.querySelector('.item').textContent);
    localStorage.setItem('items',JSON.stringify(items));
}