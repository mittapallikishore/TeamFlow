TeamFlow Git Branching and Pull Request Workflow
1. Purpose

This document defines the Git branching, commit message and pull request conventions for TeamFlow contributors.

2. Branching Strategy
main: Stable production-ready code.
develop: Shared development branch, if adopted by the team.
feature/feature-name: New feature development.
bugfix/bug-name: Bug fixes.
hotfix/issue-name: Urgent production fixes.

All contributors must follow the branch strategy agreed by the team.

3. Branch Creation

Create feature branches from the agreed development branch.

Examples:

feature/user-login
feature/dashboard
bugfix/login-validation
hotfix/payment-error
4. Commit Message Convention

Use the following format:

type: short description

Examples:

feat: add user registration
fix: resolve login issue
docs: update setup guide
test: add backend API tests
chore: update dependencies
5. Pull Request Process
Create a feature or bugfix branch.
Make the required changes.
Commit changes using meaningful messages.
Push the branch to GitHub.
Create a Pull Request against the agreed target branch.
Describe the changes and their purpose.
Request a review from another contributor.
Resolve requested changes.
Ensure automated checks pass.
Merge after approval.
6. Pull Request Requirements

Every PR should include:

Clear title.
Description of changes.
Related issue number, if applicable.
Testing details.
Screenshots for UI changes, when applicable.
7. Security Rules
Never commit .env files.
Never upload passwords, API keys or access tokens.
Use .env.example for safe configuration templates.
Report accidentally exposed credentials immediately and rotate them.
8. Team Collaboration
Avoid direct pushes to protected branches.
Keep commits small and meaningful.
Pull the latest changes before starting new work.
Communicate merge conflicts with teammates.
Review code before merging.
9. Code Quality

Backend and frontend contributors must run the agreed linting and testing commands before submitting pull requests.

10. Review and Maintenance

The team should review this workflow periodically and update it when development practices change.
