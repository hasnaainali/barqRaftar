import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import BusinessSuite from './components/BusinessSuite';
import COD from './components/COD';
import Financing from './components/Financing';
import TrackOrder from './components/TrackOrder';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Banner />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />

            <Route path="/signup" element={<SignupForm />} />
            <Route path="/cod" element={<COD />} />
            <Route path="/business-suite" element={<BusinessSuite />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/track-order" element={<TrackOrder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
