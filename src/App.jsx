import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* ======================
          NAVBAR INSTITUCIONAL
      ====================== */}
      <Navbar />

      {/* ======================
          CONTENIDO PRINCIPAL
      ====================== */}
      <main role="main" id="main-content">
        {/* HERO INSTITUCIONAL */}
        <Hero />

        {/* HOME */}
        <Home />
      </main>

      {/* ======================
          FOOTER INSTITUCIONAL
      ====================== */}
      <Footer />
    </>
  );
}
