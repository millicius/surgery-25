import { text, pgTable, boolean, serial } from "drizzle-orm/pg-core";

export const surgery = pgTable("surgery", {
  id: serial("id").primaryKey(),
  description: text("description").notNull(),
  urgent: text("urgent").notNull(),
  ep: boolean("ep").default(false),
});
