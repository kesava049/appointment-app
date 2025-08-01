import Link from "next/link";
import { Doctor } from "../context/DoctorsContext";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="border rounded flex flex-col items-center shadow p-4 hover:shadow-lg transition w-full">
      <img src={doctor.image} alt={doctor.name} className="h-24 w-24 mb-2 rounded-full object-cover" />
      <div className="font-bold">{doctor.name}</div>
      <div>{doctor.specialization}</div>
      <div className={`mt-1 text-sm ${
        doctor.availability === "Available Today"
          ? "text-green-600"
          : doctor.availability === "Fully Booked"
          ? "text-red-600"
          : "text-yellow-600"
      }`}>
        {doctor.availability}
      </div>
      <Link href={`/doctors/${doctor.id}`}>
        <span className="mt-2 px-3 py-1 cursor-pointer bg-blue-500 text-white rounded">View Profile</span>
      </Link>
    </div>
  );
}
