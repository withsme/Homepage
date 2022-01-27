import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from "axios";
import "./App.css";

/* Component */
import Header from './Component/Header';
import Footer from './Component/Footer';

/* Page */
import Main from './Page/Main';
import About from './Page/About';
import Professor from './Page/Professor';
import Projects from './Page/Projects';
import Publication from './Page/Publication';
import Teaching from './Page/Teaching';
import Activity from './Page/Activity';
import Board from './Page/Board';
import Contact from './Page/Contact';

function App() {
  return (
    <>
      <Header /> 
      <Main />
      <Footer />
    </>
  );
}

export default App;