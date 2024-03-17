### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a javaScript frontend framework and it use to render single page UI
 

- What is Babel?
Babel is used to transform JSX code into regular JavaScript code. 

- What is JSX?
JSX is a javaScript syntax extension that allows us to write HTML 


- How is a Component created in React?
React component is created through function

- What are some difference between state and props?
props are immutable and state are mutable.

- What does "downward data flow" refer to in React?
data flow one way from top to bottom. From parent component to child component.

- What is a controlled component?
control component is where we let react state to control our input.

- What is an uncontrolled component?
uncontrol component are not control by react state.

- What is the purpose of the `key` prop when rendering a list of components?
the pursose of key is to track our listing 



- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
because the index of the array can be change.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is where we tell our component to do something after our component render
we can use useEffect to get data from an APi and we can use it for timer 



- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

- When would you use a ref? When wouldn't you use one?
text selection, managing focus

- What is a custom hook in React? When would you want to write one?
custom hook are reuseable data that we can use