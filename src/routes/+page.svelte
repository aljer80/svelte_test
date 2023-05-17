
<script>
    import TodoForm from '../components/TodoForm.svelte';
    import Todo from '../components/Todo.svelte';
    import {todos} from '../stores/todoStore.js';
    
</script>

<header> 
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</header>

<main>
    <h1>
        My Todos
    </h1>
    <TodoForm/>
    {#each $todos as todo}  <!-- $ in front of todos to access the data directly --> 
        <Todo todo={todo} index={todo.id} />
    {/each}
</main>
