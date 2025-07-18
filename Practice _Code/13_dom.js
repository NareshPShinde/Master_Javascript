/* https://www.freecodecamp.org/news/javascript-in-the-browser-dom-and-events/
// 1.Browser Object model
The Browser Object Model is like a set of tools provided by the browser itself. It's not part of the official DOM specification, but it's specific to web browsers.
The BOM provides JavaScript access to browser-specific things like the browser's history, location, and browser window itself
// 2. Window Object 
The window Object serves as a global object in the browser, 
representing the browser window and is the top-level object in JavaScript when we're working in a web browser.

// Document Object model
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page, allowing interaction with its elements using programming languages like JavaScript.
The DOM contains the document object, which represents the DOM structure of the current web page and has properties and methods that allow you to manipulate the DOM.

document -> the document refer to the webpage you see in the browser.
object -> means eleemnt like images, header, paragragh , are trated like object . each object has its properties(id,class,title) and method. 
            using these properties and methods, youcan manipulate the elements.
model -> represenstation or copy of the html document as hierarchical tree. the tree include all the elements . and caputre parent-child relatioship between them.


//Dom tree structure
The DOM represents the layout of HTML and XML documents as a tree-like structure, resembling the hierarchical arrangement of elements on a web page.
node -> each entry in the tree is called node.
        node are also refered to by their position in the tree relative to other nodes.
        root node       --> the top node in the tree.  
        child node      --> a node directly inside another node.    
        descendant node -->a node anywhere inside another node. 
        parent node     --> a node which has another node inside it.  
        sibling node    --> nodes that sit on same level in the tree.





*/
/* How to select Dom element */
/* getElementById()
   getElemnetByClassName()
   getElemnetByTagName()
   querySelector()
   querySelectorAll()
    */
 const demoId = document.getElementById("container");
 console.log(demoId);
 /* Returns a reference to the first object with the specified value of the ID attribute.
@param elementId — String that specifies the ID value.
if id is not found return Null. */

const democlass = document.getElementsByClassName("para");
console.log(democlass);
/* Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes. 
we can access the element using bracket notation just like array , but we can not apply array methodlike map ,filter and foreachon it. 
*/

const demoTag = document.getElementsByTagName('p');
console.log(demoTag);
// this method also return htmlcollection of selected elements.

const demo = document.querySelector('.para');
console.log(demo);
/* 

*/
 const demoselectAll = document.querySelectorAll('.para')
 console.log(demoselectAll);
 // this is also select html element using selector(css selector).
 /*
  the difference is that it returns all elements that match the selector insted of returning only first oneit select all.
  note : querySelectorAll return a nodelist. a slightly different from htmlColletion. 
     you don't need to convert ot to an array  to apply a method like foreach on it.
     but you can still not apply method like map , filter and other method ona nodelist.we need to first create an array from it.  
 */
//===============================================================================================================
// how to change the content of dom.

/*  innerHTML
 this is method that allow we to read or update content and structure of elemeent.
*/
 const content = document.querySelector('#content');
 console.log(content.innerHTML);  
 content.innerHTML= "happy Birthday dear brother! <b>katthu </b>";
 console.log(content.innerHTML);  
 
