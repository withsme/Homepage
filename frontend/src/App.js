import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Component */
import Header from './Component/Header';

/* Page */
import Home from './Page/HomePage/Home';
import News from './Page/NewsPage/News';
import Seminar from './Page/SeminarPage/Seminar';
import Activity from './Page/ActivityPage/Activity';
import ResearchArea from './Page/ResearchAreaPage/ResearchArea';
import PI from './Page/PIPage/PI';
import GraduateStudents from './Page/StudentsPage/GraduateStudents';
import UndergraduateStudents from './Page/StudentsPage/UndergraduateStudents';
import Alumni from './Page/StudentsPage/Alumni';
import Projects from './Page/ProjectsPage/Projects';
import System from './Page/ProjectsPage/System';
import Publications from './Page/PublicationsPage/Publications';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/seminar' element={<Seminar />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/researchArea' element={<ResearchArea />} />
        <Route path='/pi' element={<PI />} />
        <Route path='/graduateStudents' element={<GraduateStudents />} />
        <Route path='/undergraduateStudents' element={<UndergraduateStudents />} />
        <Route path='/alumni' element={<Alumni />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/system' element={<System />} />
        <Route path='/publications' element={<Publications />} />
      </Routes>
    </Router>
  );
}

export default App;