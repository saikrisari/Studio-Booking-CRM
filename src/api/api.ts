import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Client } from "@/models/client/types";
import { Appointment, AppointmentsFilters } from "@/models/appointment/types";
import { Employee } from "@/models/employee/types";
import { Service } from "@/models/service/types";
import { DashboardStats } from "@/models/dashboard/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: [
    "Clients",
    "Appointments",
    "Services",
    "Employees",
    "DashboardStats",
  ],
  endpoints: (builder) => ({
    getClients: builder.query<Client[], void>({
      query: () => ({
        url: "/clients",
      }),
      providesTags: ["Clients"],
    }),
    getClientById: builder.query<Client, string>({
      query: (id) => `/clients/${id}`,
      providesTags: (result, error, id) => [{ type: "Clients", id }],
    }),
    createClient: builder.mutation<Client, Omit<Client, "id" | "createdAt">>({
      query: (client) => ({
        url: "/clients",
        method: "POST",
        body: client,
      }),
      invalidatesTags: ["Clients"],
    }),
    updateClient: builder.mutation<Client, { id: string } & Partial<Client>>({
      query: ({ id, ...patch }) => ({
        url: `/clients/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Clients"],
    }),
    getAppointments: builder.query<Appointment[], AppointmentsFilters>({
      query: (filters = {}) => ({
        url: "/appointments",
        params: filters,
      }),
      providesTags: ["Appointments"],
    }),
    getAppointmentById: builder.query<Appointment, string>({
      query: (id) => `/appointments/${id}`,
      providesTags: (result, error, id) => [{ type: "Appointments", id }],
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
      invalidatesTags: ["Appointments"],
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
      invalidatesTags: ["Appointments"],
    }),
    cancelAppointment: builder.mutation<void, string>({
      query: (id) => ({
        url: `/appointments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Appointments"],
    }),
    getServices: builder.query<Service[], void>({
      query: () => "/services",
      providesTags: ["Services"],
    }),
    getServiceById: builder.query<Service, string>({
      query: (id) => `/services/${id}`,
      providesTags: (result, error, id) => [{ type: "Services", id }],
    }),
    createService: builder.mutation<Service, Omit<Service, "id">>({
      query: (service) => ({
        url: "/services",
        method: "POST",
        body: service,
      }),
      invalidatesTags: ["Services"],
    }),
    updateService: builder.mutation<Service, { id: string } & Partial<Service>>(
      {
        query: ({ id, ...patch }) => ({
          url: `/services/${id}`,
          method: "PATCH",
          body: patch,
        }),
        invalidatesTags: ["Services"],
      },
    ),
    deleteService: builder.mutation<void, string>({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),
    getEmployees: builder.query<Employee[], void>({
      query: () => "/employees",
      providesTags: ["Employees"],
    }),
    getEmployeeById: builder.query<Employee, string>({
      query: (id) => `/employees/${id}`,
      providesTags: (result, error, id) => [{ type: "Employees", id }],
    }),
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => "/dashboard/stats",
      providesTags: ["DashboardStats"],
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
