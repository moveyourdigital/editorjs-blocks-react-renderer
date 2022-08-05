# How to publish a new version?

1. Run tests (if there are any)
2. Update `version` in `package.json` according to Semver
3. Create a git tag according to Semver
4. Push the package to Github
5. Push the package to npm `npm publish`
6. Create release notes for every update

Source: [How to publish packages to npm (the way the industry does things)](https://zellwk.com/blog/publish-to-npm/)