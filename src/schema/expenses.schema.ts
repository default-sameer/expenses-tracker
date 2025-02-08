import { z } from "zod";

export const expensesSchema = z.object({
  id: z.string(),
  title: z.string().min(4).max(100),
  amount: z.number().int().positive(),
});

export const createExpensesSchema = expensesSchema.omit({ id: true });
