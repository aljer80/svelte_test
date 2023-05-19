
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
        Difficult to remember all the must-haves? Make a Todo list. <br>
        Upon completion of a task you can choose to either cross the todo off the list, <br> 
        or to completely delete it from the list. 
    </p>
    </section>
    <section>
        <article>
            <TodoForm/>
                {#each $todos as todo}  <!-- $ in front of todos to access the data directly --> 
                    <Todo todo={todo} index={todo.id} />
                {/each} 
        </article>
    </section>
    <section>
        <p class="link">Visit <a href="https://svelte.dev/">svelte.dev</a> to learn more about Svelte!</p>
    </section>
</main>



<style>

header{
    margin-bottom: 50px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}

:root {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

p{
    margin-bottom: 50px;
}

main {
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
}

article{
    background-color: beige;
    padding: 10px 10px 10px 10px;
    border: 1px solid gray;
}

.link {
    margin-top: 50px;
    margin-bottom: 0px;
}
    </style>
