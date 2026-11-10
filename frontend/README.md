# TeamFlow Frontend

This folder contains the React frontend application for the TeamFlow project.

## Responsibilities

- User interface development
- Reusable React components
- Frontend routing and navigation
- API integration
- Form validation
- Shared layouts and styling

## Technology Stack

- React
- TypeScript
- Vite
- React Router
- Axios
- CSS
- HTML

## Project Structure

```text
src/
├── components/   # Reusable UI components
├── layouts/      # Shared application layouts
├── pages/        # Login and project pages
├── routes/       # Application route configuration
├── services/     # API service configuration
├── styles/       # Global styles
├── types/        # TypeScript types
└── utils/        # Utility functions
```

## Setup Instructions

1. Open a terminal in the `frontend` folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create the local environment file:

   **Windows CMD:**
   ```cmd
   copy .env.example .env
   ```

4. Configure the backend API URL in `.env`:

   ```env
   VITE_API_BASE_URL=http://127.0.0.1:8000
   ```

   Replace this value with the backend URL provided by the team.

5. Start the development server:

   ```bash
   npm run dev
   ```

## Available Routes

| Route | Description |
|---|---|
| `/` | Login page |
| `/projects` | Project list page |

## Available Scripts

- `npm run dev` – Start the development server.
- `npm run lint` – Run ESLint checks.
- `npm run build` – Compile TypeScript and create a production build.

## API Integration Status

- Axios API client configuration is available.
- API base URL is configurable through environment variables.
- Login API integration is pending backend API details.
- Project list API integration is pending backend API details.

Backend endpoint paths, request payloads, and response structures will be added after confirmation with the backend team.

## Development Notes

- Do not commit local `.env` files.
- Keep `.env.example` updated when environment variables change.
- Use reusable components and shared layouts.
- Follow the team's Git branching and pull request workflow.