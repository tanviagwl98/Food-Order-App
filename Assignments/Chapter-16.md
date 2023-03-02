# Chapter-16

### Web Sockets vs API Polling
Web Sockets and API polling are two common ways of achieving real-time communication between a client (e.g., a web browser) and a server.

Web Sockets are a protocol that provides full-duplex communication channels over a single TCP connection. This means that both the client and server can send and receive messages at any time, without waiting for a request from the other party. Web Sockets are particularly useful for real-time applications such as chat rooms, stock tickers, and multiplayer games, where fast and reliable communication is essential.

API polling, on the other hand, is a technique where the client sends periodic requests to the server to check for updates. For example, a client might send a request to a server every 5 seconds to check for new messages in a chat room. API polling is simpler to implement than Web Sockets, but it can be less efficient and less responsive, since the client must wait for a response from the server before sending another request.

### Build YouTube Live Chat

### useMemo
_useMemo_ is a React hook that is used to optimize performance by memoizing the results of a function or value. Memoization is a technique that involves caching the result of a function based on its inputs, so that if the function is called again with the same inputs, the cached result can be returned instead of re-computing the result.

The _useMemo_ hook takes two arguments: a function that returns a value, and an array of dependencies. The function is only executed when one of the dependencies has changed, and the result of the function is cached until the next render.

### useCallback

### useRef
