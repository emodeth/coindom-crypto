import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(function () {
    function handleSticky() {
      if (window.scrollY >= 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleSticky);
  });

  return (
    <nav className={isSticky ? "navbar sticky-navbar" : "navbar"} id="navbar">
      <div className="navbar-container">
        <a href="/">COINDOM</a>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#market-table">Market</a>
          </li>
          <li>
            <a href="#choose-us">Choose Us</a>
          </li>
          <li>
            <a href="#join-us">Join</a>
          </li>
        </ul>

        <span className="icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-discord"></i>
        </span>
      </div>
    </nav>
  );
}
