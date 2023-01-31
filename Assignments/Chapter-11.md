# Chapter-11

### What is prop drilling?
In React, data is often shared between components using props. Prop drilling is a condition in which data is passed from one component through multiple interdependent components until the component in which the data is needed is reached.

e.g. App.js --> Login Page {user:"Tanvi Agarwal"}--> Dashboard {user:"Tanvi Agarwal"} --> Profile {user:"Tanvi Agarwal"}

### What is lifting the state up?
In React, many components reflect the same changing data, so lifting the shared state to the closest common ancestors is the best choice.
Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

### What is Context Provider and Context Consumer?

**Context.Provider :** Every Context object comes with a Provider React Component that allows consuming components to subscribe to context changes.
The Provider components takes a value prop to be passed to consuming components that are descendants of this provider. One provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

All consumers that are descendants of a Provider will re-render whenever the Provider's value prop changes.

```<MyContext.Provider value={/* some value */}>```

**Context.Consumer:** It is a React Component that subscribes to context changes. Using this component lets you subscribe to a context within functional compoenent.
It requires a function as a child. The funtion receives the current context value and returns a React node. The value argument passed to the function will be equal to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the defaultValue that was passed to createContext().

``` 
<MyContext.Consumer {value =>  render something based on the context value }></MyContext.Consumer> 
```

### If you don't pass a value to the provider does it take the default value?
Yes, it will take a default value.
But passing undefined as a Provider value does not cause consuming components to use defaultValue.


