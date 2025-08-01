import { Doctor } from "../context/DoctorsContext";
import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors }: { doctors: Doctor[] }) {
  if (!doctors.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
        <div className="text-center text-lg font-medium text-gray-700 bg-white p-6 rounded-lg shadow-md">
          No doctors found.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-10">
          Our Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </div>
  );
}