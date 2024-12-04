"use server";

import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

config({ path: ".env.local" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql);

export { db };
