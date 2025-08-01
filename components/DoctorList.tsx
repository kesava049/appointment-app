import { Doctor } from "../context/DoctorsContext";
import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors }: { doctors: Doctor[] }) {
  if (!doctors.length) return <div>No doctors found.</div>;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
}
