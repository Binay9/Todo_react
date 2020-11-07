import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const DATA = [
  {id: "todo-0", name:"Eat", completed:true},
  {id: "todo-1", name:"Code", completed:false},
  {id: "todo-2", name:"Sleep", completed:false}
];

ReactDOM.render(
  <App tasks={DATA} />,
  document.getElementById('root')
);
