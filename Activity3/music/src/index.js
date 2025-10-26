import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client import
import App from './App'

// assignment info was for older version of react
// this is using newer version
// https://react.dev/reference/react-dom/client/createRoot

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

root.render(<App />);


