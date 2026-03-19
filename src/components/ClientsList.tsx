"use client";

import { useGetClientsQuery } from "@/api/api";
import Link from "next/link";

export default function ClientsList() {
  const { data } = useGetClientsQuery();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((client) => (
            <tr key={client.id}>
              <td><Link href={`/clients/${client.id}`}>{client.name}</Link></td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>{client?.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
