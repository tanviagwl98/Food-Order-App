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
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.'

Reconcilitaion is an algorithm used by React to diff one tree to another to determine which parts need to be changed.

### What is React Fiber?
Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering(the ability to split rendering work into chunks and spread it out over multiple frames) of the virtual DOM. 

### Why and when we need keys in React?

### Can we use index in React as keys?

### What is props in React?

### What is config driven UI?

