# Day-6


### What is Microservice?
Microservice or microservice architecture is an architectural style that structures an application as a collection of different srevices that are independently deployable, loosely coupled, organized around business capabilities, owned by small team, highly maintainable and testable.

For e.g. - An application can have different modules for UI, API, Payment, Authentication etc. 


### What is Monolith architecture?
It is the opposite of Microservice architecture. Monolith means composed of all as a single piece, i.e. there is one single project handling UI, API, Payment, AUthentication etc.
It is a traditional project architecture followed since ages in IT sector.

### Difference between Microservice and Monolith architecture.
1. Monolith is built as a single unified unti while Microservice architectre is a collection of smaller , independently deployable services. 
2. Monolith architecture makes development complex and and slower while in Microservice architecture since each service is independent of the other so for a minor change all the srevices are not disturbed or redeployed making it easy to develop and deploy.
3. In monolith debugging is better than microservice architecture in a way that all the error logs are available in one module. In case of Microservice, each module comes up with its own error logs and it is hard to identify where is the bug coming from.


### Why do we need useEffect hook?
The useEffect hook helps in performing side efffects (like API call, Data fetching, setting up a subscription, and manually changing the DOM in React components) in functional components.

It takes up two arguments:
- Callback Function
- Dependency Array (until you wish to render your component with every rerender, dependency array should be added as empty [])

### What is Optional Chaining?
Optional Chaining "?." operator is used to access object's property or to call a function. If the object accessed or function called with undefined or null, ?. will retrun undefined instaed of throwing an error.


### What is Shimmer UI?
Shimmer is a temporary animation placeholder for when data from the service call takes time to get back and we don't want to block rendering the rest of the UI.

### Difference between JS Expression & JS Statement.
Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments
e.g.
Expression: {console.log("Hello"};
Statement: let a = 20;

### What is conditional rendering, explain with coding example?
Conditional Rendering works the same way conditions work in JavaSCript. We can use condition (if else) or ternary operators to render the components based on some conditions like current state wrt to update to be done in Component.

E.g. There is a card component which is rendered in sometime if data is available. In this case two different components can be rendered with a condition, 

return !data ? (FirstComponent) : (Second Component)

### What is CORS?


### What is async and await?


### What is the use of const json = await json.data in getRestaurantData?
