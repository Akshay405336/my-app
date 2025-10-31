import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-3 rounded">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
