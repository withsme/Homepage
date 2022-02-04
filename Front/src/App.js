import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from "axios";
import "./App.css";

/* Component */
import Header from './Component/Header';
import Footer from './Component/Footer';

/* Page */
import Home from './Page/HomePage/Home';

function App() {
  return (
    <>
      <Header /> 
      <Home />
      <Footer />
    </>
  );
}

export default App;