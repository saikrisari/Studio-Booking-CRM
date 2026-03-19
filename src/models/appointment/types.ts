export type AppointmentStatus = "scheduled" | "completed" | "cancelled";

export type Appointment = {
  id: string;
  clientId: string;
  serviceId: string;
  employeeId: string;
  startAt: string;
  endAt: string;
  price: number;
  status: AppointmentStatus;
  cancelReason?: string;
  createdAt: string;
};

export type AppointmentsFilters = {
  status?: AppointmentStatus
  employeeId?: string
  serviceId?: string
  from?: string
  to?: string
}