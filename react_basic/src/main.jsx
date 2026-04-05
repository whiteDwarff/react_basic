import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import AppCounter from './AppCounter.jsx';
// import App from './AppPure.jsx';
import App from './AppTodo';
import './index.css';

/*
  - id가 root인 element에 react component를 rendering 하겠다~
  - <App /> component는 최상위 root 
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
