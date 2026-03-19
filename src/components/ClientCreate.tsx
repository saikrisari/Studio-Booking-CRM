"use client";

import { useCreateClientMutation } from "@/api/api";

export default function CreateClient() {
  const [createClient] = useCreateClientMutation();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    await createClient({
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      notes: formData.get("notes") as string,
    });

    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>CREATE client form</h2>
        <input type="text" placeholder="Name" name="name" required />
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          required
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
        />
        <input type="email" placeholder="Email" name="email" required />
        <textarea placeholder="Notes" name="notes" maxLength={250}></textarea>
        <button type="submit">Create Client</button>
      </form>
    </main>
  );
}
