// import * as schema from './schema'
// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';
// const sql = neon('postgresql://expence-tracker_owner:npg_koaGA8R1qYrZ@ep-gentle-union-a5a6ofjo-pooler.us-east-2.aws.neon.tech/expence-tracker?sslmode=require');
// const db = drizzle(sql,{schema});

// db/index.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres(process.env.DATABASE_URL, { ssl: 'require' });

export const db = drizzle(queryClient);
