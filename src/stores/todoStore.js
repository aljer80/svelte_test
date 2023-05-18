import { writable } from "svelte/store"; //imports the `writable` function from the `svelte/store` module

export const todos = writable([]);  //Defines a Svelte store named todos that stores an array of todo items which we can access in different places 


// Add a new todo item (updating the array and adding the new value)
export const addTodo = (text) => {
    todos.update( (cur) => {
        const newTodos = [... cur, {text, completed:false, id:Date.now()}]; 
        return newTodos;
    })
}

//Remove a todo item by ID
export const deleteTodo = (id) => {
    todos.update(todos => todos.filter(todo => todo.id != id)); //implicit return, keeping the id:s if they don't match the id we're trying to delete
}

//Toggle the completion status of a todo item by ID
export const toggleTodoCompleted = (id) => {
    todos.update(todos => {
        let index = -1;
        for (let i = 0; i < todos.length; i++){
            if(todos[i].id == id) {
                index = i; 
                break; 
            }
        }
        //if index is not -1 toggle it and return the to do's. 
        if(index !== -1) {
            todos[index].completed = !todos[index].completed; //take the existing value, flip it with the not character, and that's going to be the new value
        }
        return todos;
    })
}

/* Other components can import and use these functions to update the shared todos store and 
trigger reactivity in components that depend on it */