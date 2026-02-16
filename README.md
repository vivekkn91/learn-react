# React Starter — Learn by Building

This repository is a compact, beginner-friendly React starter. It includes small, focused example components grouped as modules so new learners can explore, edit, and extend each piece independently.

Quick start

1. Install deps:

```bash
npm install
```

2. Start the dev server:

```bash
npm start
```

Open http://localhost:3000 in your browser.

What this project contains

- `src/components/` — modular example components:
	- `NavBar` — simple navigation bar
	- `Counter` — stateful counter using `useState`
	- `TodoList` — add/remove list items (practice lists and keys)
	- `PropsExample` — shows how to pass props to components
	- `FormExample` — controlled input and form submission
- `src/App.js` — composes the examples into a readable layout
- `src/index.js` — app entry

How the modules help you learn

- Each component lives in `src/components/` so you can open a single file and understand one concept at a time.
- There's a barrel file `src/components/index.js` that demonstrates how to group and export modules; you can import from a single path: `import { Counter } from './components'`.

Suggested beginner exercises

- Edit `Counter` to add a step input (increase/decrease by a custom amount).
- Extend `TodoList` to persist items to `localStorage` so they survive page reloads.
- Add a detail view: clicking a list item shows more information in a modal.
- Add a theme toggle (light/dark) using React Context.
- Replace the static `NavBar` links with React Router and build multiple routes.

Notes & tips

- Use the browser console to see warnings (React gives helpful hints).
- Try small changes and save — the dev server reloads automatically.
- When you’re ready, run `npm run build` to create a production bundle.

Want me to do more?

- I can wire up `localStorage` persistence, add React Router, or commit these changes to a new branch and open a PR. Tell me which next step you want.
