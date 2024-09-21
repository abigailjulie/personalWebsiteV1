import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import ProjectsSoft from "./pages/ProjectsSoft";
import ProjectsArch from "./pages/ProjectsArch";
import OMH from "./pages/OMH";
import Penn1 from "./pages/Penn1";
import ThirdPoint from "./pages/ThirdPoint";
import CampusCanal from "./pages/CampusCanal";
import Contact from "./pages/Contact";
import Auth from "./Auth";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer, Slide } from "react-toastify";
import "./App.css";

const TIMEOUT = 15 * 60 * 1000; // 15 minutes

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loginCount, setLoginCount] = useState(0);

  return (
    <ErrorBoundary>
      <Router>
        <AppRoutes
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          loginCount={loginCount}
          setLoginCount={setLoginCount}
        />
      </Router>
    </ErrorBoundary>
  );
};

const AppRoutes = ({ authenticated, setAuthenticated, loginCount, setLoginCount }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const lastActivity = localStorage.getItem("lastActivity");
      const isAuthenticated = localStorage.getItem("authenticated") === "true";

      if (isAuthenticated) {
        if (lastActivity && (Date.now() - parseInt(lastActivity)) > TIMEOUT) {
          localStorage.removeItem("authenticated");
          localStorage.removeItem("lastActivity");
          setAuthenticated(false);
        } else {
          localStorage.setItem("lastActivity", Date.now().toString());
          setAuthenticated(true);
        }
      }
    };

    checkAuth();

    const handleActivity = () => {
      if (authenticated) {
        localStorage.setItem("lastActivity", Date.now().toString());
      }
    };

    window.addEventListener("click", handleActivity);
    window.addEventListener("keypress", handleActivity);

    return () => {
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("keypress", handleActivity);
    };
  }, [authenticated, setAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("lastActivity");
    setAuthenticated(false);
    navigate("/");
  };

  useEffect(() => {
    if (loginCount >= 5) {
      navigate('/contact');
      setLoginCount(0);
    }
  }, [loginCount, navigate]);

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={authenticated ? <Home /> : <Auth onAuthenticated={() => {
          setAuthenticated(true);
          setLoginCount(prev => prev + 1);
        }} />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} authenticated={authenticated} redirectPath="/home" />} />
        <Route path="/projects/software" element={<ProtectedRoute element={<ProjectsSoft />} authenticated={authenticated} redirectPath="/projects/software" />} />
        <Route path="/projects/architecture" element={<ProtectedRoute element={<ProjectsArch />} authenticated={authenticated} redirectPath="/projects/architecture" />} />
        <Route path="/projects/architecture/OMH" element={<ProtectedRoute element={<OMH />} authenticated={authenticated} redirectPath="/projects/architecture/OMH" />} />
        <Route path="/projects/architecture/Penn1" element={<ProtectedRoute element={<Penn1 />} authenticated={authenticated} redirectPath="/projects/architecture/Penn1" />} />
        <Route path="/projects/architecture/ThirdPoint" element={<ProtectedRoute element={<ThirdPoint />} authenticated={authenticated} redirectPath="/projects/architecture/ThirdPoint" />} />
        <Route path="/projects/architecture/CampusCanal" element={<ProtectedRoute element={<CampusCanal />} authenticated={authenticated} redirectPath="/projects/architecture/CampusCanal" />} />
        {/* Unauthenticated route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Slide"
      />
    </div>
  );
};

export default App;
