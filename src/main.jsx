import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Projects from './components/Projects.jsx';
import Project from './pages/Project.jsx';
import Resume from './pages/Resume.jsx';
import Login from './pages/Login.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/home',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/projects',
    element: <Projects />,
    children: [
      {
        path: '/projects/:projectId',
        element: <Project />
      }
    ],
    errorElement: <Error />
  },
  {
    path: '/resume',
    element: <Resume />,
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)