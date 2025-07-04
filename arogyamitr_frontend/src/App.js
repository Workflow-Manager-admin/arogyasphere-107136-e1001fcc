import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import WellnessPath from './pages/WellnessPath';
import Diet from './pages/Diet';
import Fitness from './pages/Fitness';
import Mindfulness from './pages/Mindfulness';
import Sleep from './pages/Sleep';
import ConsciousChoices from './pages/ConsciousChoices';
import CareConnect from './pages/CareConnect';
import SupportGroups from './pages/SupportGroups';
import EducationHub from './pages/EducationHub';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

import './App.css';

/*
PUBLIC_INTERFACE
Root App entry point for ArogyaMitr, managing theme, app-level routing, and persistent layout.
*/
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Example logic for private route (replace with proper auth logic later)
  const isAuthenticated = true; // TODO: replace with real auth state

  return (
    <Router>
      <Routes>
        {/* Auth routes (public) */}
        <Route path="/login" element={<Login toggleTheme={toggleTheme} />} />

        {/* App routes (protected/private) */}
        <Route
          path="/*"
          element={
            isAuthenticated
              ? <Layout toggleTheme={toggleTheme} theme={theme}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/wellness-path" element={<WellnessPath />} />
                    <Route path="/diet" element={<Diet />} />
                    <Route path="/fitness" element={<Fitness />} />
                    <Route path="/mindfulness" element={<Mindfulness />} />
                    <Route path="/sleep" element={<Sleep />} />
                    <Route path="/conscious-choices" element={<ConsciousChoices />} />
                    <Route path="/care-connect" element={<CareConnect />} />
                    <Route path="/support-groups" element={<SupportGroups />} />
                    <Route path="/education-hub" element={<EducationHub />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<Dashboard />} />
                  </Routes>
                </Layout>
              : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
