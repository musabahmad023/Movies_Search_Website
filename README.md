
# Movies Search Website

A responsive React application built with Vite that lets users browse and search a collection of movies. It includes client-side routing, a simple Firebase integration for optional features, and an AI chat helper for conversational search.

**Live Demo:** (local) run the dev server and open http://localhost:5173

**Stack:** React, Vite, Tailwind (optional), React Router, Firebase

**Key Features**
- **Search:** Client-side movie search and filtering using local `movies.json`.
- **Movie Pages:** Individual movie detail pages using React Router.
- **AI Chat:** Lightweight AI assistant UI in `src/components/AiChat.jsx` (service at `src/services/ai.js`).
- **Responsive UI:** Grid/list views with `MovieGrid` and `MovieCard` components.

## Prerequisites
- Node.js (LTS recommended)
- npm (bundled with Node)

## Install
Open a terminal in the project root and run:

```powershell
npm install
```

## Available Scripts
- `npm run dev` — Start the Vite dev server
- `npm run build` — Build the production bundle
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint across the codebase

Example (PowerShell):

```powershell
npm run dev
```

## Project Structure (important files)
- `index.html` — App entry HTML
- `src/main.jsx` — React entry point
- `src/App.jsx` — Top-level app component
- `src/components/` — All React components (e.g. `MovieGrid.jsx`, `MovieCard.jsx`, `MoviePage.jsx`, `AiChat.jsx`)
- `src/data/movies.json` — Local movie dataset used for browsing/searching
- `src/services/firebase.js` — Firebase configuration and helpers
- `src/services/ai.js` — AI helper integration used by `AiChat.jsx`

## Notes & Tips
- The app ships with a local dataset in `src/data/movies.json` — you can replace or extend it as needed.
- If you want to enable Firebase features, add your Firebase config in `src/services/firebase.js` and follow Firebase setup docs.
- Tailwind is included as a dependency; adapt or replace styling in `src/assets/custom.css` and `src/index.css`.

## Contributing
Feel free to open issues or submit pull requests. For quick changes:

```powershell
git checkout -b my-feature
npm run dev
```

## License
This repository does not include a formal license. Add one if you plan to publish or share widely.

---

If you'd like, I can also:
- add a small screenshot or GIF to `README.md`
- include example env file and Firebase setup steps
- add a `CONTRIBUTING.md` with development guidelines

Tell me which of these you'd like next.
