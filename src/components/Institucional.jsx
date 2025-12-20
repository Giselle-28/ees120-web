export default function Institucional() {
  return (
    <section id="institucional" className="institucional-section">
      <div className="container">
        <h2 className="section-title text-center">Institucional</h2>

        <div className="row g-5">
          <div className="col-md-6">
            <h4>Historia</h4>
            <p>
              La Escuela de Educación Secundaria N° 120 fue creada con el
              objetivo de brindar educación pública de calidad, acompañando
              a generaciones de estudiantes en su desarrollo académico y
              personal.
            </p>
          </div>

          <div className="col-md-6">
            <h4>Misión</h4>
            <p>
              Garantizar una formación integral, inclusiva y democrática,
              promoviendo valores, pensamiento crítico y compromiso social.
            </p>
          </div>
        </div>

        <div className="equipo-directivo mt-5">
          <h4>Equipo Directivo</h4>
          <ul>
            <li>Directora: Nombre Apellido</li>
            <li>Vicedirectora: Nombre Apellido</li>
            <li>Secretaría: Nombre Apellido</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
