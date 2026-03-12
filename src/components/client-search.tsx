"use client";
import { useGetClientsQuery } from "@/api/api";
import { useEffect, useState } from "react";

export default function ClientSearch() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const { data } = useGetClientsQuery();

  useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedInputValue(searchInputValue);
    }, 300)
    return () => clearTimeout(timer);
  }, [searchInputValue])

  const filteredClients = data?.filter((client) =>
    client.name.toLowerCase().includes(debouncedInputValue.toLowerCase()),
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search for client"
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      <div>
        {searchInputValue && (
          <ul>
            {filteredClients?.map((client) => (
              <li key={client.id}>{client.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
