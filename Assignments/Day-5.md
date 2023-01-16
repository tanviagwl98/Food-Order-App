# Day-5

### What is the difference between Named Export, Default Export and * as export?
Named Export
- There can be multiple exports in same file with a keywork "export" before the function, var, let or const.
- To import named components {} this used.
Default Export
- There can be only one default export in a file with keyword "export default" before the function, var, let or const.
- There is no need of {} to import default export components.

* Import
- It allows importing all components that are exported in a file altogether.


### What is the importance of config.js file?
Having a separate configuration file allows to access variables instantly and improves the maintainability of the codebase since all the variables are in the same file. The core application will remain intact, and it can deploy to different servers with different configurations quickly.

### What are React Hooks?
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
It is normal js function with a logic separated from the actual functional component.
With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
Hooks help in splitting one components into smaller functions based on what pieces are related (subscription, fetching data etc) , rather than forcing a split based on differnt lifecycle method.

### Why do we need useState hook?
It was the first hook defined in React Hooks that allows handling state in an application without writing a class component.
It is called inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. It can be called from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together. 
