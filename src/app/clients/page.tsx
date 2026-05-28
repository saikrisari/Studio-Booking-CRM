import ClientsList from "@/components/ClientsList";
import ClientSearch from "@/components/ClientSearch";
import CreateClient from "@/components/ClientCreate";

export default function ClientsPage() {
  return (
    <main>
      <ClientsList />
      <ClientSearch />
      <CreateClient />
    </main>
  );
}
