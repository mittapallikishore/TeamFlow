# TeamFlow - Local Development Setup Guide

## 1. Current status

The TeamFlow application source code has not been added yet.
This guide describes the planned local setup. Application commands
become executable after the backend and frontend projects are initialized.

## 2. Planned prerequisites

- Git
- Python version agreed by the team
- Node.js and npm
- VS Code or another code editor

## 3. Clone the repository

    git clone https://github.com/mittapallikishore/TeamFlow.git
    cd TeamFlow

## 4. Planned backend setup (Django)

After the Django application is added:

    cd backend
    python -m venv venv

Windows PowerShell:

    .\venv\Scripts\Activate.ps1

Linux/macOS:

    source venv/bin/activate

Install dependencies after `requirements.txt` is added:

    pip install -r requirements.txt

Configure local environment variables by copying `.env.example` to `.env`.
Run migrations and start the server after `manage.py` is added:

    python manage.py migrate
    python manage.py runserver

Expected local address: http://127.0.0.1:8000

## 5. Planned frontend setup (React)

After the React application and `package.json` are added:

    cd frontend
    npm install

Copy `.env.example` to `.env`, then configure the backend API URL.

Run the frontend using the script agreed by the team, for example:

    npm run dev

Expected local address for a Vite setup: http://localhost:5173

## 6. Planned quality checks

Backend checks, once configured:

    python manage.py check
    python manage.py test

Frontend checks, once scripts are configured:

    npm run lint
    npm test

The actual commands must match the scripts and test tools selected by the developers.

## 7. Git contribution workflow

1. Pull the latest agreed base branch.
2. Create a feature, bugfix, or documentation branch.
3. Make focused changes.
4. Run the available checks.
5. Commit using the agreed commit convention.
6. Push the branch and open a pull request.
7. Obtain the required review and passing CI checks before merging.

See `GIT_WORKFLOW.md` for details.

## 8. Security guidelines

- Never commit real `.env` files.
- Never expose passwords, API keys, or access tokens.
- Use `.env.example` as a safe configuration template.
- Keep generated dependencies and build output out of Git.
- Rotate credentials immediately if they are accidentally exposed.

## 9. Contributor verification

Before application development begins, contributors should verify repository access,
branch workflow, documentation, and CI checks.

After the application is initialized, one backend contributor and one frontend
contributor should independently complete their respective local setup and report
any issues.
