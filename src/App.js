import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import Header from './Header';
export default function App(){
  const [login ,setLogin] = useState(false);
  if(login == true){
    return <RegisterPage/>
  }

return(
  <>
       <Header/>
       <Routes>

        <Route path="/" element={<HomePage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/HomePage" element={<HomePage />} />
          <Route exact path="*" element={<ErrorPage />} />
    
        </Routes>        
  </>
)
} 