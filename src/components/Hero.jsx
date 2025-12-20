import { useEffect, useState } from "react";
import "../styles/Hero.css";

import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="inicio">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay">
        <div className="hero-content container">
          <img
            src={hero1}
            alt="Escuela Secundaria N°120"
            className="hero-logo"
          />

          <h1 className="hero-title">
            Escuela de Educación Secundaria N° 120
          </h1>

          <p className="hero-subtitle">
            Formando estudiantes críticos, solidarios y comprometidos con su comunidad
          </p>

          <a href="#institucional" className="hero-btn">
            Conocer más
          </a>

          <span className="hero-trust">
            Formando estudiantes desde 1980
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
