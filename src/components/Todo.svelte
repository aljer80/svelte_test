
<script>
    import {deleteTodo, toggleTodoCompleted} from '../stores/todoStore.js';
    export let todo;    //the component accepts a prop named todo from its parent component
</script>

<!-- the checkbox will be checked if todo.completed is true, and unchecked if it's false. 
When the checkbox value changes toggleTodoCompleted is called (with todo.id as an argument) -->
<li>
    <input
        name="completed"
        type="checkbox"
        checked={todo.completed}
        on:change={() => toggleTodoCompleted(todo.id)}
    />

    <!-- Span displays the todo.text  -->
    <!-- The class attribute is set dynamically using string interpolation. If todo.completed is true, the class "selected" will be applied -->
    <span class={`${todo.completed ? 'selected' : '' }`}> {todo.text} </span>  
    <button type="button" on:click={() => deleteTodo(todo.id)}>Delete</button>
</li>

 <!--Contains CSS styles that apply to the component -->
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
