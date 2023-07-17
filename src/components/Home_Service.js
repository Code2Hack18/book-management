import React from 'react';
import {FiTruck} from "react-icons/fi";
import {FaAmazonPay, FaHandshake} from "react-icons/fa";
import "../css/Home_Services.css";

export default function Home_Service() {
  return (
    <>
        <div className="flex-container">
          <div className="d1">
            <div className="img-dd"><FiTruck className='immg'/></div>
            <div className="text-dd">
              <div className="textt-d1"><h3>Quick Dilivery</h3></div>
              <div className="textt-d12"></div>
            </div>
          </div>

          <div className="d1">
            <div className="img-dd"><FaAmazonPay  className='immg'/></div>
            <div className="text-dd">
              <div className="textt-d1"><h3>Pay with Easy</h3></div>
              <div className="textt-d12"></div>
            </div>
          </div>

          <div className="d1">
            <div className="img-dd"><FaHandshake className='immg'/></div>
            <div className="text-dd">
              <div className="textt-d1"><h3>Best Deal</h3></div>
              <div className="textt-d12"></div>
            </div>
          </div>
      </div>
    </>
  )
}
