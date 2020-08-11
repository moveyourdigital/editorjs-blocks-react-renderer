# Contributing to EditorJS Blocks React Renderer

The following is a set of guidelines for contributing to this repository.

## Code of Conduct
We expect participants to adhere to the following set of rules.

## Open Development
All work on this repository happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

## Branch Organization
We maintain master branch for development of new features. If you want to push a bugfix of the last version, please open a pull request against the last tag version commit and another to the master, if needed.

## Bugs
We are using GitHub Issues for bug tracking. Please, provide reproduction steps for the bug. Before that, make sure the bug is not already reported in the Issues section.

## Proposing a Change
If you want to introduce a new renderer or augment the public API you are free to either open a Pull Request with the change or an issue, which will be opened for further discussions.

If your change breaks the current public API, our recommendation is to start a thread in a new Issue.

## Your First Pull Request
Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)


## Sending a Pull Request
The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1) Fork the repository and create your branch from the correct branch/tag.
2) Run `npm install` in the repository root.
3) Add or change tests as needed.
4) Ensure the test suite passes with `npm test`. Tip: `npm run test:watch` development.
5) Run `npm test -- -u` to update the jest snapshots and commit these changes as well (if there are any updates).
6) Run `npm run list && npm run format` and commit any changes.
