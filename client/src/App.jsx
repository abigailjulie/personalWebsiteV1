import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";
import ProjectsArch from "./pages/ProjectsArch.jsx";
import CampusCanal from "./pages/CampusCanal.jsx";
import Penn1 from "./pages/Penn1.jsx";
import ThirdPoint from "./pages/ThirdPoint.jsx";
import OMH from "./pages/OMH.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { Toaster } from "react-hot-toast";
import './App.css';

const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export default function App() {
  const [redirectToContact, setRedirectToContact] = useState(false);

  useEffect(() => {
    const handleUserActivity = () => {
      // Reset inactivity timeout on user activity
      clearTimeout(inactivityTimeout);
      setRedirectToContact(false); // Reset redirect flag on activity
      startInactivityTimer();
    };

    const startInactivityTimer = () => {
      inactivityTimeout = setTimeout(() => {
        setRedirectToContact(true);
      }, INACTIVITY_TIMEOUT);
    };

    let inactivityTimeout = setTimeout(() => {
      setRedirectToContact(true);
    }, INACTIVITY_TIMEOUT);

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    // Cleanup event listeners on component unmount
    return () => {
      clearTimeout(inactivityTimeout);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
    };
  }, []);

  if (redirectToContact) {
    return <Navigate to="/contact" />;
  }

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff"
          }
        }}
      />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/architecture" element={<ProjectsArch />} />
          <Route path="/projects/architecture/CampusCanal" element={<CampusCanal />} />
          <Route path="/projects/architecture/Penn1" element={<Penn1 />} />
          <Route path="/projects/architecture/OMH" element={<OMH />} />
          <Route path="/projects/architecture/ThirdPoint" element={<ThirdPoint />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}