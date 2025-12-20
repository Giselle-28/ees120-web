import { useState } from "react";

export default function Galeria() {
  const [selected, setSelected] = useState(null);

  const imagenes = [
    { id: 1, categoria: "Actos" },
    { id: 2, categoria: "Viajes" },
    { id: 3, categoria: "Efemérides" },
    { id: 4, categoria: "Deportes" },
    { id: 5, categoria: "Actos" },
    { id: 6, categoria: "Viajes" }
  ];

  return (
    <section id="galeria" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Galería Institucional</h2>
          <p className="section-subtitle">
            Momentos compartidos en la vida escolar
          </p>
        </div>

        <div className="row g-3">
          {imagenes.map((img) => (
            <div className="col-6 col-md-4" key={img.id}>
              <img
                src={`https://picsum.photos/600/400?random=${img.id}`}
                alt={img.categoria}
                className="img-fluid rounded shadow gallery-img"
                onClick={() => setSelected(img.id)}
              />
            </div>
          ))}
        </div>

        {selected && (
          <div className="modal show d-block" onClick={() => setSelected(null)}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <img
                  src={`https://picsum.photos/1200/800?random=${selected}`}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
