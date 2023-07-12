export default function Navbar() {
  return (
    <nav className="navbar">
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
