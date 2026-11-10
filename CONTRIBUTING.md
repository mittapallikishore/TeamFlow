# TeamFlow Contribution Guidelines

## 1. Overview
TeamFlow follows a main-based feature branch workflow. Backend and frontend contributors must follow the same contribution process.

## 2. Branching Strategy
Use main as the base branch.

Branch naming:
- feature/*: New features
- fix/*: Bug fixes
- docs/*: Documentation updates
- refactor/*: Code improvements

Example:

    git checkout main
    git pull origin main
    git checkout -b feature/user-login

## 3. Commit Message Convention
Use the following types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Tests
- chore: Configuration and maintenance

Examples:

    feat: add user authentication
    fix: resolve login error
    docs: update development guide
    chore: update gitignore

## 4. Pull Request Guidelines
1. Create a working branch from the latest main.
2. Implement the required changes.
3. Run relevant checks.
4. Commit using meaningful messages.
5. Push the working branch to GitHub.
6. Open a Pull Request targeting main.
7. Provide a clear description and testing details.
8. Request at least one teammate review.
9. Address review feedback.
10. Merge after approval and successful required checks.

## 5. Code Quality
- Never commit environment files containing secrets.
- Follow Python and JavaScript coding standards.
- Write tests for new functionality.
- Update documentation when necessary.
- Keep commits small and meaningful.
- Run agreed linting and testing commands when available.

## 6. Security
- Do not commit passwords, API keys or access tokens.
- Use the provided .env.example templates.
- Keep local environment files excluded from Git.
- Report exposed credentials immediately.

## 7. Development Setup
Refer to docs/SETUP.md for backend and frontend setup instructions.

## 8. Additional Guidance
For detailed branch, commit and Pull Request procedures, refer to docs/GIT_WORKFLOW.md.
