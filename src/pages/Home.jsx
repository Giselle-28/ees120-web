import useScrollFade from "../hooks/useScrollFade";
import Institucional from "../components/Institucional";
import Noticias from "../components/Noticias";
import Calendario from "../components/Calendario";
import Galeria from "../components/Galeria";
import Contacto from "../components/Contacto";

export default function Home() {
  const refBienvenida = useScrollFade();

  return (
    <>
      {/* ======================
          SECCIÓN BIENVENIDA
      ====================== */}
      <section
        className="bienvenida-section fade-in"
        id="bienvenida"
        ref={refBienvenida}
      >
        <div className="container">
          <div className="bienvenida-content">
            <h2 className="bienvenida-title">
              Bienvenidos a la Escuela de Educación Secundaria N° 120
            </h2>

            <p className="bienvenida-text">
              Acompañamos a las y los estudiantes en su formación integral,
              promoviendo valores, responsabilidad y compromiso con la comunidad,
              en un entorno de respeto, inclusión y aprendizaje continuo.
            </p>
          </div>
        </div>
      </section>

      <section className="valores-section">
  <div className="container">
    <div className="row g-4 text-center">
      <div className="col-md-4">
        <i className="bi bi-people-fill valor-icon"></i>
        <h5>Comunidad</h5>
        <p>Trabajo conjunto entre estudiantes, familias y docentes.</p>
      </div>

      <div className="col-md-4">
        <i className="bi bi-book-half valor-icon"></i>
        <h5>Educación</h5>
        <p>Aprendizaje significativo y formación integral.</p>
      </div>

      <div className="col-md-4">
        <i className="bi bi-shield-check valor-icon"></i>
        <h5>Compromiso</h5>
        <p>Responsabilidad y participación activa.</p>
      </div>
    </div>
  </div>
</section>


     {/* ======================
    SECCIÓN CARDS
====================== */}
<section className="home-section py-5">
  <div className="container">
    <div className="row g-4">

      {/* OFERTA ACADÉMICA */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="home-card">
          <i className="bi bi-book-fill home-card-icon"></i>

          <h4>Oferta Académica</h4>

          <p>
            Propuestas educativas orientadas a la formación integral,
            el pensamiento crítico y la continuidad de los estudios.
          </p>

          <a href="#institucional" className="card-link">
            Leer más →
          </a>
        </div>
      </div>

      {/* NOTICIAS Y EVENTOS */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="home-card">
          <i className="bi bi-newspaper home-card-icon"></i>

          <h4>Noticias y Eventos</h4>

          <p>
            Información institucional, actividades escolares,
            actos, salidas educativas y fechas importantes.
          </p>

          <a href="#noticias" className="card-link">
            Ver noticias →
          </a>
        </div>
      </div>

      {/* COMUNIDAD EDUCATIVA */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="home-card">
          <i className="bi bi-people-fill home-card-icon"></i>

          <h4>Comunidad Educativa</h4>

          <p>
            Un espacio de participación para estudiantes, familias
            y docentes, basado en el respeto y el trabajo conjunto.
          </p>

          <a href="#institucional" className="card-link">
            Conocer más →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ======================
          SECCIÓN INSTITUCIONAL
      ====================== */}
      <Institucional />

      {/* ======================
          SECCIÓN NOTICIAS
      ====================== */}
      <div id="noticias">
        <Noticias />
      </div>

      {/* ======================
          SECCIÓN CALENDARIO
      ====================== */}
      <Calendario />

      {/* ======================
          SECCIÓN GALERÍA
      ====================== */}
      <Galeria />

      {/* ======================
    SECCIÓN CONTACTO
====================== */}
<Contacto />
    </>
  );
}
