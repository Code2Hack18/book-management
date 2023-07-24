import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import Header from './Header';
import Payment from './components/Payment';
import { useLocation } from 'react-router-dom';
import Api from './components/Api';


export default function App(){

  const location = useLocation()
  console.log(location,'location')
  const [login ,setLogin] = useState(false);
  if(login == true){
    return <HomePage/>
  }

return(
  <>
        {location?.pathname != '/homepage/payment' &&
       <Header/>
        }
       <Routes>

        <Route path="/" element={<RegisterPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="*" element={<ErrorPage />} />
          <Route exact path="/homepage/payment/api" element={<Api/>} />
          <Route exact path="/homepage/payment" element={<Payment/>} />
    
        </Routes> 
             
  </>
)
} 