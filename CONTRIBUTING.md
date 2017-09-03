# Contribute guide
Before all, you need download and install the latests versions of:

- Install Node.js: https://nodejs.org/en/download/
- Install Git: https://git-scm.com/downloads
- And clone the repository: `git clone https://github.com/Social-chan/Bento.git`

## Setup dependencies
In the root of the project directory, enter that command in the console:

```
npm install
```

So you install all project dependencies for compiling SASS and build for production.

## Setup docs
Bento docs site is created with [VueJS](https://vuejs.org/) and Webpack, so you need:

- Clone docs repo: `https://github.com/Social-chan/bento-docs.git`
- Finally, for more info see README.md or [visit the repo](https://github.com/Social-chan/bento-docs)

## Build commands

Command | Do
------------ | ------------
`npm run build`  | It runs build-clean, build-sass and post-build
`npm run watch` | Watch if one of the scss files has changed
`npm run preversion` | It runs automatically before run `npm version major|minor|patch`.

## Branches and repos
Framework and docs repos share...

- Master branch is for the last version of the project.
- Stale versions is under different branches for it maintenance.

And also devs branch of the framework repo is used for make PRs (different from docs repository).
