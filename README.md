# Task Manager App

A production-ready React task manager built with Vite, optimized for speed, usability, and deployability.

This project is designed to demonstrate strong frontend engineering skills for interview-ready portfolios:

- Modern React architecture with clean component composition
- Persistent local data storage for offline-ready behavior
- Filtered task views with clear user feedback
- GitHub Pages deployment for a fully hosted static site

---

## Why this project matters

This app is ideal for FAANG-style interviews because it showcases:

- **User-centered design**: intuitive task entry, date handling, priorities, and empty-state messaging
- **State management**: derived filtering state and local storage synchronization
- **Deployment readiness**: Vite build optimization and GitHub Pages hosting
- **Code quality**: clean structure, reusable components, and clear data flow

---

## Core features

- Add a task with title, due date, and priority
- Active / completed / all task filters with live counts
- Toggle task completion and delete tasks
- Local storage persistence under the key `taskmanagerappContext`
- Graceful empty state when no tasks exist
- GitHub Pages deployment support with `npm run deploy`

---

## Tech stack

- React 19
- Vite
- JavaScript
- CSS modules / scoped styles
- GitHub Pages

---

## Running locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Deployment

This project is configured for GitHub Pages deployment.

Run:

```bash
npm run deploy
```

Ensure `vite.config.js` includes the correct `base` path for your repository, for example:

```js
export default defineConfig({
  base: '/task-manager/',
  plugins: [react()]
})
```

---

## What I learned

- building a polished React UI with Vite
- handling browser storage and app initialization
- writing deploy scripts for static hosting
- designing an app focused on real user workflows

---

## Future improvements

- task edit flow
- backend API integration
- authentication and multi-user support
- drag-and-drop task ordering
- responsive mobile enhancements
