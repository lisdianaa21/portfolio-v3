import { useState } from "react";
import { certificates } from "../data/certificates";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Certificates
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative rounded-2xl overflow-hidden 
                       bg-white/5 backdrop-blur-md border border-white/10
                       shadow-lg transition-all duration-300
                       hover:scale-[1.05] hover:shadow-2xl"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-44 object-cover group-hover:scale-110 transition"
            />

            <div className="p-5">
              <span className="inline-block text-xs px-3 py-1 rounded-full 
                               bg-green-500/20 text-green-300 mb-3">
                Certified
              </span>

              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>

              {/* VIEW BUTTON */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-4 text-sm text-blue-400 hover:text-blue-300"
              >
                View Certificate →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCert && (
  <div
    onClick={() => setSelectedCert(null)}
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-[90%] max-w-2xl rounded-2xl overflow-hidden 
                 bg-[#0f0f0f] border border-white/10 shadow-2xl
                 animate-[fadeIn_0.2s_ease-out]"
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSelectedCert(null)}
        className="absolute top-3 right-3 w-9 h-9 rounded-full 
                   bg-white/10 hover:bg-red-500/80 text-white
                   flex items-center justify-center transition"
      >
        ✕
      </button>

      {/* IMAGE */}
      <div className="bg-black">
        <img
          src={selectedCert.image}
          alt={selectedCert.title}
          className="w-full max-h-[420px] object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-bold">{selectedCert.title}</h3>
        <p className="text-sm text-gray-300 mt-1">
          {selectedCert.issuer}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {selectedCert.date}
        </p>

        <button
          onClick={() => setSelectedCert(null)}
          className="mt-5 px-5 py-2 rounded-lg bg-white/10 
                     hover:bg-white/20 transition text-sm"
        >
          Kembali
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}

export default Certificates;