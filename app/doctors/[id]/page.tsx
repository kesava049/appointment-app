"use client";

import { useDoctors } from "../../../context/DoctorsContext";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AppointmentForm from "../../../components/AppointmentForm";
import Confirmation from "../../../components/Confirmation";

// Define the Doctor type properly
type Doctor = {
  id: number;
  name: string;
  specialization: string;
  image: string;
  availability: string;
  schedule: string[];
};

export default function DoctorProfilePage() {
  const params = useParams();
  const { doctors, bookAppointment } = useDoctors();
  const [showForm, setShowForm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (params?.id && doctors.length > 0) {
      const found = doctors.find((d) => d.id === Number(params.id));
      if (found) {
        setDoctor(found);
        setShowForm(false);
        setConfirmed(false);
      }
    }
  }, [params, doctors]);

  if (!doctor) {
    return (
      <div className="text-center mt-20 text-gray-600">
        Loading doctor data...
      </div>
    );
  }

  const handleBook = (name: string, email: string, datetime: string) => {
    bookAppointment({ doctorId: doctor.id, name, email, datetime });
    setConfirmed(true);
    setShowForm(false);
  };

  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h2 className="text-2xl font-bold">{doctor.name}</h2>
        <p className="text-gray-700">{doctor.specialization}</p>
        <p
          className={`mt-2 ${
            doctor.availability === "Available Today"
              ? "text-green-600"
              : doctor.availability === "Fully Booked"
              ? "text-red-600"
              : "text-yellow-600"
          }`}
        >
          {doctor.availability}
        </p>
      </div>

      {!confirmed && !showForm && (
        <button
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          onClick={() => setShowForm(true)}
          disabled={doctor.availability !== "Available Today"}
          title={
            doctor.availability !== "Available Today"
              ? "This doctor is not available for appointments."
              : ""
          }
        >
          Book Appointment
        </button>
      )}

      {showForm && !confirmed && (
        <AppointmentForm doctorId={doctor.id} onBookAction={handleBook} />
      )}

      {confirmed && <Confirmation />}

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Schedule</h3>
        {doctor.schedule.length === 0 ? (
          <p>No schedule available.</p>
        ) : (
          <ul className="list-disc list-inside space-y-1">
            {doctor.schedule.map((slot, idx) => (
              <li key={idx}>{slot}</li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}