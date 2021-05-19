//selectors
const todoInput = document.querySelector('.textinput');
const todoButton = document.querySelector('.inputbtn');
const todoList = document.querySelector('.todo-list');




//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//funcitons
function addTodo(event){
    //this prevents the form from submitting
    event.preventDefault();
    // console.log('hello');
    //todo div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    //create li
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //check button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check "></li> '
    completedbutton.classList.add('complete-btn');
    tododiv.appendChild(completedbutton);
    //delete button
    const deletebutton = document.createElement('button');
    deletebutton.innerHTML = '<i class="fas fa-trash"></li> '
    deletebutton.classList.add('delete-btn');
    tododiv.appendChild( deletebutton);
    //append to list
    todoList.appendChild(tododiv);
    //clear todo input value
    todoInput.value = "";
}
function deleteCheck(e){
    const item = e.target;
    //delete item 
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        setTimeout(function(){
            todo.remove();
        },500);
    }
}








