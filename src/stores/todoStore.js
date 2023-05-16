import { writable } from "svelte/store";

export const todos = writable([]);  //writable defines todos which we can access in different places 

//updating the array and adding the new value
export const addTodo = (text) => {
    todos.update( (cur) => {
        const newTodos = [... cur, {text, completed:false, id:Date.now()}]; 
        return newTodos;
    })
}

//handle deletion
export const deleteTodo = (id) => {
    todos.update(todos => todos.filter(todo => todo.id != id)); //implicit return, keeping the id:s if they don't match the id we're trying to delete
}


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