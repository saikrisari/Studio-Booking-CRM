"use client";

import ClientsList from "@/components/clients-list";
import ClientSearch from "@/components/client-search";
import { useCreateClientMutation } from "@/api/api";

export default function ClientsPage() {

const [createClient] = useCreateClientMutation();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  await createClient({
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    notes: formData.get("notes") as string
  });

    form.reset();
};

return (
  <main>
    <ClientsList />
    <ClientSearch />
      <form onSubmit={handleSubmit}>
        <h2>CREATE client form</h2>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Phone" name="phone" />
        <input type="email" placeholder="Email" name="email" />
        <textarea placeholder="Notes" name="notes"></textarea>
        <button type="submit">Create Client</button>
      </form>
    </main>
  );
}
