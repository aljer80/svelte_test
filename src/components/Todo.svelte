
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
    @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Kalam&family=Shadows+Into+Light&display=swap');


    li {
    display: flex; 
    align-items: center;
    align-content: center;
    list-style-type: none;
    font-family: 'Shadows Into Light', cursive;
    font-family: 'Kalam', cursive;
    font-size: 18px;

}


button {
        background: rgb(139, 132, 132);
        border: none;
        color: white;
        padding: 1px 5px;
        margin-left: 10px;
        text-align: center;
        text-decoration: none;
        font-size: small;
        
    }

    button:hover {
        background: rgb(212, 32, 32);
        border: none;
        color: white;
        padding: 1px 5px;
        margin-left: 10px;
        text-align: center;
        text-decoration: none;
        font-size: small;
    }

span.selected {
text-decoration:line-through;
}

</style>
