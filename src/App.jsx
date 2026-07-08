// file UTAMA — mengatur halaman mana yang tampil
import { useState, useEffect } from "react";

// import semua bagian halaman
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import RoleFit from "./components/sections/RoleFit";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import PortfolioDeck from "./components/deck/PortfolioDeck";

// halaman utama — semua section berurutan dari atas ke bawah
function MainSite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <RoleFit />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  // ini untuk routing halaman /deck (PDF deck) vs halaman utama /
  const [route, setRoute] = useState(window.location.pathname);

  // kalau user klik tombol back/forward browser, route ikut berubah
  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // kalau route = /deck, tampilkan portofolio deck (PDF)
  if (route === "/deck") {
    return <PortfolioDeck />;
  }

  // selain itu, tampilkan halaman utama
  return <MainSite />;
}

export default App;
