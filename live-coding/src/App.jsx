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
import DeckWebdev from "./components/deck/DeckWebdev";
import DeckQa from "./components/deck/DeckQa";

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
  // ini untuk routing halaman /deck-webdev, /deck-qa vs halaman utama /
  const [route, setRoute] = useState(window.location.pathname);

  // kalau user klik tombol back/forward browser, route ikut berubah
  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // routing untuk kedua deck
  if (route === "/deck-webdev") {
    return <DeckWebdev />;
  }
  if (route === "/deck-qa") {
    return <DeckQa />;
  }

  // backward compat: /deck lama redirect ke /deck-webdev
  if (route === "/deck") {
    window.location.replace("/deck-webdev");
    return null;
  }

  // selain itu, tampilkan halaman utama
  return <MainSite />;
}

export default App;
