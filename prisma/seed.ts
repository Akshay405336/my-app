import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Akshay", email: "akshay@example.com" },
      { name: "John", email: "john@example.com" },
    ],
  });

  console.log("✅ Users seeded successfully");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
