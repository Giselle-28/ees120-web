import eventos from "../data/eventos.json";
import "../styles/calendario.css";

export default function Calendario() {
  return (
    <section className="calendario-section" id="calendario">
      <div className="container">
        <h2 className="section-title text-center">
          Calendario Institucional
        </h2>

        <div className="calendario-grid">
          {eventos.map((evento) => (
            <div key={evento.id} className={`evento-card ${evento.tipo}`}>
              <span className="evento-fecha">
                {new Date(evento.fecha).toLocaleDateString("es-AR", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>

              <h5 className="evento-titulo">{evento.titulo}</h5>

              <span className="evento-tipo">
                {evento.tipo.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

