import './App.css';
import React from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className='container'>
      <Header />
      <Dashboard />
      <Footer />
    </div>
    </>
  )
}

export default App;
