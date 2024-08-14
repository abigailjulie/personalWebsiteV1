import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Scrollable from './pages/Scrollable.jsx';
import axios from 'axios';
import Projects from './pages/Projects.jsx';
import Login from './pages/Login.jsx';
import Error from './pages/Error.jsx';
import Contact from './pages/Contact.jsx';
import { Toaster } from 'react-hot-toast';
import ProjectsArch from './pages/ProjectsArch.jsx';
import CampusCanal from './pages/CampusCanal.jsx';
import Penn1 from './pages/Penn1.jsx';
import ThirdPoint from './pages/ThirdPoint.jsx';
import OMH from './pages/OMH.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff'
          }
        }} />
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Scrollable />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/architecture' element={<ProjectsArch />} />
          <Route path='/projects/architecture/CampusCanal' element={<CampusCanal />} />
          <Route path='/projects/architecture/Penn1' element={<Penn1 />} />
          <Route path='/projects/architecture/OMH' element={<OMH />} />
          <Route path='/projects/architecture/ThirdPoint' element={<ThirdPoint />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </>
  )
}

export default App;
