import React from 'react';
//To render components onto the DOM, have to use react-dom
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Home</div>;
}

//JSX returns an instance of the class component - instances
//are created via React.createElement implicitely in the lib.  By passing
//render a JSX syntax it instantiates the class
//ReactDom.render takes a 2nd argument which is a reference to a DOM node on the page
ReactDOM.render(<App />, document.querySelector('.container'));