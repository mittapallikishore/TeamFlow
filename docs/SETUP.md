TeamFlow - Local Development Setup Guide
1. Introduction

This guide explains how backend and frontend contributors can configure and run the TeamFlow project locally.

2. Prerequisites

Install the following tools:

Git
Python 3.11 or the version agreed by the team
Node.js and npm
Code editor (VS Code recommended)
3. Clone the Repository

Open a terminal and run:

git clone https://github.com/mittapallikishore/TeamFlow.git

Navigate into the project:

cd TeamFlow

4. Backend Setup (Python / Django)
Step 1: Navigate to backend

cd backend

Step 2: Create virtual environment

python -m venv venv

Step 3: Activate virtual environment

Windows:

venv\Scripts\activate

Linux / macOS:

source venv/bin/activate

Step 4: Install dependencies

pip install -r requirements.txt

Step 5: Configure environment variables

Copy .env.example to .env.

Update the local configuration values as required.

Step 6: Run database migrations

python manage.py migrate

Step 7: Start Django server

python manage.py runserver

Backend default address:

http://127.0.0.1:8000

5. Frontend Setup (React)
Step 1: Open another terminal

Navigate to the frontend folder from the repository root:

cd frontend

Step 2: Install dependencies

npm install

Step 3: Configure environment variables

Copy .env.example to .env.

Configure the backend API URL.

Step 4: Start frontend development server

npm run dev

Frontend default address:

http://localhost:5173

6. Verification Commands
Backend

Run:

python manage.py check

python manage.py test

Frontend

Run:

npm run lint

npm test

These commands must match the scripts configured in the actual project.

7. Git Contribution Workflow
Pull the latest agreed development branch.
Create a feature branch.
Make changes.
Run the relevant tests.
Commit changes.
Push your branch.
Open a Pull Request.
Request team review.

Refer to docs/GIT_WORKFLOW.md for detailed Git conventions.

8. Security Guidelines
Never commit real .env files.
Never expose passwords or API keys.
Use .env.example as a template.
Keep local dependencies and generated files out of Git.
9. Troubleshooting
If Python dependencies fail, verify your Python version.
If npm installation fails, verify your Node.js version.
If the backend cannot connect, check database and environment settings.
If the frontend cannot reach the backend, verify the API URL.
Ask the team for help if setup problems continue.
10. Contributor Verification

At least one backend contributor and one frontend contributor should independently follow this guide and confirm successful local setup.
