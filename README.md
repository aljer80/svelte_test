# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project
Start building a SvelteKit app by running npm create. This will scaffold a new project in the directory of your choice, asking you if you'd like to set up some basic tooling. The subsequent commands will then install its dependencies and start a server on "localhost:5173":

npm create svelte@latest my-app
cd my-app
npm install
npm run dev

# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app

## Developing

Once you've created a project and installed dependencies with `npm install` , start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
