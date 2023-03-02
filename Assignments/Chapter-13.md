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



### What is Jest and why do we use it?
