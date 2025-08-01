"use server";

export interface AppointmentFormProps {
  doctorId: number;
  onBookAction: (name: string, email: string, datetime: string) => void;
}