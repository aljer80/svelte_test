
<script>
    import {deleteTodo, toggleTodoCompleted} from '../stores/todoStore.js';
    export let todo;    //basically means we're accepting props in here
    
    
</script>


<li>
    <input
        name="completed"
        type="checkbox"
        checked={todo.completed}
        on:change={() => toggleTodoCompleted(todo.id)}
    />
    <span class={`${todo.completed ? 'selected' : '' }`}> {todo.text} </span>  
    <button type="button" on:click={() => deleteTodo(todo.id)}>Delete</button>
</li>

<style>

li {
    display: flexbox; 
    align-items: center;
    align-content: center;
    list-style-type: none;
}


button {
        background: rgb(170, 0, 0);
        color: white;
        padding: 1px 5px;
        margin-top: 5px;
        text-align: center;
        text-decoration: none;
        font-size: small;
        
    }

    button:hover {
        background: rgb(129, 0, 0);
        border: none;
        color: white;
        padding: 1px 5px;
        text-align: center;
        text-decoration: none;
        font-size: medium;
    }

span.selected {
text-decoration:line-through;
}

</style>
