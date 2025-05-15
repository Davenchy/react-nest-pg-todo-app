import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  body: text('body').notNull(),
  completed: boolean('completed').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export type InsertTodo = typeof todos.$inferInsert;
export type SelectTodo = typeof todos.$inferInsert;
