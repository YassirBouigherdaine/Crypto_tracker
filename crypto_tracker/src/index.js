import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.css';



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));

