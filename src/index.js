import './style.css';

function component() {
    const element = document.createElement('div');
    
    element.textContent = "Hello Worldss"  
    element.classList.add("red")
    return element;
  }
  
  document.body.appendChild(component());


const TodoList = (function(){
    const list = [];

    const enterTodo = (task) => {
        list.push(task)
    };
    
    const getlistConsole = () =>{
        return console.log(list);
    };
    
    const getlist = () =>{return list};
    
    return {enterTodo, getlistConsole, getlist}
})

const TodoController = (function(){
    function createTodo(title, description, dueDate, priority) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        }
}
    return {createTodo}
})()

// create a todo and add it to list
let task1 = TodoController.createTodo("myTask", "todo description", "may 3rd", "low");
TodoList.enterTodo(task1)


let myObject = TodoList();
console.log(myObject)