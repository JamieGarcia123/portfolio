import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './pages/projects/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import EducationPage  from "./pages/education/index";
import HomePage from './pages/home/index';
import WorkExperience from './pages/work-experience';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/" element={<HomePage/>}/>
      <Route  path="/projects" element={<Projects/>}/>
      <Route path="/education" element={<EducationPage/>}/>
      <Route path="/work-experience" element={<WorkExperience/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
