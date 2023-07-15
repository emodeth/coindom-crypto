import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [toggle, setToggle] = useState(false);

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
    <>
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

      <nav className="navbar__mobile">
        <h1>COINDOM</h1>
        <button onClick={() => setToggle(true)}>
          <i class="fa-solid fa-bars-staggered hamburger-menu"></i>
        </button>
      </nav>

      <ul
        className={
          toggle ? "navbar__mobile-menu menu-up" : "navbar__mobile-menu"
        }
      >
        <button onClick={() => setToggle(false)}>
          <i class="fa-solid fa-xmark close-mobile"></i>
        </button>
        <li onClick={() => setToggle(false)}>Home</li>
        <li onClick={() => setToggle(false)}>Market</li>
        <li onClick={() => setToggle(false)}>Choose Us</li>
        <li onClick={() => setToggle(false)}>Join</li>
      </ul>
    </>
  );
}
