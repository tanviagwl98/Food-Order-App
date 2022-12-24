# Day-1

### What is Emmet in VS Code?
- Emmet is a plugin to improve HTML and CSS workflow in code editors.
- In this, you can write skeleton for the HTML document and save time of writing each tag manually.
- Example: 
(1) div>div>h1, press Ctrl+Space 
(2) The resulting structure will appear in a popup, press enter.
<div>
  <div>
    <h1> </h1>
  </div>
</div>
- Emmet is useful in getting HTML document at quick step without the hassle of copy pasting or typing same thing again and again.
- It can do following things:
(1) Add tag with content: div{"Hello"}
(2) Add nested tags: div>div>h1
(3) Add multiple tags of same type: ul>li*3
(4) Add numbers in li tag: ul>li{$}*3
and much more could be done.

### What is CDN in React?
- Content Delivery Network refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
- It helps in quick transfer of the assests required for loading internt contents including html pages, javascript files, stylesheets, images, videos, etc.
 
### What is crossorigin in script?
- The crossorigin attribute on media elemente like audio, script etc is a CORS setting attribute.
- It defines how the elements handle croo-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.     
- It sets the mode of the request to an HTTP CORS request.
- CORS (Cross Origin Resource Sharing) is a mechanism that allows resources on a web page to be requested from another domain outside their domain.

### Difference between async and differ in script.
Both allows browser to continue parsing the HTML document while script is downloading, but difference come in the speed and sequence of execution. 
**Async** : 
- It allows the script(JS files) to run as soon as it's loaded, without blocking other elements on the page. 
- It allows browser to handle loading of script asynchronously.
- It reduces load time of a page as scripts can be loaded in parallel as the order of loading is not restricted.

**Defer**:
- It allows the script to be executed only after the page is loaded completely.
- It helps in case of dependnecy of one script with another.
