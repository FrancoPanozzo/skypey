import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);

// Function to log our store state when it changes
function fancyLog() {
  console.log('%c Rendered with 👉 👉👇', 'background: purple; color: #fff');
  console.log(store.getState());
}
