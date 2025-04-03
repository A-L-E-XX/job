import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Routes */}
          <Route
            path="/signup"
            element={
              <ErrorBoundary>
                <Signup />
              </ErrorBoundary>
            }
          />
          <Route
            path="/login"
            element={
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            }
          />

          {/* Protected Route - Profile page */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
