import noticias from "../data/noticias.json";

export default function Noticias() {
  return (
    <section className="noticias-section py-5" id="noticias">
      <div className="container">
        {/* TÍTULO */}
        <div className="text-center mb-5">
          <h2 className="section-title">Noticias y Eventos</h2>
          <p className="section-subtitle">
            Mantente informado sobre la actualidad institucional
          </p>
        </div>

        {/* GRID */}
        <div className="row g-4">
          {noticias.map((noticia) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={noticia.id}
            >
              <article className="noticia-card">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="noticia-img"
                />

                <div className="noticia-body">
                  <span className="noticia-fecha">
                    {new Date(noticia.fecha).toLocaleDateString("es-AR")}
                  </span>

                  <h5>{noticia.titulo}</h5>

                  <p>{noticia.descripcion}</p>

                  <a href="#" className="card-link">
                    Leer más →
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
