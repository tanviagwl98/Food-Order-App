# Chapter-8

### Why is super(props) used in React Class Based Component?
Super(): It is used to call the constructor of its parent class. This is required when we need to access some variables of its parent class.
Props: It is a special keyword that is used in react stands for properties. Used for passing data from one component to another.

### Why cannot async be used before useEffect and used before componentDidMount?
Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

The issue here is that the first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument.

While in case of Class Components, unmounting happens in other function "componentWillUnmount".

### How to create Nested Routes using react-router-dom configuration?
By calling {Outlet} from 'react-router-dom' in the parent component of the nested component.

### What is the order of life cycle methods calls in Class Based Components in React?
1. Mounting
- constructor()
- render()
- componentDidMount()

2. Update
- render()
- componentDidUpdate()

3. Unmounting 
- componentWillUnmount

### Why do we use componentDidMount?


### Why do we use componentWillUnmount?


### Read about createHashRouter, createMemoryRouter from React Router Docs

