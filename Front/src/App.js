import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'antd';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from "axios";
import "./App.css";

/* Component */
import Header from './Component/Header';
import Footer from './Component/Footer';

/* Page */
import Home from './Page/HomePage/Home';
import News from './Page/NewsPage/News';
import Activity from './Page/ActivityPage/Activity';
import ResearchArea from './Page/ResearchAreaPage/ResearchArea';
import PI from './Page/PIPage/PI';
import Students from './Page/StudentsPage/Students';
import GraduateStudents from './Page/StudentsPage/GraduateStudents';
import UndergraduateStudents from './Page/StudentsPage/UndergraduateStudents';
import Alumni from './Page/StudentsPage/Alumni';
import Projects from './Page/ProjectsPage/Projects';
import System from './Page/ProjectsPage/Projects';
import Publications from './Page/PublicationsPage/Publications';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/news' component={News} />
        <Route exact path='/activity' component={Activity} />
        <Route exact path='/researchArea' component={ResearchArea} />
        <Route exact path='/pi' component={PI} />
        <Route exact path='/students' component={Students} />
        <Route exact path='/graduateStudents' component={GraduateStudents} />
        <Route exact path='/undergraduateStudents' component={UndergraduateStudents} />
        <Route exact path='/alumni' component={Alumni} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/system' component={System} />
        <Route exact path='/publications' component={Publications} />
      </Switch>
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;