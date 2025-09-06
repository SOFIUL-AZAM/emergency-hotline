
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:
1. getElementById = Selects an element by its id

getElementByClass = Selects elements by class name

querySelector = first element matching a css selector

querySelectorAll = Selector all element
matching a css selector

2. 
 let div = document.createElement("div") --create element
div.texContent = "Hello" --set content
div.className = " greeting"
document.body.appendChild(div) --insert

3.
Event stars ar child - moves up to parent
Ex: click button then triggers button then parent.

4.
Put one listener on parent to handle all children.
works for dynamic elements

5.
preventDefault() : Stops browser's default action.
stopPropagation() : Stops event from bubbling to parent.
