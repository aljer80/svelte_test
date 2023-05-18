<script>
    import {addTodo} from '../stores/todoStore.js';

    let todo = '';  //declares the variable todo and initializes it as an empty string.

    const handleSubmit = () => {
        addTodo(todo);
        todo = '';
    } // this function is called when the form is submitted.

</script>


<!-- The preventDefault modifier is used to prevent the default form submission behavior, 
which would cause the page to refresh. -->
<form on:submit|preventDefault={handleSubmit}> <!-- prevents the page from refreshing-->
    <div>
        <label for="todo">Todo</label>
        
        <input type="text" 
        bind:value={todo} 
        name="todo" 
        placeholder="Write your todo here"
        /> <!-- The <input> element is bound to the todo variable using the bind:value directive. 
                This means that when the user types into the input field, the value of todo will be updated accordingly.-->
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

