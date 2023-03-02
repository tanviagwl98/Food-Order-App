# Chapter-16

### Web Sockets vs API Polling
Web Sockets and API polling are two common ways of achieving real-time communication between a client (e.g., a web browser) and a server.

Web Sockets are a protocol that provides full-duplex communication channels over a single TCP connection. This means that both the client and server can send and receive messages at any time, without waiting for a request from the other party. Web Sockets are particularly useful for real-time applications such as chat rooms, stock tickers, and multiplayer games, where fast and reliable communication is essential.

API polling, on the other hand, is a technique where the client sends periodic requests to the server to check for updates. For example, a client might send a request to a server every 5 seconds to check for new messages in a chat room. API polling is simpler to implement than Web Sockets, but it can be less efficient and less responsive, since the client must wait for a response from the server before sending another request.

### Build YouTube Live Chat

### useMemo
_useMemo_ is a React hook that is used to optimize performance by memoizing the results of a function or value. Memoization is a technique that involves caching the result of a function based on its inputs, so that if the function is called again with the same inputs, the cached result can be returned instead of re-computing the result.

The _useMemo_ hook takes two arguments: a function that returns a value, and an array of dependencies. The function is only executed when one of the dependencies has changed, and the result of the function is cached until the next render.

```
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  const result = useMemo(() => {
    // This function is only executed when `a` or `b` changes
    console.log('Computing result...');
    return a + b;
  }, [a, b]);

  return <div>Result: {result}</div>;
}
```

### useCallback

useCallback is a React hook that is used to optimize performance by memoizing a function. It is similar to the useMemo hook, but instead of memoizing a value, it memoizes a function.

The useCallback hook takes two arguments: a function and an array of dependencies. The function is only re-created when one of the dependencies has changed. This is useful when passing a function down to child components, since it ensures that the child components do not unnecessarily re-render when the function reference changes.

```
import React, { useCallback } from 'react';

function MyComponent({ onClick }) {
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    onClick();
  }, [onClick]);

  return <button onClick={handleClick}>Click me</button>;
}

```
### useRef
useRef is a React hook that is used to create a mutable variable that persists across component renders. It allows us to keep values or references to DOM nodes that would otherwise be lost between renders.

The useRef hook takes an initial value as its argument and returns a mutable ref object with a .current property that can be used to store and update values.
