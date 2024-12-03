import { text, boolean, pgTable, serial } from "drizzle-orm/pg-core";

export const surgery = pgTable("surgery", {
  id: serial("id").primaryKey(),
  urgent: text("urgent").notNull(),
  description: text("description").notNull(),
  prosthesis: boolean("prosthesis").default(false),
});
