# Chapter-11

### What is prop drilling?


### What is lifting the state up?


### What is Context Provider and Context Consumer?

Context.Provider : Every Context object comes with a Provider React Component that allows consuming components to subscribe to context changes.
The Provider components takes a value prop to be passed to consuming components that are descendants of this provider. One provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

All consumers that are descendants of a Provider will re-render whenever the Provider's value prop changes.

<MyContext.Provider value={/* some value */}>

Context Consumer: 

### If you don't pass a value to the provider does it take the default value?

