# Ch-3

### What is JSX?
HTML like syntax in Javascript.

> const element = {<tagName>Hello, world!</tagName>}

### Superpowers of JSX
It enhances:
- Readability
- Maintainable
- Any piece of Javascript can be written in JSX expression.

### Role of type tag in script tag? What options can be used in it?
The type attribute specifies the type of the script.
The type attribute identifies the content between the <script> and </script> tags.
1. application/javascript:
2. module: Each module explicitly identifies declarations it uses that need to be provided by other modules and which of its declarations are available for use by other modules.

###  ``` {TitleComponent} vs {<TitleComponent/>} vs > {<TitleComponent><TitleComponent/>} ```
These are the ways of rendering a component inside other compoennt.

```<TitleComponent/>```: Using a component inside other component.
``` {TitleComponent}```: Using a variable of object value enclosed between any tag or as a value of some attributes of the tag..
```<TitleComponent><TitleComponent/>```: It is a simple object that describes a DOM node and its attributes or properties.
