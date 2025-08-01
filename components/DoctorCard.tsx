import Link from "next/link";
import { Doctor } from "../context/DoctorsContext";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const getAvailabilityStyle = (status: string) => {
    switch (status) {
      case "Available Today":
        return "text-green-700 bg-green-100";
      case "Fully Booked":
        return "text-red-700 bg-red-100";
      default:
        return "text-yellow-700 bg-yellow-100";
    }
  };

  return (
    <div className="bg-white border border-green-100 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-sm">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="h-32 w-32 mb-4 rounded-full object-cover border-4 border-green-200 shadow-sm"
      />
      <h3 className="text-xl font-semibold text-green-800">{doctor.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{doctor.specialization}</p>
      <div
        className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityStyle(doctor.availability)}`}
      >
        {doctor.availability}
      </div>
      <Link href={`/doctors/${doctor.id}`}>
        <span className="mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 cursor-pointer shadow-sm">
          View Profile
        </span>
      </Link>
    </div>
  );
}