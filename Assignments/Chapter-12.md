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

### Explain Dispatcher

### Explain Reducer

### Explain Slice

### Explain Selector

### Explain createSlice and the configuration it takes.
