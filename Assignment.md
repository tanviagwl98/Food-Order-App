# Day-1

### What is Emmet in VS Code?
- Emmet is a plugin to improve HTML and CSS workflow in code editors.
- In this, you can write skeleton for the HTML document and save time of writing each tag manually.
- Example: 
(1) div>div>h1, press Ctrl+Space 
(2) The resulting structure will appear in a popup, press enter.
<div>
  <div>
    <h1> </h1>
  </div>
</div>
- Emmet is useful in getting HTML document at quick step without the hassle of copy pasting or typing same thing again and again.
- It can do following things:
(1) Add tag with content: div{"Hello"}
(2) Add nested tags: div>div>h1
(3) Add multiple tags of same type: ul>li*3
(4) Add numbers in li tag: ul>li{$}*3
and much more could be done.

### Difference between a library and Framework
**Library**:
- It is a collection of helper modules , classes , objects , functions , pre-written code , etc.
- Libraries can be integrated easily into existing projects to add some specific functionality.
-It performs a set of  specific and well-defined operations. Examples : Network protocols, compression, image manipulation, string utilities, regular expression evaluation, math etc.

**Framework**:
- It comprises of lot of APIs , compilers , support programs , libraries etc.
- Including framework smoothly into an existing project is impossible.
- It is known to be a skeleton where the application defines the content of the operation by filling out the skeleton. Examples of frameworks: Web application system, Plug-in manager, GUI system.

### What is CDN and why do we use it?
- Content Delivery Network refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
- It helps in quick transfer of the assests required for loading internt contents including html pages, javascript files, stylesheets, images, videos, etc.

### Why is React known as React?
React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app's data, the view should “react” or change with those user events.

### What is crossorigin in script?
- The crossorigin attribute on media elemente like audio, script etc is a CORS setting attribute.
- It defines how the elements handle croo-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.     
- It sets the mode of the request to an HTTP CORS request.
- CORS (Cross Origin Resource Sharing) is a mechanism that allows resources on a web page to be requested from another domain outside their domain.

### Difference between React and ReactDOM
**React**:
- React library is responsible for creating views.
- The react package contains React.createElement, React.createClass and React.Component, React.PropTypes, React.Children, and the other helpers related to elements and component classes.

**ReactDOM**: 
- ReactDOM library is responsible to actually render UI in the browser.
- The react-dom package contains ReactDOM.render, ReactDOM.unmountComponentAtNode, and ReactDOM.findDOMNode, and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString and ReactDOMServer.renderToStaticMarkup.

### What is difference between react.development.js and react.production.js files via CDN?
**react.development.js**:
- The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times reloading ability in those builds.

**react.production.js**: 
- The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources loaded with Webpack. There's also no reloading included.

### Difference between async and differ in script.
Both allows browser to continue parsing the HTML document while script is downloading, but difference come in the speed and sequence of execution. 
**Async** : 
- It allows the script(JS files) to run as soon as it's loaded, without blocking other elements on the page. 
- It allows browser to handle loading of script asynchronously.
- It reduces load time of a page as scripts can be loaded in parallel as the order of loading is not restricted.

**Defer**:
- It allows the script to be executed only after the page is loaded completely.
- It helps in case of dependnecy of one script with another.
