import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Profile from './Profile';

// Main App component that sets up the routes for the application
// It uses React Router to define different paths and their corresponding components
// The application has routes for login, registration, home, and profile pages
// Each route renders a specific component when the path matches
// The Login component is rendered at the root path, while other components are rendered at their respective paths


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
