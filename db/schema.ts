import { text, pgTable, serial } from "drizzle-orm/pg-core";

export const surgery = pgTable("surgery", {
  id: serial("id").primaryKey(),
  description: text("description").notNull(),
  urgent: text("urgent").notNull(),
});
