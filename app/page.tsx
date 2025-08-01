"use client";

import { useState, useMemo } from "react";
import { useDoctors } from "../context/DoctorsContext";
import DoctorList from "../components/DoctorList";
import { motion } from "framer-motion";

export default function Home() {
  const { doctors } = useDoctors();
  const [search, setSearch] = useState("");

  const filteredDoctors = useMemo(() => {
    const term = search.toLowerCase();
    return doctors.filter(
      (doc) =>
        doc.name.toLowerCase().includes(term) ||
        doc.specialization.toLowerCase().includes(term)
    );
  }, [doctors, search]);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-green-800 mb-4 tracking-tight">
            Find Your Healthcare Specialist
          </h1>
          <p className="text-gray-600 text-lg">
            Search and book appointments with trusted professionals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or specialization"
              className="w-full px-5 py-4 pr-12 rounded-xl border border-green-300 bg-white shadow-md focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-700 placeholder-gray-400 transition"
            />
            {/* Optional Search Icon */}
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 105.293 14.293l5.147 5.147-1.414 1.414-5.147-5.147A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <DoctorList doctors={filteredDoctors} />
        </motion.div>
      </div>
    </main>
  );
}