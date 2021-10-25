<!-- JS Recap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript -->

# Day 1: Intro to React

## Create React App

https://reactjs.org/
Create a React app  
React is a JavaScript library for building user interfaces  
Great docs with great getting started options; however, the docs can be overwhelming and confusing  
Watch out for class vs functional components

## NPM

https://www.npmjs.com/
Free npm software package registry that is the most popular for JavaScript code sharing, and with more than one million packages, the largest software registry in the world
It's how you can start a React app and also install and manage third-party code in your app

## Explore React Folders and Files

index.html
index.js
App.js
components
package.json
node_modules
gitignore

## What is JSX

https://reactjs.org/docs/introducing-jsx.html  
Mashup of HTML and JavaScript  
Instead of separating templating and scripting languages, it's all in one  
It is very convenient but be careful because the syntax can start off confusing

## Components

https://reactjs.org/docs/components-and-props.html  
Independent, reusable pieces of code for making user interfaces using HTML/CSS/JS  
A container for code  
Kind of like an HTML element, kind of like a JS function/class  
We will focus on functional components that use hooks to control state  
Beware that class components also exist

## Props

https://reactjs.org/docs/components-and-props.html  
A property of a component whose value comes from another component  
In other words, inputs for a component from a parent component  
Props are an object  
Props are read-only  
Props can be a property or a function  
Examples online write props in many different syntax styles but it's all the same props

## State

https://reactjs.org/docs/state-and-lifecycle.html  
A property of a component where the property comes from the component itself (not from another component)  
State is similar to props, but it is private and fully controlled by the component  
State lets you keep track of values over time

## Life Cycle Methods

https://reactjs.org/docs/state-and-lifecycle.html  
Special methods in every component that run some code when a certain event happens  
The events that can trigger these special methods are based on the component's life cycle  
Specifically, before during and after a component mounts and unmounts  
In functional components with hooks, we use useEffect for all life cycles, but class components have around 5 life cycles methods  
Inside these methods is where you should console log to see what's going on in your application

## Virtual DOM

const dom = {
keyone: valuethree;
keytwo: valuetwo;
}

https://reactjs.org/docs/rendering-elements.html

React uses a virtual DOM  
Instead of your code updating the DOM one line at a time, in React it updates the DOM in batches  
It's more efficient but can be frustrating at first

## Handling Events

https://reactjs.org/docs/handling-events.html  
Use inline functions (like the HTML attributes I told you not to use)  
So React you use attributes/props to work with events, whereas in JS you use addEventListener  
Same event object available to you  
Beware that scope/functions can be tricky

## Conditional Rendering

https://reactjs.org/docs/conditional-rendering.html
Using truthy/falsy to control which components are displayed and when
Similar to hiding/showing or adding/removing HTML elements from the DOM
Will use &&, ||, and ternary operators

## ES6 vs React

Spread operator
Destructing
Truthy/falsy and ternary operators

# Day 2: React Functional Components

## Functional Components

// TO START, SOME THOUGHTS CONNECTING REACT TO VANILLA JS:
// It's important to build upon what you learned in vanilla JS to help understand React
// Thinking back to when you learned about functions and modules . . .

// Functional components are just like functions + modules in vanilla JS
// // You have to define the function before you can call it (that's what each .js
// // functional component file is, a function definition that's exported)
// // You can save the function definition to a variable
// // You can have parameters in your function definitions
// // You can have an explicit return value
// // You can export a function defintion from a file, import it, and call it in another file
// // You can call the function as many times as you want (that's what <List /> is below, calling
// // the List functional component)
// Class components are just like classes + modules in vanilla JS, but that's not our focus for now

// THOUGHTS ON SOME DIFFERENCES ABOUT FUNCTIONAL COMPONENTS AND FUNCTIONS IN VANILLA:
// In React, you export the function definition from its file (like you saw with modules in vanilla JS),
// but in vanilla JS we didn't use modules much yet in practice
// In React, you use React methods to help manage state and lifecycle of your function (component),
// whereas in vanillaJS, we don't really manage a state in function definitions like this
// // Remember, React methods (e.g., useState, useEffect, etc.) are defined inside the React
// //source code, so you've probably never seen the definitions for those; we just call them and
// // don't need to know their code, just need to know their behavior
// In React, you see function definitions (e.g., handleClick, handleChange, etc.) inside the
// functional component definition, whereas in functions in vanilla JS that's not as common to define
// functions inside other function definitions
// In React, you're writing JSX in functional components, whereas in vanilla JS it's just vanilla JS
// In React, your functional component definitions usually have just one parameter (if any), and
// it's called props; props is an object containing all the arguments passed into the functional component
// when it's called; in vanilla JS, you oftentimes see multiple parameters, named whatever
// In React, you'll import third-party packages and rely upon them heavily, whereas in vanilla JS
// we didn't so much do that very much
// In React, we don't use getElementById and other DOM functions -- why?
// In React, you see a lot more && and || (e.g., {user || list && <List />}) -- what?!

## Lifting State Up

// # In-Class Coding Using HOOKS . . .
// 1. Create a parent component that has a piece of state for the title and uses useEffect to set the title on page load
// 2. Create a child component for a title and pass to it as props the title from the parent's state (passing state down)
// 3. Create another child component for a form that has one input and a button; pass down as props to this child the
// setList method from the parent (passing a setState function down as props in order to lift state up from the child
// to the parent -- Google search "React how to lift state up" or something like that)
// // -- When you lift state up, in the child component, you call a function that was passed down as a prop from the parent;
// // although that callback function is called within the child, it's code is actually run in the scope of the parent
// 4. When user clicks the button, update the state and console log it
// 5. Create a third child component for listing the items stored in the list and pass to it as props the list from the parent's state
// 6. Show the list on the page and have it update automatically each time a new date is added

// Things to think about . . .
// How would you store in the state a form entry with more than one input?
// How would you delete an item from the list?
// How would you use state to conditionally render the style (i.e., the value for className)?
// How would you map through an array and call a component each time with a different prop?
// How can you use life cycle methods with fetch to load data to the page from an API?
// How can you use state to hide and show a loader?
// How can you use state to enable and disable a button?
// What is react-router-dom and how can you use it?
// How can you create a private Route to control which types of users see which page?
// How would you use the Link component from react-router-dom in general and to pass state?
// How can you use useLocation to dynamically load page content (e.g., a user's profile)?
// How can you make your app have a global state so that you don't have to pass props so much?

```
function App() {
  const [formTitle, setFormTitle] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setFormTitle("frontend web at itc");
  }, []);

  useEffect(() => {
    console.log(list);

    // Note 1:
    // This is a technique to use when developing
    // When you want to see if a piece of state is updating or if you want to see its values after update
    // useEffect with that piece of state in the dependency array will console log the piece of state
    // each time that piece of state updates

    // Note 2:
    // You can also use this technique before setting if / else conditions inside the use effect
    // For instance, if each time a piece of state is updated, first you want to check if it has a value or if
    // its value is equal to something specific; console logging the value in useEffect will help you
    // better understand how things are working so that you can write good conditionals

    // Note 3:
    // Don't call a setState function inside use effect for a piece of state that's
    // in your dependency array -- you'll get an infinite loop! (e.g., don't call setList inside here)
  }, [list]);

  return (
    <div className="page-wrapper">
      {/* Put formTitle in curly braces because in JSX that's how you indicate that it's a JS variable instead of text */}
      <Title title={formTitle} />
      <div className="section-one">
        {/* Calling a component is like calling a function */}
        {/* Props are like parameters for the function */}
        {/* For each prop, the name on the left of the = is what it's known as inside the component */}
        {/* and the name on the right side of the = is the value from the parent that you're assigning to it */}
        <Form setList={setList} />
        <List list={list} />
      </div>
    </div>
  );
}

export default App;
```

class Car {
constructor(color, size) {
this.color = color
this.size = size
}
}

# Day 3: State

## Intro

State is the properties of the component whose value originate from within that component and those values can be changed by the component

- It's like in classes the properties we looked at in the constructor method of class definitions

## useState

In functional components, we use useState to create and manage pieces of state. A piece of state is a property and corresponding function for changing the value of the property.

Import useState at the top of your js file:

`import { useState } from 'react'`

Then inside your functional component at the top and for sure above its return statement, include the following to create the piece of state:

`const [numberOfUsers, setNumberOfUsers] = useState();

In the example, `numberOfUsers` is the property and `setNumberOfUsers` is the corresponding function for changing the value of `numberOfUsers`.

To set an initial value, put it in the useState() method as an argument.

`const [numberOfUsers, setNumberOfUsers] = useState(20);

## Rerendering

Although a component can change the value of a piece of its state and fully control the state, the only way to change the state to cause the component to rerender is by using the state property's corresponding function. Here, using `setNumberOfUsers` is the only wayt to change `numberOfUsers` to cause the component to rerender.

Remember, in hooks, the setStateFunction is the second item in the array (index 1) returned from the useState react method.

This does not cause a rerender:

`numberOfUsers = 21`

This causes a rerender:

`setNumberOfUsers(21)`

When a component rerenders, the page shows the updated value for the piece of state.

## useEffect

Also, when a component rerenders, the useEffect lifecycle function will run if the state is listed in the useEffect's dependency array.

```
useEffect(()=>{
  console.log(numberOfUsers)
}, [numberOfUsers])
```

To have the useEffect run when a piece of state changes but only if the piece has an actual value, you can use a conditional in the useEffect.

```
useEffect(()=>{
  if (numberOfUsers) {
    console.log(numberOfUsers)
  }
}, [numberOfUsers])
```

## Set Function is Async

Talked about it together
So if you want to see the outcome of the set state function, use a separate useEffect with the piece of state in the useEffect's dependency array

## Don't!

Don't use a piece of states function to set state inside a useEffect that lists the state in its dependency array

```
const [arrayOfUsers, setArrayOfUsers] = useState();

useEffect(()=>{
    const newItem = {
      date: new Date(),
      message: "Have a great day."
    }

   setArrayOfUsers((prevState)=>{
     [newItem, ...prevState]
   })
},[arrayOfUsers])
```

It will lead to an infinite loop. Do you know why?

## State in the return

You can use state in your return statement in many ways. Here are four million examples:

- To display the piece of state on the page:

```
return (
  <div>
    The number of users is: {numberOfUsers}
  </div>
)
```

- To hide and show elements:

```
return (
  <div>
    {numberOfUsers && `The number of users is ${numberOfUsers}` }
    {!numberOfUsers && "You have no users"}
  </div>
)
```

Without ternary operator:

```
return (
  <div>
    {numberOfUsers && <div>`The number of users is ${numberOfUsers}`</div> }
    {!numberOfUsers && <div>"You have no users"</div>}
  </div>
)
```

With ternary operator:

```
return (
  <div>
    {numberOfUsers ?
      <div>`The number of users is ${numberOfUsers}`</div> :
      <div>"You have no users"</div>
      }
  </div>
)

- To control which CSS style class applies:


Without ternary operator

```

// in addition to number of users, you have a boolean piece of state
const [showNumber, setShowNumber] = useState(false)

// and two classes in your css file
// .num-users-true { // css styles with green colors}
// .num-users-false { // css styles with red colors}

return (

  <div>
    <div className={num-users-${showNumber}}>`The number of users is ${numberOfUsers}`</div>
  </div>
)
```

With ternary operator

```
// in addition to number of users, you have a boolean piece of state
const [showNumber, setShowNumber] = useState(false)

// and two classes in your css file
// .num-users-show { // css styles with green colors}
// .num-users-hidden { // css styles with red colors}

return (
  <div>
    <div className={num-users-${showNumber ? "hidden" : "show" }}>`The number of users is ${numberOfUsers}`</div>
  </div>
)
```

- In ternary operators:

```
return (
  <div>
    The number of users is: {numberOfUsers ? numberOfUsers : "No users"}
  </div>
)
```

- And more!

## Update previous state

Update previous state (usually for an array, maybe an object)

```
const [arrayOfUsers, setArrayOfUsers] = useState();

useEffect(()=>{
    const newItem = {
      date: new Date(),
      message: "Have a great day."
    }

   setArrayOfUsers((prevState)=>{
     [newItem, ...prevState]
   })
},[numberOfUsers])
```

## State as Props

You can pass state as props to child components  
You can pass the property as a prop, which is read-only from inside the child component  
You can also pass the corresponding set state function as a prop and use the setState function inside the child componet to change the value of the parent's state  
Changing the state causes a rerender for any component that uses that state as props

More on this in the next class.

# Day 4: Props

## Form and list without components

## Refactor into components

## Refactor form: from single-input to multi-input form

In Form.js, add one more input to the JSX in the return statement
Connect this input to its own event handler
Make a piece of state for this input and for the previously existing input
Add a useEffect with these two pieces of state in the dependency array
Inside the useEffect, setFormData with the pieces of state as the values for keys
Add a useEffect with formData in the dependency array
Inside that useEffect, console log formData

## Refactor list: from listing array of strings to array of objects

Just need to change List code to handle objects, not strings

## Add ability to delete item from list

In Form.js, to each object add an id (no need for an input, just add an id)
Can use uuid (https://www.npmjs.com/package/uuid)
In List.js, to each item in the list, add a delete button
Connect the delete button to a function (all items connect to the same function)
For each item in the list, change the key's value to the item's id
For the delete button inside each item, set an attribute equal to the id
Inside the item's event function, test it by console logging that item's id
Inside that same function, replace the console log with code that filters the state array to remote the object that has the id of the clicked element

## Change styles of button based on whether input has value or not

In Form.js, add a useEffect with a dependency array containing formData
In that useEffect, write conditional statements that check whether each key in formData has a value or not
For now, if all have a value, console log "enable", otherwise console log "disable"
Add a piece of state called isDisabled
Inside the useEffect with the conditionals, setIsDisabled(false) if form is complete, otherwise setIsEnabled(true)
In the styles for the button, add the piece of state to the class name
In the App.css file, add styles for disabled and enabled
In the html element, add disabled is equal to the piece of state

## Clear the formData when it's submitted

In Form.js, to the button's event function, setFormData({}) and set each piece of state to empty string
To each input, set it's value equal to the corresponding piece of state

## EXTRA

## Select favorite

## Loaders and spinners
