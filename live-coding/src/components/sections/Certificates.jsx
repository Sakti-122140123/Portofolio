import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { certificates } from "../../data/skills";

// warna tab untuk tiap kategori
const categoryColors = {
  Dicoding: "bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-300",
  "Teaching Assistant": "bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-300",
  Organization: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-300",
  "Seminars & Workshops": "bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-300",
  Others: "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300",
};

const categories = ["Dicoding", "Teaching Assistant", "Organization", "Seminars & Workshops", "Others"];

// encode biar file dengan spasi tetap bisa diakses
function encodePath(path) {
  return path
    .split("/")
    .map(encodeURIComponent)
    .join("/")
    .replace(/%2F/g, "/");
}

function CertificateCard({ cert, index }) {
  const fileUrl = encodePath(cert.path);
  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(cert.path);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="p-4 bg-surface rounded-xl border border-border hover:border-accent/30 transition-colors"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent-lighter flex items-center justify-center shrink-0 mt-0.5">
          <FileText size={16} className="text-accent" strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-text mb-1.5 leading-snug line-clamp-2">
            {cert.name}
          </h3>
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-hover transition-colors font-medium"
          >
            <ExternalLink size={11} />
            {isImage ? "View Image" : "Open PDF"}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const [activeTab, setActiveTab] = useState("Dicoding");

  if (!certificates || certificates.length === 0) return null;

  const filtered = certificates.filter((c) => c.category === activeTab);

  return (
    <section id="certificates" className="section-padding bg-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
            Certificates & Programs
          </h2>
          <p className="text-sm text-text-muted mb-8 max-w-2xl">
            Professional certificates from Dicoding, academic assistantships,
            organizational roles, seminars, and other programs.
          </p>

          {/* tab kategori */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => {
              const count = certificates.filter((c) => c.category === cat).length;
              const active = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${
                    active
                      ? categoryColors[cat] + " shadow-sm"
                      : "bg-surface text-text-secondary border-border hover:border-accent/30"
                  }`}
                >
                  {cat}
                  <span className="ml-1.5 opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          {/* grid sertifikat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((cert, i) => (
                <CertificateCard
                  key={cert.name + cert.category}
                  cert={cert}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
