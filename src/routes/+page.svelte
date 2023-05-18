
<script>
    import TodoForm from '../components/TodoForm.svelte';
    import Todo from '../components/Todo.svelte';
    import {todos} from '../stores/todoStore.js';
    
</script>

<header> 
    <h3>Exploring frameworks. Svelte Todo list</h3>

</header>

<main>
    <section>
       <h1>
        My Todos
    </h1> 
    <p>
        Difficult to remember all the must-haves? Make a Todo list. 
        Upon completion of a task you can choose to either cross the todo off the list or 
        to completely delete it from the list. 
    </p>
    </section>
    <section>
        <TodoForm/>
        {#each $todos as todo}  <!-- $ in front of todos to access the data directly --> 
            <Todo todo={todo} index={todo.id} />
        {/each}
    </section>
   
</main>

<footer>
    <p>Visit <a href="https://svelte.dev/">svelte.dev</a> to learn more!</p>
</footer>

<style>

    header{
        margin-bottom: 45px;
    }

</style>
