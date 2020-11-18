const todoContainer = document.createElement('section');
todoContainer.className = 'todo-container mt-4';
todoContainer.innerHTML = `
    <div class="card">
        <div class="card-header">
            <input type="text" id="todo-title" name="todo-title" class="form-control" placeholder="To Do Title" />
        </div>
        <div class="card-body">
            <textarea rows="6" id="todo-desc" name="todo-desc" class="form-control" placeholder="To Do Description" ></textarea>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary">Add To Do</button>
        </div>
    </div>    
`;


const addTodo = () => {
    let todoTitle = document.getElementById('todo-title').value;
    let todoDesc = document.getElementById('todo-desc').value;
    const todo = {
        title: todoTitle,
        description: todoDesc
    };
    createList(todo);
    todoTitle = '';
    todoDesc = '';
}

const deleteEvent = evn => {
    console.log('delete btn working', evn);
}

function editEvent() {
    console.log('edit is working');
}

const list = document.createElement('section');
const createList = (todo) => {
    const todoEle = document.createElement('div');
    todoEle.className = 'card mb-2 mt-2';
    todoEle.innerHTML = `
        <div class="card-body d-flex">
            <div class="card-left flex-grow-1">
                <h2>${todo.title}</h2>
                <p>${todo.description}</p>
            </div>
            <div class="card-right">
                <i class="fa fa-edit"></i>
                <i class="fa fa-trash"></i>
            </div>
        </div>
    `;
    list.appendChild(todoEle);

    deleteBtn = todoEle.querySelector('.fa-trash');
    deleteBtn.addEventListener('click', deleteEvent);

    editBtn = todoEle.querySelector('.fa-edit');
    editBtn.addEventListener('click', editEvent);
}


const addTOdoBtn = todoContainer.querySelector('button');
addTOdoBtn.addEventListener('click', addTodo);

const app = document.getElementById('app');
app.append(todoContainer);
app.append(list);
