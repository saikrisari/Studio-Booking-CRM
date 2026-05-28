"use client";

import { useGetAppointmentsQuery } from "@/api/api";
import { useGetClientsQuery } from "@/api/api";
import { useGetServicesQuery } from "@/api/api";
import { useGetEmployeesQuery } from "@/api/api";

export default function AppointmentsList() {
  const { data: appointments } = useGetAppointmentsQuery({});
  const { data: clients } = useGetClientsQuery();
  const { data: services } = useGetServicesQuery();
  const { data: employees } = useGetEmployeesQuery();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Service</th>
            <th>Employee</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Price</th>
            <th>Status</th>
            <th>Cancel Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((appointment) => (
            <tr key={appointment.id}>
              <td>
                {
                  clients?.find((client) => client.id === appointment.clientId)
                    ?.name
                }
              </td>
              <td>
                {
                  services?.find(
                    (service) => service.id === appointment.serviceId,
                  )?.title
                }
              </td>
              <td>
                {
                  employees?.find(
                    (employee) => employee.id === appointment.employeeId,
                  )?.name
                }
              </td>
              <td>{appointment.startAt}</td>
              <td>{appointment.endAt}</td>
              <td>{appointment.price}</td>
              <td>{appointment.status}</td>
              <td>{appointment?.cancelReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
