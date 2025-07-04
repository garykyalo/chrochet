import "bootstrap/dist/css/bootstrap.min.css";

const navItems = [
  { name: "Patterns", path: "/patterns" },
  { name: "Shop Items", path: "/shop" },
  { name: "Hire Talent", path: "/hire" },
  { name: "Tutorials", path: "/tutorials" },
  { name: "Community", path: "/community" },
  { name: "Events", path: "/events" },
];

const Header = () => {
  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container-fluid ">
        <a className="navbar-brand fw-bold" href="/">
          🧶 CraftConnect
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-3"  id="navbarMain">
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
