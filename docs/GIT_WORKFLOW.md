# TeamFlow Git Branching and Pull Request Workflow

## 1. Purpose
This document defines Git branching, commit-message and pull-request conventions for TeamFlow contributors.

## 2. Branching Strategy
TeamFlow follows a main-based feature branch workflow.

- main: Shared stable branch and base for development.
- feature/*: New feature development.
- fix/*: Bug fixes.
- docs/*: Documentation updates.
- refactor/*: Code improvements.

All working branches must be created from the latest main branch.

## 3. Branch Creation
Update the local main branch:

    git checkout main
    git pull origin main

Create a working branch:

    git checkout -b feature/user-login

Examples:
- feature/dashboard
- fix/login-validation
- docs/update-setup-guide
- refactor/backend-structure

## 4. Commit Message Convention
Use the format:

    type: short description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Tests
- chore: Configuration and maintenance

Examples:
- feat: add user registration
- fix: resolve login validation
- docs: update setup guide
- chore: update gitignore

## 5. Push Changes

    git add .
    git commit -m "feat: add user registration"
    git push -u origin feature/user-login

Use the actual branch name and commit message for your task.

## 6. Pull Request Process
1. Create a working branch from main.
2. Implement the required changes.
3. Run relevant checks.
4. Commit using meaningful messages.
5. Push the branch to GitHub.
6. Create a Pull Request targeting main.
7. Describe the changes and testing performed.
8. Request at least one teammate review.
9. Address review comments.
10. Ensure required automated checks pass.
11. Merge after approval and successful checks.

## 7. Pull Request Requirements
Every PR should include:
- Clear title.
- Description of changes.
- Related issue number, if applicable.
- Testing details.
- Screenshots for UI changes, when applicable.

## 8. Security Rules
- Never commit real .env files.
- Never upload passwords, API keys or access tokens.
- Use .env.example for safe configuration templates.
- Verify sensitive files are excluded from Git.
- Report exposed credentials immediately and rotate them.

## 9. Team Collaboration
- Use Pull Requests to integrate changes into main.
- Avoid direct pushes to main.
- Pull the latest changes before creating a working branch.
- Keep commits small and meaningful.
- Communicate merge conflicts with teammates.
- Review code before merging.

## 10. Code Quality
Backend and frontend contributors should run agreed linting and testing commands before submitting PRs.

Application-specific commands will be finalized when application code and dependency manifests are available.

## 11. Review and Maintenance
The team should periodically review and update this workflow as development practices change.
