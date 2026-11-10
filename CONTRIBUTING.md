
# TeamFlow Contribution Guidelines

## 1. Branching Strategy

We follow a feature branch workflow.

- main: Stable production code.
- develop: Integration branch.
- feature/*: New feature development.
- fix/*: Bug fixes.
- docs/*: Documentation updates.
- refactor/*: Code improvements.

Example:

git checkout develop
git pull origin develop
git checkout -b feature/user-login

## 2. Commit Message Convention

Follow conventional commit messages.

- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting changes
- refactor: Code restructuring
- test: Adding tests
- chore: Configuration and maintenance

Examples:

feat: add user authentication
fix: resolve login error
docs: update development guide
chore: update gitignore

## 3. Pull Request Guidelines

1. Create a feature branch.
2. Implement your changes.
3. Run relevant tests.
4. Push your branch.
5. Open a Pull Request against develop.
6. Describe your changes.
7. Request at least one teammate review.
8. Merge after approval and successful checks.

## 4. Code Quality

- Never commit environment files containing secrets.
- Follow Python and JavaScript coding standards.
- Write tests for new functionality.
- Update documentation when necessary.
- Keep commits small and meaningful.

## 5. Development Setup

Refer to docs/SETUP.md
for backend and frontend setup instructions.
