# Contribute guide
Before all, you need download and install the latests versions of:

- Install Node.js: https://nodejs.org/en/download/
- Install Git: https://git-scm.com/downloads
- And clone the repository: `git clone https://github.com/Social-chan/Tadaima.git`

## Setup dependencies
In the root of the project directory, enter that command in the console:

```
npm install
```

So you install all project dependencies for compiling SASS and build for production.

## Setup docs
Tadaima docs pages is created with [Jekyll](https://jekyllrb.com/), so you need:

- Install Ruby (Windows, Linux or Mac): https://www.ruby-lang.org/es/downloads/
- Finally, go to docs folder and execute `bundle install` (remember that you need [Bundler](http://bundler.io/) gem in your Ruby installation)

## Build commands

Command | Do 
------------ | ------------
**npm run build**  | It runs build-clean, build-sass and post-build 
**npm run watch** | Watch if one of the scss files has changed
**npm run docs** | Copy files to docs folder (necessary for jekyll)