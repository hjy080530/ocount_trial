import './App.css';
import React from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
    <div className='container'>
      <Header />
      <Dashboard />
    </div>
    </>
  )
}

export default App;
