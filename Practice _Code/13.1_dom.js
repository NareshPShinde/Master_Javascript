/* 
✔1. BOM - browser object model 
  - window object
   DOM - Document Object Model 
  - DOM tree
2. Types of nodes in Dom tree (element & non-elemnt)
✔3. Accessing DOM Element :
  i - selecting by id or class (single or multiple)
  ii - Selecting by Css selctor (single or multiple)
3.1-.HTMLcollection VS NodeList
  i.how to iterate - diff ways (for-of |for | forEach and so on )
  ii - convert into Array
4.innerHTML | innerText | textContent (with diff with them)  
  i . changing the style on dom - style and hidden property (color, text ,font ...) 

5.Node relation (siblings)   
  i.- traversing DOM (childNodes/parentNodes | firstChild/lastChild | nextSibling/previousSibling)
  ii.- Element Specific Properties & Element Only Navigation ( Children | parentElement | firstElementChild/lastElmentChild)
5.1- creating node and attacing 
       remove node
       creating text node
6.matches() , closest() , containes()
7.Attribute ( get / modify /add /chek...)
8.adding html element and appending.
9.Clasees (classList - add,remove,toggle,contains) 
  
*/

//==========================================================================
/* 
 BOM - Browser Object Model 
 collection of object exposed by the web browser that allows JS to interact with browser window .its component and other specific functionalitilies .
 unlike the dom, which focues on the content web page,the foucus browser itself.
 like set tools provided by browser , not a part of official js specification. 

 DOM - Document Object Model 
 it is a programming inteface for web documents. it represent a document as a tree-like structure of nodes,
 allowing program to access and manipulate its content ,structure and style.Essentially ,it's how browser represent and interact with HTML and XML pages.
 
*/
/* Types of nodes 
  Element node and Non-Element node

 1.element nodes -> repersent element nodes ex., <html>,<h1>,<p>,...
 2.Text nodes -> represent textcontent within the html element (child of element node) ex., <p>lorem ipsum </p> here loem ipsum is text node.
 3. Attribute nodes -> represent attribute of html element.
 4. Comment nodes -> represent comment within html markup 
*/
// 
// in NodeList -> space between elemmnt and line break is treated as text node


//==========================================================================

// **** 3.Selecting Dom element *****
const byId = document.getElementById("root")
const byClass = document.getElementsByClassName("lang")
const byTag = document.getElementsByTagName("ui")
const singleQuary = document.querySelector("#root");
const multipleQuary = document.querySelectorAll(".lang");
console.log(byId);
console.log(byClass);
console.log(byTag);
console.log(singleQuary);
console.log(multipleQuary);
//==================================================================                  
//****** 3.1  ***********
/* . Content:
HTMLCollection: Contains only element nodes (e.g., <div>, <span>, <p>).
NodeList: Can contain any type of node, including element nodes, text nodes, comment nodes, and attribute nodes.
2. Liveness:
HTMLCollection:
Always a live collection. This means it automatically updates to reflect changes in the DOM. If elements are added or removed from the document that match the collection's criteria, the HTMLCollection will reflect those changes immediately.
NodeList:
Can be either live or static.
Methods like childNodes or getElementsByName() return a live NodeList.
Methods like querySelectorAll() return a static NodeList, meaning it's a snapshot of the DOM at the time it was created and does not update with subsequent DOM changes.
3. Accessing Items:
HTMLCollection: Items can be accessed by their index number, name, or ID.
NodeList: Items can only be accessed by their index number. 
4. Methods:
HTMLCollection: Has a more limited set of methods compared to NodeList.
NodeList: Offers a broader range of methods for traversal and manipulation, including forEach(), item(), and entries().  */

//=========================================================================================

//*****4.innerHTML vs innerText vs textContent  *****
const dev = document.getElementById("mern")
const dev1 = document.getElementById("java")

// console.log(dev);
console.log(dev.innerHTML);//text on web  + markcup
console.log(dev.innerText);// text on web ,excluding display ="none" or visibility="hidden" text.
console.log(dev.textContent);//text in element inculing display ="none" or visibility="hidden" text.
// dev1.innerHTML = ` java developer 
// <li>Frontend</li>
// <li>bakend</li> `; 

dev1.innerText = `java developer 
<li>Frontend</li>
<li>bakend</li>` ;//ignores tags and print them on the screenas part of the text. but still recognises formating like line-breake and whitespaces too.

// dev1.textContent =`java developer 
// <li>Frontend</li>
// <li>bakend</li>`;////ignores tags and print them on the screenas part of the text and formating like line-breake and whitespaces too.
//************
dev.style.color="red";
dev1.style.color="orange";

// **********- 4 - ****************
/* 
innerHTML:
-Retrieves or sets the HTML content within an element, including all HTML tags and text. 
-When setting content, any HTML tags included in the string will be parsed and rendered by the browser.
-Useful for dynamic manipulation of both the content and structure of an element.
-Security Note: Be cautious when using innerHTML with untrusted data, as it can expose your application to Cross-Site Scripting (XSS) vulnerabilities if not properly sanitized.

innerText:
-innerText reads text as it is rendered on screen.
-Retrieves or sets the visible, rendered text content of an element, excluding HTML tags. 
-It considers CSS styling, so text hidden by display: none or visibility: hidden will not be included.
-It also removes extra whitespace and line breaks that are not visibly rendered.
-Useful for extracting or setting the human-readable text content as it appears on the screen.

textContent:
-textContent reads text as it is in the markup. It also returns all text, whether it's rendered on screen or not.
-Retrieves or sets the raw text content of an element, including all text and whitespace within it, regardless of visibility or CSS styling. 
-It does not parse or render HTML tags; they are treated as plain text.
-It includes text from <script> and <style> elements, which innerText would typically ignore.
-Useful for extracting or setting the complete, unformatted text content of an element, including hidden or script-related text. */
//===================================================================================================================
// *****  5  ********
// these propertis return nodes of all types , including element nodes, text and comment nodes.
// note - spaces between tags and line return in HTML code are considered text nodes by the browser. 

// traversing dom
const child1 = document.getElementById("child1")
console.log(byId.childNodes);// NodeList
console.log(child1.parentNode);
console.log(byId.firstChild);
console.log(byId.lastChild);
console.log(child1.nextSibling);
console.log(child1.previousSibling);
//Element Specific Properties & Element Only Navigation 
console.log(byId.children);// HTMLcollection
console.log(byId.children[1].style.color="green");
console.log(byId.firstElementChild);
console.log(byId.lastElementChild);

// *****  Create node and attach   *********
//document.createElement("")-> createing element of Specified tag .
// appendChild  -> (single element) to (specified_element) as last child element.
// prepend      ->this method append the this element/s as first child of the (specified parent element)
// append   -> this method add as last child of this element.
// before    -> attach/appand before of this  element
// after     -> attach after the this element
// insertBefore(newNode ,referenceNode) -> add newnode before referenceNode
// replaceWith(newNode , referenceNode) -> replace element by this elemnet.
function attach(content){
const parent = document.getElementById("root")
const element = document.createElement("li")// creating element for specified tag
element.innerHTML=content
parent.appendChild(element);}// append (single element) to (specified_element) as last child element.
attach("Node_js")
attach("Express")

function attach_more(content){
const parent = document.getElementById("root")
const element = document.createElement("li")
element.innerHTML=content
const element2 = document.createElement("li")
element2.innerHTML=content+" v.0"
parent.append(element,element2);
}
attach_more("Devops")

const heading = document.createElement("h3")
heading.innerHTML="CONFIDENT_CODER"
// byId.before(heading) //this method add the this element before (specific)'byId' element.
byId.after(heading)////this method add the this element after (specific)'byId' element.

// remove node 
heading.remove();

// creating text node
const txt = document.createTextNode("hello coders");
byId.appendChild(txt);

const leetcode = document.createElement("li")
leetcode.innerHTML="leetcode"
// byId.replaceChild(leetcode,byId.children[3])
byId.insertBefore(leetcode,byId.children[4])

/* The insertAdjacentHTML, insertAdjacentElement, and insertAdjacentText Methods

element.insertAdjacentHTML(position, text);
element.insertAdjacentElement(position, element);
element.insertAdjacentText(position, text);

These methods are used to insert content into the DOM at a specified position relative to a given element. 
They are helpful when you need to dynamically add new elements or text to your webpage.
 The first parameter specifies where the HTML string will be inserted:

beforebegin: Before the element itself.
afterbegin: Just inside the element, before its first child.
beforeend: Just inside the element, after its last child.
afterend: After the element itself. */

// 1.insertAdjacentHTML  -> Inserts HTML as a string. Parses the string and inserts it as real elements.

byId.insertAdjacentHTML("afterbegin","<h2>coder Army</h2>")

//2. insertAdjacentElement(position, element) : Inserts an actual DOM element node, not a string.

// It's similar to insertAdjacentHTML, but instead of inserting HTML, you can insert a DOM element.
const el2 = document.createElement("p");
el2.innerHTML="leetcode";
byId.insertAdjacentElement("beforeend",el2)

//3.insertAdjacentText(position, text) : Inserts plain text content at the specified position.
el2.insertAdjacentText("beforeend"," plus(adnavce feature)")
// Delete nore or element
// el2.remove();
//===============================================================================================================
//*********** Attribute ********
// element.setAttribute("attributeName", "value"); -> update or set new attribute to element
// const value = element.getAttribute("attributeName"); -> get the value of the specified attribute   
// removeAttribute("attributeName") -> removing existing attribute .

const el = document.createAttribute("id");
el.value="child2";
const child2 = byId.children[1];
// child2.setAttributeNode(el);
const getAtr =  byId.getAttribute("id");
console.log(getAtr);//root
byId.setAttribute("custom","123")//
byId.children[2].setAttribute("id","child2");
byId.children[3].setAttribute("id","child3");
byId.removeAttribute("custom");
console.log(byId.hasAttribute("id"));//element.hasAttribute(attributeName);//true
 
//************** Classes ***************** 
/* classList: The classList property allows you to manipulate the classes of an element. 
element.classList -> read only property. It returns a DOMTokenList object of the element's classes.
element.classList.add(class1, class2)	Adds one or more classes
element.classList.remove(class1, class2)	Removes one or more classes
element.classList.toggle(class, force?)	Adds the class if not present, removes if present. Optional second arg as force boolean.
element.classList.contains(class)	Checks if the element has the specified class
element.classList.replace(old, new)	Replaces an old class with a new one
*/
const div = document.querySelector("#myelement");
console.log(div.classList);// list of classes in this element
console.log(div.classList.add("myclass","myclass1"));//Adds one or more classes
console.log(div.classList);
console.log(div.classList.remove("myclass1"));//Removes one or more classes
console.log(div.classList);
console.log(div.classList.contains("myclass1"));//Checks if the element has the specified class
console.log(div.classList.toggle("myclass1"));//Adds the class if not present, removes if present. Optional second arg as force boolean.
console.log(div.classList);
console.log(div.classList.replace("myclass1","class1"));
console.log(div.classList);

// element.className = "new-class another-class";   // Overrides all classes!
 //==============================================================================================================
// ******* matches() , closest(),contains()********
/* matches() ->checks if an element matches a certain style rule.
 For example, if you have a button and you want to see if it has a class of "active", you could use button.matches('.active'). It will return true if the button has that class, and false if it doesn't. */

const button = document.querySelector('button');
if (button.matches('.active')) {
  console.log('The button is active');
} else {
  console.log('The button is not active');
}

/* closest() -> If you have an element and you want to find its nearest parent with a certain class, you can use closest()
 like this: element.closest('.classname').
 For instance, if you have a link inside a list item and you want to find the nearest list item, you could do link.closest('li'). */
// const link = document.querySelector('a');
// const listItem = link.closest('li');
// console.log(listItem);

/* contains() checks if one element is inside another.
 For example, if you have a div and a paragraph inside it, you could check if the div contains the paragraph with div.contains(paragraph).
  It will return true if the paragraph is inside the div, and false if it's not. */
const paragraph = document.querySelector('.para_g');
const para = document.querySelectorAll('.para_g')
console.log(paragraph);
if (div.contains(paragraph)) {
  console.log('The div contains a paragraph');
} else {
  console.log('The div does not contain any paragraph');
}
//========================================================================================================
// iterate over HTMLCollection and NodeList
//DOM, both NodeList and HTMLCollection are array-like collections, but they are not actual arrays. So let’s break down how to iterate over them.
/* HTMLCollection(4) [li#child1.lang, li.lang, li.lang, li.lang, child1: li#child1.lang]
 */

console.log(byClass);
for (let i = 0; i <byClass.length; i++) {
console.log(byClass[i]);  
}
for (const element of byClass) {
  console.log(element);
}
const convert_arr = Array.from(byClass);//Creates an array from an array-like object.
console.log(convert_arr);
convert_arr.forEach(element=>{
console.log(element.textContent);
})

 // 1. forEach -> only on NodeList , not on HTMLCollection
 console.log(para);
para.forEach((element,i)=> {
  console.log(`${i } is ${element.textContent}`);
}); 
for (let i = 0; i <para.length; i++) {
console.log(i + " "+ para[i].textContent);  
}
for (const element of para) {
 console.log(element.style.color="red"); 
 console.log(element.style.fontSize="20px"); 
 console.log(element.style.fontFamily="vardanaVerdana, Geneva, Tahoma, sans-serif"); 
}