import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client import

const App = () => {
  return (
    <div>This is the app!</div>
  );
};

// assignment info was for older version of react
// this is using newer version
// https://react.dev/reference/react-dom/client/createRoot

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// 3. Render your app using the root object
root.render(<App />);
