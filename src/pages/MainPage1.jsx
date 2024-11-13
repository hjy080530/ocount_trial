import React from 'react';
import Header from '../components/Header'
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import { AuthProvider } from '../AuthContext';
import './MainPage1.css';
function MainPage() {


    return (
        <div className='container2'>
        <div className='element-sort'>
          <AuthProvider>
            <Header/>
            <Dashboard/>
          </AuthProvider>
          <Footer />
        </div>

      </div>
    );
}
export default MainPage;