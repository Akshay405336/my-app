import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const user = await prisma.user.create({
      data,
    });

    return Response.json({ success: true, user });
  } catch (error) {
    console.error("User creation error:", error);
    return Response.json({ success: false, message: "Something went wrong" }, { status: 500 });
  }
}
