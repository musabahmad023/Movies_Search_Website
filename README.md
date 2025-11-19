
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



## APIs Used & Endpoints

- **OpenRouter / OpenAI-compatible (AI assistant)**
	- Endpoint: `POST https://openrouter.ai/api/v1/chat/completions`
	- Used by: `src/services/ai.js` via `askAI(prompt)`
	- Notes: the client reads the API key from `import.meta.env.VITE_API_URL` (set this in a local `.env` file). The code calls the `openai/gpt-oss-20b:free` model by default.

- **Firebase / Firestore (optional, feedback storage)**
	- Used by: `src/services/firebase.js`
	- Collection: `feedback` (written by `addFeedback(name, message)`)
	- Notes: the file currently contains a Firebase config object. Replace it with your own Firebase project's config or update the file to read values from environment variables before enabling Firestore features.

- **Local dataset**
	- Path: `src/data/movies.json`
	- Usage: static dataset used for browsing and search inside the app (no external network call).

## Setup & Run Instructions

1. Install dependencies

```powershell
npm install
```

2. (Optional) Add API keys / configuration

- Create a `.env` or `.env.local` file in the project root to provide your AI API key for the assistant. Example:

```text
# .env.local
VITE_API_URL=your_openrouter_api_key_here
```

- If you want to enable Firebase features, replace the `firebaseConfig` object in `src/services/firebase.js` with your project's credentials from the Firebase console (or modify the file to read from env vars).

3. Start the dev server

```powershell
npm run dev
```

4. Build for production

```powershell
npm run build
npm run preview
```

5. Linting

```powershell
npm run lint
```

## Project APIs (helpers in code)

- `askAI(prompt)` — in `src/services/ai.js` — sends the prompt to the OpenRouter chat completions endpoint and returns the assistant's reply.
- `addFeedback(name, message)` — in `src/services/firebase.js` — adds a document to the `feedback` collection in Firestore.

## Contributors & Member Contributions

```powershell
git shortlog -sn --no-merges
```

Template (replace with real names and contributions):

- Musab Ahmad (`fashi ud din`) — Project lead, React app structure,AI integration (`src/services/ai.js`), `AiChat.jsx` component.

- Muhammad Hussain  — Search implementation, `MovieCard` layout, styling adjustments.

- musab Ahmad — Firebase integration, feedback form (`FeedbackForm.jsx`). ,routing, components (`Header`, `MovieGrid`, `MoviePage`)
---
