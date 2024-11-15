import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="nav-logo">
          Portfolio
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 