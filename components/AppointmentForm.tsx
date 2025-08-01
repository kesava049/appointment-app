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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4 py-12">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl px-8 py-10 space-y-8 border border-green-200">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-green-700">Book Appointment</h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill in your details to schedule your visit
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md border border-red-300">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Patient Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              />
            </div>
            <div>
              <label htmlFor="datetime" className="block text-sm font-semibold text-gray-700">
                Date & Time
              </label>
              <input
                id="datetime"
                type="datetime-local"
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 shadow-md transition duration-200 ease-in-out"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}