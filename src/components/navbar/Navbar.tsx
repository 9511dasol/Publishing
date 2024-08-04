import React from "react";
import "boxicons/css/boxicons.min.css";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <i
          style={{ color: "black" }}
          className="bx bxs-bell bx-tada-hover bx-sm"
        ></i>
        <span className="wp">Web Publishing</span>
      </div>
      {/* <div className="navbar__link">
        <ul>
          <li>s</li>
          <li>a</li>
          <li>s</li>
        </ul>
      </div> */}
      <div className="navbar__return">
        <ul>
          <li>
            <a href="https://github.com/9511dasol">
              <i className="bx bxl-github bx-sm" />
            </a>
          </li>
          <li>
            <a href="https://velog.io/@9511dasol/posts">
              <i className="bx bx-bold bx-sm" />
            </a>
          </li>
          <li>
            <a href="https://9511dasol.github.io/portfolio/">
            <i className='bx bxs-user bx-sm' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
