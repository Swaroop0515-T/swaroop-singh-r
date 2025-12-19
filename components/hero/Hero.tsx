"use client";

import { useState } from "react";
import { FileText, X } from "lucide-react";
import { profile } from "../../data/profile";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl text-gray-400">
              {profile.role}
            </p>

            <p className="mt-6 max-w-2xl text-gray-300">
              {profile.summary}
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              {/* Download CV */}
              <a
                href="/Swaroop Singh R Resume.pdf"
                download
                className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
              >
                Download CV
              </a>

              {/* View CV Popup */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
              >
                <FileText size={18} />
                View CV
              </button>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-900 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – PROFILE IMAGE */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Swaroop Singh R"
                className="opacity-60 w-90 h-90 object-cover rounded-2xl border border-gray-800 shadow-xl bg-gradient-to-r from-purple-500 to-blue-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </section>

      {/* CV POPUP MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex items-center justify-center">
          <div className="bg-black rounded-xl w-[90%] md:w-[70%] h-[85%] relative border border-gray-800">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={28} />
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Swaroop Singh R Resume.pdf"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
