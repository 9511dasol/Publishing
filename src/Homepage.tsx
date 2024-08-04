import React from "react";
import "./Homepage.css"
import Pub1 from "./components/pub1/Pub1";
import Navbar from "./components/navbar/Navbar";
function Homepage() {
  return (
    <div className="main">
      <div className="navbar"><Navbar/></div>
      <div className="publishing"><Pub1 /></div>
    </div>
  );
}

export default Homepage;
