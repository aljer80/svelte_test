<script>
    let todo = ''
    
    const handleSubmit = () => {
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
        background: rgb(170, 0, 0);
        border: none;
        color: white;
        padding: 5px 10px;
        margin-top: 5px;
        width: 100%;
        text-align: center;
        text-decoration: none;
        display: inline-block; 
        font-size: small;
    }

    button:hover {
        background: rgb(129, 0, 0);
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
        font-weight: bold;
        color: rgb(43, 43, 43);
    }

    form {
        padding-bottom: 2;
    }
    </style>

