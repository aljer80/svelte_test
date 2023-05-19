## What the project does
Creating a todo list using Svelte kit. 
It's useful if you want to try Svelte. Creating this to do-list you get to try and experience what makes Svelte nice to work with. Svelte kit comes with Veet for its bundling, which makes it fast. Svelte kit also has built in routing. 


## How to use the app
You can create a Todo list. Add a todo by typing it in the input field and clicking the submit button (or hit enter). The todo is added to a list. You can toggle the todo by checking/unchecking the box. Consequently,upon completion of a task you can choose to either cross the todo off the list, or to completely delete it from the list. You delete a todo by clicking the delete button. 


## Next steps
I would save the todos to localStorage or a database and write logic that prevents you from submitting an empty to do-item to the list. 
Maybe I would also add an edit-button so one doesn't have to delete and rewrite a todo if misspelled. Another feature could be the ability to move todos up and down in the list. 


## create-svelte
Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project
Start building a SvelteKit app by running npm create. This will scaffold a new project in the directory of your choice, asking you if you'd like to set up some basic tooling (choose skeleton project and javascript. You can also choose eslent for coding and pretty for formatting if you want to). 
The subsequent commands will then install its dependencies and start a server on "localhost:5173":

npm create svelte@latest my-app
cd my-app
npm install
npm run dev

## create a new project in the current directory
npm create svelte@latest


## Developing
Once you've created a project and installed dependencies with `npm install` , start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Files you need to create:
Create a components folder i src and add the files [Todo.svelte](./src/components/Todo.svelte) and [TodoForm.svelte](./src/components/TodoForm.svelte)
Create a stores folder i src and add the file [todoStore.js](./src/stores/todoStore.js)
    

## Building
To create a production version of your app:
```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

