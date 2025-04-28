import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/lib/db/schema.ts",   // Apne schema file ka sahi path dena
  driver: "postgres-js",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,  // Neon ka URL yahan ayega
  },
});
