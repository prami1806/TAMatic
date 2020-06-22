import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA=[
	{id:"todo-0",name:"19CS10001 Amit Trivedi",completed:false},
	{id:"todo-1",name:"19MF10045 Sonu Nigam",completed:false},
	{id:"todo-2",name:"19IM10041 Jerome Seinfield",completed:false},
	{id:"todo-3",name:"19EC10009 Jacob Peralta",completed:false},
];

ReactDOM.render(<App tasks={DATA}/>, document.getElementById('root'));

