import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import AppRoutes from './routes';
import Home from './Screens/Home/home';

const App = () => {
  return (
    <Router>
      <div>
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

