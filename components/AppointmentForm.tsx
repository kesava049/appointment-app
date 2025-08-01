"use client";
import { useState } from "react";
import { AppointmentFormProps } from "@/actions/actions";


export default function AppointmentForm({ doctorId, onBookAction }: AppointmentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [datetime, setDatetime] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !datetime.trim()) {
      setError("All fields are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (new Date(datetime) <= new Date()) {
      setError("Please select a future date and time.");
      return;
    }
    setError("");
    onBookAction(name, email, datetime);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
      {error && <p className="text-red-600 font-semibold">{error}</p>}
      <input type="text" placeholder="Patient Name" value={name} onChange={e=>setName(e.target.value)} className="border p-2 rounded" />
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="border p-2 rounded" />
      <input type="datetime-local" value={datetime} onChange={e=>setDatetime(e.target.value)} className="border p-2 rounded" />
      <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Book Appointment</button>
    </form>
  );
}
