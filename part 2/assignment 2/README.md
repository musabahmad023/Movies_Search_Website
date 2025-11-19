# Assignment 2 (Part 2)

## Short description

This app provides a minimal UI where a user can submit a simple form and view a github user profile. The project is built with React and Vite and focuses on component structure, styling, and local state handling.

## What is included

- `index.html` — App entry point
- `package.json`, `vite.config.js`, `eslint.config.js` — project tooling and scripts
- `src/main.jsx` — React application bootstrap
- `src/App.jsx` — Main app component that composes the pages and components
- `src/components/UserForm.jsx` — Form component for entering user details
- `src/components/UserProfile.jsx` — Component that displays submitted user profile data
- `src/index.css`, `src/App.css` — Global and app styles

## Setup and run (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Start development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
npm run preview
```

4. Lint the codebase

```powershell
npm run lint
```

## Components (what we implemented)

- `UserForm.jsx` — Controlled component that collects user information (name, email, other fields). The form validates required fields client-side and passes data up via props/events.

- `UserProfile.jsx` — Receives user data as props and renders a simple profile card. Handles missing fields gracefully.

- `App.jsx` — Hosts the two components and manages the top-level state for the submitted user data. Responsible for layout and passing handlers/props.

## Notes about implementation

- The project uses a local component structure; no external APIs are required for Assignment 2.
- Styling is lightweight and located in `src/index.css` and `src/App.css`.
- State is kept in React component state; we did not add persistence for this assignment.

## Contributors (team-written)

- Musab — I set up the project scaffold, configured Vite and ESLint, and implemented `App.jsx` and app-level wiring.
- Fashi — I implemented `UserForm.jsx`, including controlled inputs and client-side validation, and added styling updates in CSS.
- Hussain — I implemented `UserProfile.jsx`, handled the presentation layer, and refined responsive layout in the styles.

---
