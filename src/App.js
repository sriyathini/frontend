import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
 import PrivateRoute from './PrivateRoute';
import { Navigate } from 'react-router-dom';
import './App.css';
import Adminmenubar from './components/menubar/Adminmenubar';
 import Admindashboard from './components/admin/Admindashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Adminmenubar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Admindashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;