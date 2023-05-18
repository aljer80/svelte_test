<script>
    import {addTodo} from '../stores/todoStore.js';

    let todo = '';

    const handleSubmit = () => {
        addTodo(todo);
        todo = '';
        console.log("submitting");
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div>
        <label for="todo">Todo</label>
        <input type="text" bind:value={todo} name="todo" placeholder="Write your todo here"/>
    </div>
    <button type="submit">Submit</button>
    
</form>


<style>
    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 2;
    }

    button {
        background: rgb(45, 130, 241);
        border: none;
        color: white;
        padding: 5px 10px;
        margin-top: 5px;
        margin-bottom: 15px;
        width: 100%;
        text-align: center;
        text-decoration: none;
        display: inline-block; 
        font-size:small;
    }

    button:hover {
        background: rgb(37, 103, 190);
        border: none;
        color: white;
        padding: 5px 10px;
        width: 100%;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: small;
    }

    label {
        font-size: 24px;
        font-weight: bold;
        color: rgb(43, 43, 43);
        margin: top15px;
    }

    form {
        padding-bottom: 2;
    }
    </style>

