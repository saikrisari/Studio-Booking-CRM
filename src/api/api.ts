import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Client, ClientsFilters } from "@/entities/client/types";
import { Appointment, AppointmentsFilters } from "@/entities/appointment/types";
import { Employee } from "@/entities/employee/types";
import { Service } from "@/entities/service/types";
import { DashboardStats } from "@/entities/dashboard/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getClients: builder.query<Client[], ClientsFilters>({
      query: (filters = {}) => ({
        url: "/clients",
        params: filters,
      }),
    }),
    getClientById: builder.query<Client, string>({
      query: (id) => `/clients/${id}`,
    }),
    createClient: builder.mutation<Client, Omit<Client, "id" | "createdAt">>({
      query: (client) => ({
        url: "/clients",
        method: "POST",
        body: client,
      }),
    }),
    updateClient: builder.mutation<Client, { id: string } & Partial<Client>>({
      query: ({ id, ...patch }) => ({
        url: `/clients/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
    getAppointments: builder.query<Appointment[], AppointmentsFilters>({
      query: (filters = {}) => ({
        url: "/appointments",
        params: filters,
      }),
    }),
    getAppointmentById: builder.query<Appointment, string>({
      query: (id) => `/appointments/${id}`,
    }),
    createAppointment: builder.mutation<
      Appointment,
      Omit<Appointment, "id" | "createdAt">
    >({
      query: (appointment) => ({
        url: "/appointments",
        method: "POST",
        body: appointment,
      }),
    }),
    updateAppointment: builder.mutation<
      Appointment,
      { id: string } & Partial<Appointment>
    >({
      query: ({ id, ...patch }) => ({
        url: `/appointments/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
    cancelAppointment: builder.mutation<void, string>({
      query: (id) => ({
        url: `/appointments/${id}`,
        method: "DELETE",
      }),
    }),
    getServices: builder.query<Service[], void>({
      query: () => "/services",
    }),
    getServiceById: builder.query<Service, string>({
      query: (id) => `/services/${id}`,
    }),
    createService: builder.mutation<Service, Omit<Service, "id">>({
      query: (service) => ({
        url: "/services",
        method: "POST",
        body: service,
      }),
    }),
    updateService: builder.mutation<Service, { id: string } & Partial<Service>>(
      {
        query: ({ id, ...patch }) => ({
          url: `/services/${id}`,
          method: "PATCH",
          body: patch,
        }),
      },
    ),
    deleteService: builder.mutation<void, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
    }),
    getEmployees: builder.query<Employee[], void>({
      query: () => "/employees",
    }),
    getEmployeeById: builder.query<Employee, string>({
      query: (id) => `/employees/${id}`,
    }),
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => "/dashboard/stats",
    }),
  }),
});

export const {
  useGetClientsQuery,
  useGetClientByIdQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useGetAppointmentsQuery,
  useGetAppointmentByIdQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useCancelAppointmentMutation,
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useGetDashboardStatsQuery,
} = api;
