"use client";

import { useGetClientByIdQuery } from "@/api/api";
import { use } from "react";

// условный рендеринг, просмотр и редактирование - форма с заполненными полями

export default function ClientPage({ params} : { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { data } = useGetClientByIdQuery(id);

    return (
        <div>
            <h1>Client {data?.id}</h1>
            <p>{data?.name}</p>
            <p>{data?.phone}</p>
            <p>{data?.email}</p>
            <p>{data?.notes}</p>
        </div>
    )
}