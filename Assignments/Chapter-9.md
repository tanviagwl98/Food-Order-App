# Ch-9

### When and why do we need lazy()?
lazy() function allows rendering import dynamically as a regular component.
const Component = lazy(()=>import(../../Component));

It takes the function that will call dynamic import. This must return a Promise that resolves to a moduel with default export containing a React component.  

The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.
```<Suspense><Component/></Suspense>```

### What is Suspense?
React.Suspense lets you specify the loading indicator in case some components in the tree below it are not yet ready to render.
Lazy loading components is the only use case supported by <React.Suspense>

### When and why do we need Suspense?
It is used in lazy loading when code-splitting is implemented to created multiple bundles to avoid loading time. The best practice is to place <Suspense> where you want to see a loading indicator, but to use lazy() wherever you want to do code splitting.

### Advantages and disadvantages of using code splitting pattern.
Advantages:
- As the app grows the bundles also grow hence increasing oading time. So, to avoid this issue code-splitting is a choice.
- Code-splitting is a feature supported by bundlers like parcel, webpack etc to create multiple bundles that can be dynamically loaded at run-time.
- It helps in lazy-load things, i.e. loading the module/part of code that is required currently by the user.  
- It has not reduced the overall amount of code in app, instead avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

Disadvantages:
-

### Why do we get this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. to fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
Any component may suspend as a result of rendering, even components that were already shown to the user. In order for screen content to always be consistent, if an already shown component suspends, React has to hide its tree up to the closest <Suspense> boundary. However, from the user’s perspective, this can be disorienting.
