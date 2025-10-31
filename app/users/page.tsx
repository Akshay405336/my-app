"use client";

import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UsersPage() {
  const { data, error, isLoading } = useSWR("/api/users", fetcher, {
    refreshInterval: 2000, // refresh every 2 sec
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List (Live)</h1>
      <ul className="space-y-2">
        {data?.users?.map((user: any) => (
          <li key={user.id} className="border p-3 rounded">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
