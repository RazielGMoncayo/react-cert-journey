# React Cert Journey

A personal learning project to build solid foundations in modern web development, working toward the React Junior certification by [certificates.dev](https://certificates.dev/react).

## About

This project grows phase by phase — starting from JavaScript fundamentals all the way to a full stack Task Manager app. Each phase builds on the previous one, applying concepts directly to the project rather than isolated exercises.

## Stack

- React + Vite
- React Router DOM
- localStorage (temporary persistence before backend)
- CSS (plain, then Tailwind in Phase 4)

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

## Project Structure

```
react-cert-journey/
├── js-fundamentals/       # Phase 0 exercises
├── frontend/              # React app (Vite)
│   └── src/
│       ├── components/    # Reusable components
│       ├── pages/         # Page-level components
│       ├── App.jsx
│       └── main.jsx
└── README.md
```

## React Junior Certification Topics

The following topics are required for the React Junior certification. This project covers all of them.

### JavaScript

- [x] let / const
- [x] Arrow functions
- [x] Spread syntax
- [x] Rest parameters
- [x] Destructuring
- [x] Array instance methods
- [x] Modules — export / import
- [x] Promise / async / await

### Core Concepts

- [x] createRoot
- [x] createElement
- [x] StrictMode
- [x] Add React to an existing project

### JSX

- [x] Writing markup with JSX
- [x] Fragment
- [x] JavaScript in JSX with curly braces
- [x] Rendering lists
- [x] Conditional rendering

### Components

- [x] Your first component
- [x] Importing and exporting components
- [x] Passing props to a component

### Event Handling

- [x] Responding to events
- [x] React event object
- [x] input / select elements
- [x] Controlled and uncontrolled components

### State

- [x] State: a component's memory
- [x] Render and commit
- [x] State as a snapshot
- [x] Queueing a series of state updates
- [x] Updating objects in state
- [x] Updating arrays in state
- [x] useState

### Hooks

- [x] useEffect
- [x] useRef

### React Router

- [x] Feature overview
- [x] Routing
- [x] Link
- [x] useNavigate
- [x] useParams
- [x] useSearchParams

## Phases

- **Phase 0 — JavaScript Fundamentals** `completed`
  let/const, arrow functions, destructuring, spread/rest, modules, array methods, promises & async/await

- **Phase 1 — React + CSS** `in progress`
  JSX, components, props, events, state, lists, forms, hooks, React Router `done`  
  Plain CSS styling `pending`

- **Phase 2 — React + TypeScript**
  Types, interfaces, typed events and state

- **Phase 3 — Hooks**
  useContext, custom hooks

- **Phase 4 — Scaling the project**
  Global state, Tailwind CSS

- **Phase 5 — Backend**
  REST API with Node.js + Express

- **Phase 6 — Database**
  PostgreSQL + Prisma ORM

- **Phase 7 — Auth**
  Login, register, JWT