# Contribute guide
Before all, you need download and install the latests versions of:

- Node.js: https://nodejs.org/en/download/
- Git: https://git-scm.com/downloads
- Gulp-CLI (globally for gulp commands): https://www.npmjs.com/package/gulp-cli

## Setup dependencies
In the root of the project directory, enter that command in the console:

```
npm install
```

That install all project dependencies for CSS, JS and images building.

Now you need install all external libraries (/libs), do it with:

```
gulp bower
```

That download on /libs folder all dependencies of bower.json file.

Finally, you have all Gulp commands for building here:

Command | Do 
------------ | ------------
**gulp sass**  | Compile SASS 
**gulp watch** | Watch if one of the /components files has changed
**gulp bower** | Install other dependencies on /libs folder
**gulp build** | Build, minify and concat all CSS, JS and image files and allocate it under /dist folder
