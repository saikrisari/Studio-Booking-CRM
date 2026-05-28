import { Appointment } from "../appointment/types";

export type DashboardStats = {
  revenueToday: number
  revenueWeek: number
  bookingsToday: number
  bookingsWeek: number
  popularServices: Array<{
    serviceId: string
    title: string
    count: number
  }>
  recentAppointments: Appointment[]
}