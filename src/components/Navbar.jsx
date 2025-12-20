import { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Institucional", href: "#institucional" },
    { label: "Galeria", href: "#galeria" },
    { label: "Noticias", href: "#noticias" },
    { label: "Calendario", href: "#calendario" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-navbar ${
        scrolled ? "navbar-solid" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#inicio">
          <img src={logo} alt="Logo EES 120" height="40" className="me-2" />
          <span>Escuela Secundaria N° 120</span>
        </a>

        {/* HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto gap-lg-3">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link nav-link-custom" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
