import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  await prisma.user.create({ data: body });
  return new Response("User created");
}
