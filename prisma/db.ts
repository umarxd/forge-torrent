import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

// Check if PrismaClient is defined. This helps with hot-reloading in development.
if (process.env.NODE_ENV === "development" && !global.prisma) {
  global.prisma = new PrismaClient();
}

const db = global.prisma || new PrismaClient();

export default db;
