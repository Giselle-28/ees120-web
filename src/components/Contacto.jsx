import "../styles/global.css";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <h2 className="section-title text-center">Contacto</h2>

        <div className="row g-4 align-items-stretch">
          {/* Información institucional */}
          <div className="col-md-5">
            <div className="contacto-info">
              <h5>Escuela de Educación Secundaria N° 120</h5>

              <p>
                 <i className="bi bi-geo-alt-fill me-2"></i>
                <strong>Dirección:</strong><br />
                Calle Falsa 123, Localidad, Provincia
              </p>

              <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                <strong>Teléfono:</strong><br />
                (011) 1234-5678
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <strong>Email:</strong><br />
                escuela120@abc.gob.ar
              </p>

              <p>
                 <i className="bi bi-clock-fill me-2"></i>
                <strong>Horario:</strong><br />
                Lunes a Viernes de 8:00 a 17:00 hs
              </p>
            </div>
          </div>

         
          {/* MAPA */}
<div className="col-md-7">
  <div className="contacto-mapa">
    <iframe
      title="Ubicación Escuela de Educación Secundaria N° 120"
      src="https://www.google.com/maps?q=Escuela%20Secundaria%20N°120%20Buenos%20Aires&output=embed"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
<a
  href="https://www.google.com/maps?q=Escuela+Secundaria+N°120+Buenos+Aires"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-secondary mt-3"
>
  <i className="bi bi-map"></i> Cómo llegar
</a>


        </div>
      </div>
    </section>
  );
}
