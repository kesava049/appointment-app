"use client";
import { useDoctors } from "../context/DoctorsContext";
import DoctorList from "../components/DoctorList";
import { useState, useMemo } from "react";

export default function Home() {
  const { doctors } = useDoctors();
  const [search, setSearch] = useState("");

  const filteredDoctors = useMemo(() => {
    const term = search.toLowerCase();
    return doctors.filter(
      doc =>
        doc.name.toLowerCase().includes(term) ||
        doc.specialization.toLowerCase().includes(term)
    );
  }, [doctors, search]);

  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Healthcare Doctors</h1>
      <input
        className="w-full border p-3 rounded mb-8"
        placeholder="Search by name or specialization"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <DoctorList doctors={filteredDoctors} />
    </main>
  );
}
