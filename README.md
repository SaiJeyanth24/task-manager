# Task Manager App

This React task manager is a polished, browser-based productivity tool built with Vite. It is designed to show how a modern single-page app can combine intuitive UX, responsive layout, and persistent local storage without adding backend complexity.

The app lets users create tasks with due dates and priority labels, then filter those tasks by all, active, or completed states. It keeps task data locally using `localStorage`, so the list remains available if the page is refreshed or the browser is reopened.

## What this project does

This task manager supports the full task lifecycle for a small productivity workflow. Users can:

- Add a new task with text, a due date, and a priority level
- Mark tasks as completed or return them to active status
- Remove tasks that are no longer needed
- Filter the view by all tasks, active tasks, or completed tasks
- See live counts for each filter category
- View a helpful empty state when there are no tasks

The UI is responsive and works on desktop, tablet, and mobile screen sizes. Form controls, filter buttons, and task cards adapt to smaller widths so the app remains easy to use on phones and tablets.

## Why this project is useful

This app is a good example of a practical frontend project because it combines several important concepts:

- Component-based structure with reusable UI pieces
- Controlled form inputs and user interactions in React
- Derived state for filtering and task counts
- Browser storage persistence for a better offline-ready experience
- Build and deployment configuration for static hosting

It also demonstrates good development practices by separating layout and presentation into CSS files, using semantic HTML, and keeping data updates predictable.

## Run the app locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build a production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project includes a deploy script for GitHub Pages.

Publish the built site with:

```bash
npm run deploy
```

If your repository is hosted under a subpath, set the `base` option in `vite.config.js` to the correct repo name.

## Tech stack

- React 19
- Vite
- JavaScript
- CSS for styling and responsive layout
- GitHub Pages deployment support

## Future improvements

Potential enhancements include task editing, backend sync, drag-and-drop ordering, and user authentication. These additions would extend the app into a more complete task management experience.
