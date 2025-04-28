// import { serial, varchar } from "drizzle-orm/mysql-core";

// export const Budget=pgTable("budgets",{
//     id: serial('id').primaryKey(),
//     name:varchar('name').notNull(),
//     amount:varchar('amount').notNull(),
//     icon:varchar('icon'),
//     createdBy:varchar('createdBy').notNull()

// })
// db/schema.ts
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  amount: text("amount").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
