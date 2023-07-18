import React from "react";
import "../css/HomePage.css";
import { FaBeer } from "react-icons/fa";
import Home_Service from "./Home_Service";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import SellersOption from "./SellersOption";

export default function HomePage() {
  return (
    <>
      <div className="main-div">
        <div className="img-1">
          <img
            src={require("../assets/hearder_m.png")}
            className="imgPNG"
            alt="fireSpot"
          ></img>
        </div>
        <div className="text-d">
          <div className="Text-1">BACK TO SCHOOL</div>
          <div className="txt1">
            <div className="special-txtx">SPECIAL&nbsp;</div>
            <div className="txt-off">50% OFF</div>
          </div>
          <div className="std-c">FOR OUR STUDENT COMMUNITY</div>
          <button className="bt">
            <h4>GET THE DEAL</h4>
          </button>
        </div>
      </div>
      <Home_Service />
      <div style={{ display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}}>
      <SellersOption />
        </div>
    </>

  );
}
