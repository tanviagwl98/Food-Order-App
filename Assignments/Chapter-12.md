# Chapter-12

### redux vs useContext

**useContext:**
useContext is a hook that provides a way to pass data through the component tree without manually passing props down through each nested component. 
It is used to share data.
Context value is used to make changes.
The state is changed directly.
Preferred for small applications.

**redux:**
Redux is a state managing library used in JavaScript apps. It is very popular for React and React-Native. It simply manages the state and data of your application.
It is used to manage data and state.
Pure functions are used to make changes.
The state is read-only and cannot be changed directly. An action is dispatched to make any changes in state.
Preferred for large applications.
Building Parts of redux:
1. Action
2. Reducer
3. Store

### Advantage of using Redux Toolkit over Redux
Redux is a JavaScript library for managing application state. It is most commonly used with React, but can be used with other JavaScript frameworks as well. 

Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.

### Explain Dispatcher
In react-redux the useDispatch hook gives us access to our store's dispatch method. Dispatch is used to send actions into our redux store and is the only way we can affect the store from within a component

### Explain Reducer
A typical reducer function needs to:

- Look at the type field of the action object to see how it should respond
- Update its state immutably, by making copies of the parts of the state that need to change and only modifying those copies

It is a pure function responsible to make any changes in the state of the store when an action is dispatched.

### Explain Slice
A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

### Explain Selector

### Explain createSlice and the configuration it takes.
