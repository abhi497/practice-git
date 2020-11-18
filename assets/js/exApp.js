const addBtn = document.getElementById('addTodo');
const todoListContainer = document.getElementsByClassName('todo-container')[0];
let todoList = [];

const refreshDom = (title, desc) => {
    title.value = '';
    desc.value = '';
}

const addTodoHandler = () => {
    let todoTitle = document.getElementById('todoTitle');
    let todoDesc = document.getElementById('todoDesc');

    const todo = {
        title : this.todoTitle.value,
        description: this.todoDesc.value
    }
    todoList.push(todo);
    console.log(todoList);
    addTodoInDom(todo);
    
    refreshDom(todoTitle, todoDesc);
}

const editTodo = () => {
    console.log('edit is working');
}

const deleteTodo = () => {
    console.log('delete is working', this);
    todoList.pop();
    // refreshDelete();
    console.log(todoList);
}

// const refreshDelete = () => {

// }

const addTodoInDom = (todo) => {
    const todoEle = document.createElement('div');
    todoEle.className = 'card mb-2 p-2';
    todoEle.innerHTML = `
                        <h2 class="title">${todo.title}</h2>
                        <p class="desc">${todo.description}</p>
                        <div>
                            <button class="btn btn-primary edit-btn">Edit</button>
                            <button class="btn btn-secondary delete-btn">Delete</button>
                        <div>
    `;
    todoListContainer.appendChild(todoEle);

    const editBtn = todoEle.querySelector('.edit-btn');
    editBtn.addEventListener('click', editTodo);

    const deleteBtn = todoEle.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteTodo.bind(todo));
}

addBtn.addEventListener('click', addTodoHandler);


