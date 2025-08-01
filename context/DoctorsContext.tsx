"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  availability: string;
  schedule: string[];
}
export interface Appointment {
  doctorId: number;
  name: string;
  email: string;
  datetime: string;
}
interface DoctorsContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  bookAppointment: (appointment: Appointment) => void;
}

const DoctorsContext = createContext<DoctorsContextType>({
  doctors: [],
  appointments: [],
  bookAppointment: () => {},
});

export function useDoctors() {
  return useContext(DoctorsContext);
}

export function DoctorsProvider({ children }: { children: ReactNode }) {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch(() => setDoctors([]));
  }, []);

  const bookAppointment = (appointment: Appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  return (
    <DoctorsContext.Provider value={{ doctors, appointments, bookAppointment }}>
      {children}
    </DoctorsContext.Provider>
  );
}
