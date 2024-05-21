import React from 'react';
import { ReactNotifications } from 'react-notifications-component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import AppRoutes from './routes';
import Home from './Screens/Home/home';

const App = () => {
  return (
    <Router>
      <div>
        <ReactNotifications />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

