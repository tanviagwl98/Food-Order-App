# Chapter-13

### What are different types of testing?
- Unit Testing
- Integration Testing
- Functional Testing
- E2E Testing
- Acceptance Testing
- Performance Testing
- Smoke Testing

### What is Enzyme?
Enzyme is a JavaScript testing utility for React which allows you to create instances of React components for testing purposes. When using these components, you can search for elements via their class or id, and then click it (if the element is a button), simulate key presses (if the element is a text box, or another type of element which can be modified through typing), or get the text contained within that element. Combining these actions allows you to interact with individual components, and then make assertions using Jest based on these interactions.

### Enzyme vs React Testing Library
**Enzyme:** It is a Javascript Testing Utility for React which allows you to create instances of React components for testing purposes. These components can be searched by class, or id and then click it to simulate key press event or get text contained in that element.In this way, intercation with individual components is possible. The component instances in Enzyme are called _Wrappers_.

e.g.
```
describe('Enzyme example', () => {
    it('is an example of the Enzyme wrapper types', () => {
        const shallowWrap = shallow(<ComponentName {...props} />); //Sub-components of ComponentName will not be rendered
        const mountWrap = mount(<ComponentName {...props} />); //Sub-components of ComponentName will be rendered
    });
});
```

**React Testing Library:** React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. 
```
const sum = (a,b) => {
    return a+b;
}
test("Sum of two numbers", ()=> {
    expect(sum(2,5)).toBe(7);
})
```
React Testing Library provides a set of utilities for interacting with React components in a testing environment. These utilities include:
- **render:** A function that renders a React component into a testing environment.
- **fireEvent:** A function that simulates user events, such as clicking or typing.
- **getBy:** A set of functions that retrieve DOM elements based on their attributes or text content.
- **queryBy:** A set of functions that retrieve DOM elements and return null if they are not found.
- **waitFor:** A function that waits for a specified condition to be true before continuing with the test.

### What is Jest and why do we use it?
Jest is a JavaScript testing framework that is used to test JavaScript code, particularly code written in the React framework. Jest is developed and maintained by Facebook and is widely used by developers and organizations for testing their JavaScript code.

Jest provides a simple and easy-to-use interface for writing and running tests, and it comes with a range of features that make testing more efficient and effective. Some of the key features of Jest include:

**Built-in mocking:** Jest provides built-in support for mocking modules, functions, and objects, making it easy to isolate components for testing.

**Snapshot testing:** With Jest, you can take a "snapshot" of the output of a component and compare it to a previous snapshot to ensure that changes haven't introduced unexpected behavior.

**Code coverage reporting:** Jest provides detailed code coverage reporting that allows developers to see how much of their code is covered by tests.

**Asynchronous testing:** Jest provides support for asynchronous testing, which is particularly useful for testing asynchronous React components.
