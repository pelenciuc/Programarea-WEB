function createItem(todo) {
    const item = document.createElement('div')
    item.classList.add('todo__item')

    const title = document.createElement('div')
    title.classList.add('todo__item--title')
    title.innerText = todo.title;

    const text = document.createElement('div')
    text.classList.add('todo__item--text')
    text.innerText = todo.description;

    const date = document.createElement('div')
    date.classList.add('todo__item--date')
    date.innerText = todo.execution_time;

    const close = document.createElement('div')
    close.classList.add('todo__item--remove')
    close.innerText = '+';

    close.addEventListener('click', async() => {
        await removeItem(todo.id)
    })

    const edit = document.createElement('div')
    edit.classList.add('todo__item--edit')
    edit.innerText = 'edit';

    edit.addEventListener('click', async() => {
        await editItem(todo.id)
    })

    item.id = todo.id;

    item.appendChild(title)
    item.appendChild(text)
    item.appendChild(date)
    item.appendChild(close)
    item.appendChild(edit)


    return item;
}

function showItems(items) {
    const list = document.getElementById('todo');
    list.innerHTML = '';

    for (const todo of items) {
        const item = createItem(todo)
        list.appendChild(item)
    }

}

async function removeItem(id) {
    try {
        await deleteTodo(id)
        document.getElementById(id).remove()
    } catch (e) {
        alert(e)
    }
}

async function editItem(id) {
    try {
        const response = await getTodoById(id);
        await createModal(response)
    } catch (e) {
        alert(e)
    }
}

async function createModal(item) {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    const content = document.createElement('div')
    content.classList.add('modal__content')

    const title = document.createElement('input')
    title.classList.add('input')
    title.value = item.title

    const text = document.createElement('textarea')
    text.classList.add('textarea')
    text.value = item.description

    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = 'Update'

    btn.addEventListener('click', async () => {
       await updateTodo(item.id, {
            title: title.value,
            description: text.value,
            execution_time: new Date().toLocaleString()
          }
       )

        await loadData()
        modal.remove()
    })

    const close = document.createElement('div')
    close.classList.add('todo__item--remove')
    close.innerText = '+';

    close.addEventListener('click', async () => {
        modal.remove()
    })

    content.appendChild(title)
    content.appendChild(text)
    content.appendChild(btn)
    content.appendChild(close)

    modal.appendChild(content)
    document.body.appendChild(modal)
}

async function createTodo() {
    try {
        let title = document.getElementById('title');
        let description = document.getElementById('description')
        const execution_time = new Date().toLocaleString()

        await addTodo({
            title: title.value,
            description: description.value,
            execution_time
        })

        title.value  = '';
        description.value = ''

        await loadData();
    } catch (e) {
        alert(e)
    }
}

async function loadData() {
    try {
        const response = await getTodos();

        showItems(response);
    } catch(e) {
        console.log(e)
    }

}

function getTodos() {
    return new Promise( async (resolve, reject) => {
        const response = await fetch('http://localhost:3000/todo').then(response => response.json());

        resolve(response)
    })
}

function getTodoById(id) {
    return new Promise( async (resolve, reject) => {
        const response = await fetch(`http://localhost:3000/todo/${id}`).then(response => response.json());

        resolve(response)
    })
}

function addTodo(payload) {
    return new Promise( async (resolve, reject) => {
        const response = await fetch(`http://localhost:3000/todo`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json());

        resolve(response)
    })
}

function updateTodo(id, payload) {
    return new Promise( async (resolve, reject) => {
        const response = await fetch(`http://localhost:3000/todo/${id}`, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json());

        resolve(response)
    })
}

function partialUpdateTodo(id, payload) {
    return new Promise( async (resolve, reject) => {
        const response = await fetch(`http://localhost:3000/todo/${id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json());

        resolve(response)
    })
}

function deleteTodo(id) {
    return new Promise( async (resolve, reject) => {
        const response = await fetch(`http://localhost:3000/todo/${id}`, {
            method: "DELETE",
        }).then(response => response.json());

        resolve(response)
    })
}

loadData().then(r => r)