import Calendario from "../components/Calendario";

export default function CalendarioPage() {
  return (
    <>
      <header className="page-header">
        <h1>Calendario Escolar</h1>
        <p>Fechas importantes del ciclo lectivo</p>
      </header>

      <Calendario />
    </>
  );
}
