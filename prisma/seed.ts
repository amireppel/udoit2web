import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

/**
 * Predefined users for testing:
 * 1. test@b.com / pass123
 * 2. pass@c.com / enter123
 */
const predefinedUsers = [
  {
    username: 'test@b.com',
    password: bcrypt.hashSync('pass123', 10),
  },
  {
    username: 'pass@c.com',
    password: bcrypt.hashSync('enter123', 10),
  },
];

async function main() {
  console.log('🌱 Starting seeding...');

  // Create predefined users
  for (const user of predefinedUsers) {
    const existingUser = await prisma.user.findUnique({
      where: { username: user.username },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: user,
      });
      console.log(`Created user: ${user.username}`);
    } else {
      console.log(`User already exists: ${user.username}`);
    }
  }

  console.log('✅ Seeding finished.');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 