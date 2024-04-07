import React from "react";

import { Link } from "react-router-dom";
import Banner from "../assets/banner.jpg";
import "../css/Hm.css";
import Footer from "./Footer";

const Home = () => {
  return (
    
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1> The DELicia</h1>
          <p> order our top delicious foods</p>
        <p></p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
        
      </div>
      
    
  );
};

export default Home;