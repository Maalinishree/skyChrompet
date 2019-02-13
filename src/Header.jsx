import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="style">Vazhga vaiyagham! Vazhga valamudan!!</li>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">PROGRAMS</a>
          </li>
          <li>
            <a href="#contact">ARIVAE THEIVAM</a>
          </li>
          <li>
            <a href="#about">DONATION</a>
          </li>
          <li>
            <a href="#about">TEAM</a>
          </li>
          <li>
            <a href="#about">CONTACT US</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
