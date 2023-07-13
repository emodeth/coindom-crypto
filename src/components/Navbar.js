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
    <nav className={isSticky ? "navbar sticky-navbar" : "navbar"}>
      <div className="navbar-container">
        <a href="/">COINDOM</a>
        <ul>
          <li>Home</li>
          <li>Market</li>
          <li>Choose Us</li>
          <li>Join</li>
        </ul>

        <span className="icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-discord"></i>
        </span>
      </div>
    </nav>
  );
}
