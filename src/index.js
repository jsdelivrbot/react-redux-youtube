import React from 'react';
//To render components onto the DOM, have to use react-dom
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//Youtube Data Browser API Key
const API_KEY = 'AIzaSyDZ0QhwCDWi7ZHcFLKIUyUA0yZf2AaLMw8';

const App = () => {
  return (<div>
    <SearchBar />
  </div>
  );
}

//JSX returns an instance of the class component - instances
//are created via React.createElement implicitely in the lib.  By passing
//render a JSX syntax it instantiates the class
//ReactDom.render takes a 2nd argument which is a reference to a DOM node on the page
ReactDOM.render(<App />, document.querySelector('.container'));