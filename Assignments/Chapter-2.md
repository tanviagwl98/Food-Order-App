# Ch - 2

### What is NPM?
It is a library and registry for javascript software packages. It has command line tools to help install the different packages and manage their dependencies. 

### What is Parcel/Webpack? Why do we need it?
Parcel is a "Blazing fast, zero configuration web application bundler." This means it handles a lot of the hard bundling stuff for you under the hood and allows you to create a relatively lean setup of React (or any other web project that requires bundling).

It works smoothly to build single and multi page React applications. It includes a first-class development experience with Fast Refresh, and supports JSX, TypeScript, Flow, and many styling methodologies.

It helps to minify, clean, and make code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. It substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that parcel remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

### What is .parcel-cache?
The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
It needs not be pushed to .gitignore.

### What is npx ?
The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

### What is difference between dependencies vs devDependencies?
A dependency is a library that a project needs to function effectively. DevDependencies are the packages a developer needs during development. A peer dependency specifies that our package is compatible with a particular version of an npm package.

### What is Tree Shaking?
Tree Shaking is a term commonly used for removal of dead code in JavaScript context. 
It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

In modern JavaScript applications, we use module bundlers (e.g., parcel) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.

### What is Hot Module Replacement?
### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
### What is .gitignore? What should we add and not add into it?
### What is the difference between package.json and package-lock.json
### Why should I not modify package-lock.json?
### What is node_modules ? Is it a good idea to push that on git?
### What is the dist folder?
### What is browserlists?
### Read about dif bundlers: vite, webpack, parcel
### Read about: ^ - caret and ~ - tilda
### Read about Script types in html (MDN Docs)
