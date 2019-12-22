# Webpack Starter-Kit
This is my personal Webpack configuration, I've created for different front-end projects. Don't hesitate to improve its configuration and feel free use it for your projects.

## The aim of this project 🚀
Solve problems for beginner front-end developers. Thanks to that any person can build small and medium projects using different technologies and tools. At more everybody can develop this project, change configuration and set up for itself project.

## What does the configuration handles?

| For development and production environment | For production environment only |
| ----------- | ----------- |
| it accepts one entry point for the main js file |
| it compiles sass/scss to the css file |
| it adds prefix to the css properties |
| it compiles es6 to the syntax es5 |
| it loads the different graphic files |
| it sets up template of main html file |
| it fire up devServer |
| it builds source-map |
| | it compresses css files to small size |
| | it compresses js files to small size |
| | it addes polyfill patch for older browsers |
| | it compresses js files to small size |
| | it copies files from one to next folder depend on files|
| | it compresses graphic files to small size |
| | it uses caching files |

## What I've used (recommended by webpack)
- Webpack v4
- Webpack-cli
- clean-webpack-plugin
- html-webpack-plugin
- copy-webpack-plugin
- babel-loader
- autoprefixer 
- @babel/preset-env
- babel/core
- css-loader
- file-loader
- image-webpack-loader
- mini-css-extract-plugin
- node-sass
- postcss-loader
- sass-loader
- style-loader
- webpack-dev-server
- @babel/polyfill
- core-js 

## What you should do first
- [x] Clone Repo
- [x] Run npm install in the terminal
- [x] Write appropiate commands (were wrote below)


## Commands - after the instalation
It's very easy for you because I prepared only 3.

* npm start – to start with development but using devServer (recommended for you)
* npm run developer - to start with development
* npm run production - to make it ready for production (recommended when we complete - for example a chunk of project or all)
