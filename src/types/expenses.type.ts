import { z } from "zod";
import { expensesSchema } from "../schema/expenses.schema";

export type Expenses = z.infer<typeof expensesSchema>;
