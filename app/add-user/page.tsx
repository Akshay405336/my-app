"use client";
import { useState } from "react";

export default function AddUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });
    alert("User added!");
  };

  return (
    <form onSubmit={submit} className="p-6 space-y-3">
      <input className="border p-2 w-full" placeholder="Name"
        value={name} onChange={(e)=>setName(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Email"
        value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Add User</button>
    </form>
  );
}
