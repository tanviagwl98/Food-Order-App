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
Hot-module-reloading lets us change the code of our application while maintaining our current state and position in the website. This allows us to do things like tweak the styling of some page of our app without having to navigate all the way back to that page each time. This helps immensely when prototyping and developing an application.

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- Tree Shaking
- Hot Module Replacement
- Image file minification
- Cleaning Code
- Zero configuration


### What is .gitignore? What should we add and not add into it?
It is a special file in which we can add file names that we do not wish to add in github repository.
To add in this file:
- node_modules
- .parcel-cache

To not add file:
- package.json
- package-lock.json


### What is the difference between package.json and package-lock.json?
**package.json:** A package.json file contains metadata about the project and also the functional dependencies that is required by the application.
**package-lock.json:** It is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json. Let’s say if the current version of the package is 1.3.2 then it will save the version with (^) sign. Here carot(^) means, it will support any higher version with major version 1 for eg. 1.2.2. 

### Why should I not modify package-lock.json?
Without package.lock.json, there might be some differences in installed versions in different environments. To overcome this problem, package.lock.json is created to have the same results in every environment. It should be in source control with the package.json file because if any other user will clone the project and install dependencies then it will install the exact same dependencies as in package.lock.json to avoid differences.

### What is node_modules ? Is it a good idea to push that on git?

### What is the dist folder?

### What is browserlists?
Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file.

As javascript evolves, browsers won't support new features at the same pace, for instance not all browsers have built-in support for ES6 (aka ES2015). By using browserslist, transpilers/bundlers know what browsers you want to support, so they can "group" browsers in different categories and generate separate bundles, for example:
Legacy Bundle: Contains polyfills, larger bundle size, compatible with old browsers without ES6 support.
Modern Bundle: Smaller bundle size, optimized for modern browsers.

### Read about: ^ - caret and ~ - tilda
carot(^) means, it will support any higher version with major version 1 for eg. 1.2.2.
tilda(~) means, it will support only the current version like 1.2.2 and will not upgrade to any higher version.

### Read about Script types in html (MDN Docs)
