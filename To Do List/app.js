const task = document.querySelector('#task');
const list = document.querySelector('#list');
const close = document.querySelector('li');
const bildirim = document.querySelector('.bildirim');

list.addEventListener('click', deleteElement.bind(this));

function newElement() {
    if (task.value != '') {
        ekranaYaz(task.value);
    }
    else {
        setInterval(() => {
            bildirim.textContent = "Boş bırakılamaz";
            bildirim.classList.add("header");
        }, 2000);

    }
}

function ekranaYaz(text) {

    const eklenecek = document.createElement('li');
    eklenecek.innerHTML = `${text}<i class="close">X</i>`;
    list.appendChild(eklenecek);
}

function deleteElement(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.remove();
    }
    else {
        const item = e.target;
        item.classList.toggle("arkaplan")
    }
}
