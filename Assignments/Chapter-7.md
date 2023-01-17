# Ch-7

### What are different ways to add images in React? Explain with code.
1. Adding image from project folder:

```
import Logo from "./img/Logo.png"
<img src{Logo} alt="logo"/>
```
2. Adding image using url:

```
<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffoodvilla.no%2F&psig=AOvVaw2PifP2gYaNfLEx0Dm9zX9a&ust=1674022674183000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjJoK36zfwCFQAAAAAdAAAAABAJ" alt="logo"/>
```
### What would happen if we do console.log(useState())?
It returns an array of two elements: [variable, function]

The value of 'variable' is set to undefined.
The function returns following attributes:
length: 1
name: "bound dispatchSetState"
arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to t

### How will useEffect behave if we don't add dependency array?
It runs both after the first render and after every update.

### What is SPA?
An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.
This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.

### Difference between Client Side Rendering and Server Side Rendering.
The main difference between CSR and SSR is where the page is rendered. SSR renders the page on the server-side and CSR renders the page on the client-side. The client-side dynamically manages the routing without refreshing the page each time the client requests another route.
