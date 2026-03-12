"use client";

import { useGetClientsQuery } from "@/api/api";
import Link from "next/link";

export default function ClientsList() {
  const { data } = useGetClientsQuery();

  return (
    <div>
      <ul>
        {data?.map((client) => (
          <li key={client.id}>
            <table>
              <thead>
                <tr>
                  <th><Link href={`/clients/${client.id}`}>{client.name}</Link></th>
                  <th>{client.phone}</th>
                  <th>{client.email}</th>
                  <th>{client?.notes}</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}
