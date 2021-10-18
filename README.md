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

## Lifting State Up
