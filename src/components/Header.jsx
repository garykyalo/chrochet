import { useState } from "react";

const navItems = [
  { name: "Patterns", path: "/patterns" },
  { name: "Shop Items", path: "/shop" },
  { name: "Hire Talent", path: "/hire" },
  { name: "Tutorials", path: "/tutorials" },
  { name: "Community", path: "/community" },
  { name: "Events", path: "/events" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            🧶 CraftConnect
          </a>

        {/* Toggler button visible only on small screens */}
<button
  className="navbar-toggler d-lg-none"
  type="button"
  onClick={toggleNavbar}
  aria-expanded={isOpen}
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

          <div className="d-none d-lg-flex">
  {/* Nav items visible on large screens and up */}
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {navItems.map((item, index) => (
      <li key={index} className="nav-item">
        <a className="nav-link" href={item.path}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
      <div className="d-flex">
              <a className="btn btn-outline-primary me-2" href="/login">
                Sign in
              </a>
              <a className="btn btn-primary" href="/register">
                Sign Up
              </a>
            </div>
</div>      
        </div>
      </nav>
    </div>
  );
};

export default Header;
