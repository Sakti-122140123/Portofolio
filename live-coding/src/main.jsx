// ini file START — kode pertama yang dijalankan saat web dibuka
import { StrictMode } from "react"; // bantuan React untuk deteksi error
import { createRoot } from "react-dom/client"; // menghubungkan React ke HTML
import "./index.css"; // file styling (Tailwind + custom CSS)
import App from "./App"; // komponen utama web

// render (tampilkan) App ke dalam tag <div id="root"> di index.html
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
