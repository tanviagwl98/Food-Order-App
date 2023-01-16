# Ch-4

### Is JSX madatory for React?
No

### Is ES6 mandatory for React?
No

### Write a comment in JSX
{/*COmment in JSX*/}

### What is <></> and <React.Fragment></React.Fragment>
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
Fragments declared with the explicit <React.Fragment> syntax may have keys(only supported attribute till date inside Fragments). A use case for this is mapping a collection to an array of fragments

### What is virtual DOM and Reconciliation?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.
In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.'

**Reconcilitaion** is an algorithm used by React to diff one tree to another to determine which parts need to be changed.
When you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

### What is React Fiber?
Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering(the ability to split rendering work into chunks and spread it out over multiple frames) of the virtual DOM. 
In concrete terms, a fiber is a JavaScript object that contains information about a component, its input, and its output.
A fiber corresponds to a stack frame, but it also corresponds to an instance of a component.

### Why and when we need keys in React?
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
When there are same type of elements like <li>, keys become necessary to identify what each <li> item refers to when some changes are made.
When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.  

### Can we use index in React as keys?
Yes, index can be used but it is not a good practice as index can be re-ordered as a result it degrades the application performance.
### What is props in React?

### What is config driven UI?
Config driven UI is a way of using modularity to build a loosely coupled set of components that are then composed together using a common interface.
e.g. Different forms need to be created based on different compositions like styling etc.
