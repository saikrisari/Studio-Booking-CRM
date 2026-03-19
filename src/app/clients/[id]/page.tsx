"use client";

import { useGetClientByIdQuery } from "@/api/api";
import { use, useState } from "react";
import { useUpdateClientMutation } from "@/api/api";
import Link from "next/link";

export default function ClientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data } = useGetClientByIdQuery(id);
  const [isEdited, setEdited] = useState(false);

  const [updateClient] = useUpdateClientMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await updateClient({
      id,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      notes: formData.get("notes") as string,
    });

    setEdited(false);
  };

  return (
    <>
      {isEdited ? (
        <form onSubmit={handleSubmit}>
          <h2>UPDATE client form</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={data?.name}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            defaultValue={data?.phone}
            required
            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            defaultValue={data?.email}
            required
          />
          <textarea
            placeholder="Notes"
            name="notes"
            defaultValue={data?.notes}
            maxLength={250}
          ></textarea>
          <button type="submit">Update Client</button>
        </form>
      ) : (
        <div>
          <h1>Client {data?.id}</h1>
          <p>{data?.name}</p>
          <p>{data?.phone}</p>
          <p>{data?.email}</p>
          <p>{data?.notes}</p>
          <button onClick={() => setEdited(true)}>Edit</button>
        </div>
      )}
      <Link href={"/clients"}>Back</Link>
    </>
  );
}
