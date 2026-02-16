import React from 'react';
import './index.css';
import { NavBar, Counter, TodoList, PropsExample, FormExample } from './components';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>React Starter • Learn by Building</h1>
        <p className="lead">Interactive examples and small ideas to get started quickly.</p>
      </header>
      <NavBar />
      <main className="container">
        <section className="card">
          <h2>Counter</h2>
          <Counter />
        </section>

        <section className="card">
          <h2>Todo / Topics</h2>
          <TodoList />
        </section>

        <section className="card">
          <h2>Props</h2>
          <PropsExample />
        </section>

        <section className="card">
          <h2>Forms</h2>
          <FormExample />
        </section>

        <section className="card">
          <h2>Starter Ideas</h2>
          <ul>
            <li>Build a small todo app with local state.</li>
            <li>Create a notes app and store items in localStorage.</li>
            <li>Fetch data from a public API and display results.</li>
            <li>Make a theme toggle (light/dark) using Context.</li>
            <li>Try converting class components to function components with hooks.</li>
          </ul>
        </section>
      </main>
      <footer className="footer">Happy learning — fork and customize this starter.</footer>
    </div>
  );
}
